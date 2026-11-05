// Halyard demo assembler v3: dialogue-driven.
// For every Renoise dialogue clip: find the speech chunks, split them into turns (longest pauses that also change
// pitch), cut the dead gaps, and fit each turn's screen range to its turn so every line starts on its screen.
// Usage: node compose3.mjs [--only t05-drift]     -> ..\Halyard-demo.mp4, Halyard-demo.srt
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, '..');
const VO = join(ROOT, 'voiceover-renoise');
const bin = 'C:/Users/Anthony/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0.2-full_build/bin/';
const FF = bin + 'ffmpeg.exe', FP = bin + 'ffprobe.exe';
const shots = 'C:/Users/Anthony/.claude/projects/C--Users-Anthony-AppData-Local-Claude-Data-claude-pzs8sxrjxfjjc-scratch-workspaces-64ef0a62-6657-4210-9062-b9f4fe34f2d2-3730a8e3-69c5-48b5-ab6e-b38a3899e4a9-scratch-2026-11-04-3d0956/0f7dd306-73b3-4fb8-9026-e90af44fdfa7/tool-results';
const FONT = 'C\\:/Windows/Fonts/segoeui.ttf', FONTB = 'C\\:/Windows/Fonts/segoeuib.ttf';
const W = join(here, 'build'); mkdirSync(W, { recursive: true });
const CACHE = join(here, 'cache'); mkdirSync(CACHE, { recursive: true });

const IDS = { 't00-open': 444045, 't01-key': 444066, 't02-lazarette': 444067, 't03-config': 444068, 't04-seed': 444069, 't05-drift': 444061, 't06-draft': 444070, 't07-undo': 444071, 't08-intake': 444072, 't09-plan': 444073, 't10-vision': 444074, 't11-integrations': 444075, 't12-safety': 444078, 't13-close': 444046 };
const LABELS = { 't01-key': 'A model key for the fleet', 't02-lazarette': 'Stow it in Lazarette', 't03-config': 'Configure Halyard', 't04-seed': 'Seed the backlog', 't05-drift': 'See the drift', 't06-draft': 'Draft, approve, apply', 't07-undo': 'Undo', 't08-intake': 'Intake', 't09-plan': 'Plan the sprint', 't10-vision': 'Vision and leadership', 't11-integrations': 'Integrations', 't12-safety': 'Safety and audit' };
const STILLS = {
  c02: { ids: ['bqxogj', 'znybz1', 'qutyhm', 'q6sdhr', '57ef5g'], blur: [[556, 178, 244, 255]] },
  c03: { ids: ['yhv4ov', '3rvwfo', 'ntvcta', 'ndrcut', 'qn7xmf', '7mky04'], blur: [] },
};
const CARDS = {
  open: { kicker: 'FLEET \u00b7 HALYARD', title: 'Halyard', lines: ["A product owner's mate for the backlog"] },
  close: { kicker: 'FLEET \u00b7 HALYARD', title: 'Halyard proposes. People decide.', lines: ["That's the watch. Fair winds."] },
  runner: { kicker: 'NEXT \u00b7 PLANNED', title: 'A runner that watches the work', lines: ['Watches commits and pull requests', 'Writes the story for the work it sees', 'You approve it: same diff, same gate'] },
};

const dlg = JSON.parse(readFileSync(join(here, 'dialogue.json'), 'utf8'));
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;

const run = (exe, args) => { const r = spawnSync(exe, args, { encoding: 'utf8', maxBuffer: 1 << 28 }); if (r.status) throw new Error(exe.split('/').pop() + ' ' + args.slice(0, 6).join(' ') + '\n' + (r.stderr || '').slice(-900)); return r; };
const ff = (args) => run(FF, ['-hide_banner', '-loglevel', 'error', '-y', ...args]);
const probeDur = (f) => parseFloat(run(FP, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).stdout);
const esc = (t) => t.replace(/\\/g, '\\\\').replace(/:/g, '\\:').replace(/'/g, '\u2019').replace(/%/g, '\\%');
const fmt = (n) => n.toFixed(3);

// Renoise sometimes emits a short clipped burst (pop) inside or after speech: mute those windows before analysis
const BURSTS = { 444071: [[8.10, 8.32]], 444068: [[26.235, 26.285]], 444073: [[20.745, 20.795]] };
function srcAudio(id) {
  const mp3 = join(VO, `renoise-${id}.mp3`); if (!BURSTS[id]) return mp3;
  const wav = join(CACHE, `clean-${id}.wav`);
  if (!existsSync(wav)) ff(['-i', mp3, '-af', BURSTS[id].map(([a, b]) => `volume=enable='between(t,${a},${b})':volume=0`).join(','), '-ar', '48000', wav]);
  return wav;
}

// ---- audio analysis ---------------------------------------------------------------------------------------
function analyze(id) {
  const cf = join(CACHE, id + '.json'); if (existsSync(cf)) return JSON.parse(readFileSync(cf, 'utf8'));
  const mp3 = srcAudio(id), dur = probeDur(mp3);
  const r = spawnSync(FF, ['-hide_banner', '-nostats', '-i', mp3, '-af', 'silencedetect=noise=-38dB:d=0.3', '-f', 'null', '-'], { encoding: 'utf8' });
  const marks = [...(r.stderr || '').matchAll(/silence_(start|end): ([\d.]+)/g)].map((m) => parseFloat(m[2]));
  const chunks = []; let t = 0;
  for (let i = 0; i < marks.length; i += 2) { const s = marks[i], e = i + 1 < marks.length ? marks[i + 1] : dur; if (s > t + 0.12) chunks.push([t, s]); t = e; }
  if (dur > t + 0.12) chunks.push([t, dur]);
  const wav = join(W, id + '.8k.wav'); ff(['-i', mp3, '-ac', '1', '-ar', '8000', wav]);
  const f0 = JSON.parse(run('python', ['-I', join(here, 'chunkf0.py'), wav, chunks.map((c) => c[0].toFixed(2) + '-' + c[1].toFixed(2)).join(',')]).stdout);
  const out = { dur, chunks, f0 }; writeFileSync(cf, JSON.stringify(out)); return out;
}
const cls = (f) => (f == null ? null : f >= 150 ? 'F' : f <= 135 ? 'M' : null);
// Chunk index where each turn begins. Tries every way to split the chunks into the expected turns and keeps the one
// where each turn's speech time best matches how long its text takes to say (about 19.5 characters per second of
// speech, calibrated on a clip with known turns), with a small penalty for a chunk whose pitch contradicts the speaker.
const CPS = 19.5;
function turnStarts(a, turns) {
  const { chunks, f0 } = a, n = turns.length; if (n <= 1) return [0];
  const len = chunks.map((c) => c[1] - c[0]), N = chunks.length;
  const want = turns.map((t) => (t.text.length / CPS));
  const gender = turns.map((t) => (t.who === 'R' ? 'F' : 'M'));
  const cost = (starts) => {
    let c = 0;
    for (let k = 0; k < n; k++) {
      const lo = starts[k], hi = k + 1 < n ? starts[k + 1] : N; let got = 0;
      for (let i = lo; i < hi; i++) { got += len[i]; const g = len[i] >= 1.0 ? cls(f0[i]) : null; if (g && g !== gender[k]) c += 0.3; }
      c += (got - want[k]) ** 2;
    }
    return c;
  };
  let best = null, bestCost = Infinity;
  const rec = (k, from, acc) => {
    if (k === n) { const c = cost(acc); if (c < bestCost) { bestCost = c; best = acc.slice(); } return; }
    for (let i = from; i <= N - (n - k); i++) rec(k + 1, i + 1, [...acc, i]);
  };
  rec(1, 1, [0]);
  return best;
}
function trimPlan(a, starts) {
  const { chunks, dur } = a, segs = []; let segStart = Math.max(0, chunks[0][0] - 0.25);
  for (let i = 0; i < chunks.length; i++) {
    const last = i === chunks.length - 1, gap = last ? 0 : chunks[i + 1][0] - chunks[i][1];
    if (last) segs.push([segStart, Math.min(dur, chunks[i][1] + 0.5)]);
    else if (gap > 0.9) { segs.push([segStart, chunks[i][1] + 0.35]); segStart = chunks[i + 1][0] - 0.35; }
  }
  let off = 0; const map = segs.map(([s, e]) => { const o = { s, e, off }; off += e - s; return o; });
  const nt = (t) => { for (const m of map) if (t >= m.s - 1e-6 && t <= m.e + 1e-6) return m.off + (t - m.s); const m = map.filter((x) => x.e <= t).pop() || map[0]; return m.off + Math.min(m.e - m.s, Math.max(0, t - m.s)); };
  return { segs, nt, total: off };
}
function trimAudio(id, plan, out) {
  const mp3 = srcAudio(id), F = 0.03;
  const parts = plan.segs.map(([s, e], k) => `[0:a]atrim=start=${fmt(s)}:end=${fmt(e)},asetpts=PTS-STARTPTS,afade=t=in:d=${F},afade=t=out:st=${fmt(Math.max(0, e - s - F))}:d=${F}[a${k}]`).join(';');
  const cat = plan.segs.map((_, k) => `[a${k}]`).join('') + `concat=n=${plan.segs.length}:v=0:a=1,aresample=48000,highpass=f=70,aformat=channel_layouts=stereo`;
  // two-pass linear loudnorm: same level for every task, no pumping/noise swell
  const pass1 = spawnSync(FF, ['-hide_banner', '-i', mp3, '-filter_complex', parts + ';' + cat + ',loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json[out]', '-map', '[out]', '-f', 'null', '-'], { encoding: 'utf8' });
  const m = (pass1.stderr.match(/\{[^{}]*"input_i"[^{}]*\}/) || [])[0]; const j = m ? JSON.parse(m) : null;
  const ln = j ? `loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=${j.input_i}:measured_TP=${j.input_tp}:measured_LRA=${j.input_lra}:measured_thresh=${j.input_thresh}:offset=${j.target_offset}:linear=true` : 'loudnorm=I=-16:TP=-1.5:LRA=11';
  ff(['-i', mp3, '-filter_complex', parts + ';' + cat + ',' + ln + '[out]', '-map', '[out]', '-ar', '48000', out]);
}

// ---- picture segments -------------------------------------------------------------------------------------
const labelF = (text) => `,drawtext=fontfile='${FONTB}':text='${esc(text)}':fontcolor=0xE2B04A:fontsize=30:x=60:y=h-110:box=1:boxcolor=0x0A1428@0.78:boxborderw=14:enable='lt(t,3.5)'`;
function clipSegment(turn, D, out, label) {
  const src = join(ROOT, 'clips', turn.clip + '.webm'), span = turn.to - turn.from;
  const s = Math.min(14, Math.max(0.75, span / D)), play = span / s, pad = Math.max(0, D - play);
  const vf = `trim=start=${turn.from}:end=${turn.to},setpts=(PTS-STARTPTS)/${s.toFixed(4)},fps=30,tpad=stop_mode=clone:stop_duration=${(pad + 1).toFixed(2)},trim=duration=${fmt(D)},setpts=PTS-STARTPTS${label ? labelF(label) : ''}`;
  ff(['-i', src, '-vf', vf, '-t', fmt(D), '-an', '-r', '30', '-c:v', 'libx264', '-crf', '19', '-pix_fmt', 'yuv420p', out]);
  return s;
}
function stillsSegment(turn, D, out, label) {
  const cfg = STILLS[turn.clip], idx = turn.stills, n = idx.length, X = 0.4;
  const d = (D + X * (n - 1)) / n, frames = Math.max(2, Math.round(d * 30));
  const find = (id) => { const f = readdirSync(shots).find((x) => x.endsWith(id + '.jpg')); if (!f) throw new Error('missing still ' + id); return join(shots, f); };
  const inputs = [], chains = [];
  idx.forEach((k, i) => {
    inputs.push('-i', find(cfg.ids[k]));
    const b = cfg.blur.map(([x, y, w, h], q) => `split[m${i}${q}][c${i}${q}];[c${i}${q}]crop=${w}:${h}:${x}:${y},boxblur=12[b${i}${q}];[m${i}${q}][b${i}${q}]overlay=${x}:${y}`).join(',');
    chains.push(`[${i}:v]${b ? b + ',' : ''}scale=1920:1000:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x0A1428,setsar=1,loop=loop=${frames}:size=1,fps=30,trim=end_frame=${frames},setpts=PTS-STARTPTS,format=yuv420p[v${i}]`);
  });
  let last = 'v0', t = d;
  for (let i = 1; i < n; i++) { chains.push(`[${last}][v${i}]xfade=transition=fade:duration=${X}:offset=${(t - X).toFixed(3)}[x${i}]`); last = 'x' + i; t += d - X; }
  chains.push(`[${last}]trim=duration=${fmt(D)},setpts=PTS-STARTPTS${label ? labelF(label) : ''}[o]`);
  ff([...inputs, '-filter_complex', chains.join(';'), '-map', '[o]', '-t', fmt(D), '-r', '30', '-c:v', 'libx264', '-crf', '19', '-pix_fmt', 'yuv420p', out]);
}
function cardSegment(kind, D, out) {
  const c = CARDS[kind], big = c.title.length > 22 ? 70 : 110;
  const lines = c.lines.map((l, i) => `drawtext=fontfile='${FONT}':text='${esc(l)}':fontcolor=0xAAB7CA:fontsize=36:x=(w-tw)/2:y=h/2+${70 + i * 54}`).join(',');
  const vf = [`drawtext=fontfile='${FONTB}':text='${esc(c.kicker)}':fontcolor=0xE2B04A:fontsize=30:x=(w-tw)/2:y=h/2-160`, `drawtext=fontfile='${FONTB}':text='${esc(c.title)}':fontcolor=0xE8EDF5:fontsize=${big}:x=(w-tw)/2:y=h/2-90`, lines, 'fade=in:0:20', `fade=out:st=${(D - 0.7).toFixed(2)}:d=0.7`].join(',');
  ff(['-f', 'lavfi', '-i', `color=c=0x0A1428:s=1920x1080:r=30:d=${fmt(D)}`, '-vf', vf, '-t', fmt(D), '-r', '30', '-c:v', 'libx264', '-crf', '19', '-pix_fmt', 'yuv420p', out]);
}

// ---- captions ---------------------------------------------------------------------------------------------
function captionsFor(turnText, chunksNew, base) {
  const sentences = turnText.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) || [turnText];
  if (sentences.length === chunksNew.length) return sentences.map((s, i) => [base + chunksNew[i][0], base + chunksNew[i][1], s]);
  const total = chunksNew.reduce((n, c) => n + (c[1] - c[0]), 0), chars = sentences.reduce((n, s) => n + s.length, 0);
  const at = (x) => { let acc = 0; for (const c of chunksNew) { const l = c[1] - c[0]; if (x <= acc + l + 1e-9) return c[0] + (x - acc); acc += l; } return chunksNew.at(-1)[1]; };
  let cum = 0; return sentences.map((s) => { const a = (cum / chars) * total; cum += s.length; return [base + at(a), base + at((cum / chars) * total), s]; });
}

// ---- main -------------------------------------------------------------------------------------------------
const taskFiles = [], captions = []; let clock = 0; const report = [];
for (const task of dlg.tasks) {
  if (only && task.id !== only) continue;
  const id = IDS[task.id]; const a = analyze(id);
  const starts = turnStarts(a, task.turns), plan = trimPlan(a, starts);
  const onset = starts.map((c) => a.chunks[c][0]);
  const tb = task.turns.map((_, k) => (k === 0 ? 0 : Math.max(0.2, plan.nt(onset[k]) - 0.2)));
  const D = task.turns.map((_, k) => (k + 1 < task.turns.length ? tb[k + 1] : plan.total) - tb[k]);
  const audio = join(W, task.id + '.wav'); trimAudio(id, plan, audio);
  // group consecutive card turns that share a card
  const groups = []; task.turns.forEach((t, k) => { const g = groups.at(-1); if (g && t.card && g.turn.card === t.card) { g.D += D[k]; g.ks.push(k); } else groups.push({ turn: t, D: D[k], ks: [k] }); });
  const segFiles = [];
  groups.forEach((g, gi) => {
    const f = join(W, `${task.id}.${gi}.mp4`); const label = gi === 0 ? LABELS[task.id] : null;
    if (g.turn.card) cardSegment(g.turn.card, g.D, f);
    else if (g.turn.stills) stillsSegment(g.turn, g.D, f, label);
    else { const s = clipSegment(g.turn, g.D, f, label); report.push(`${task.id} turn ${g.ks[0]} ${g.turn.clip} ${g.turn.from}-${g.turn.to}s -> ${g.D.toFixed(1)}s (x${s.toFixed(2)})`); }
    segFiles.push(f);
  });
  const list = join(W, task.id + '.txt'); writeFileSync(list, segFiles.map((f) => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
  const vid = join(W, task.id + '.v.mp4'); ff(['-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', vid]);
  const out = join(W, task.id + '.mov');
  ff(['-i', vid, '-i', audio, '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'pcm_s16le', '-t', fmt(plan.total), out]);
  // captions from the real speech chunks of each turn
  task.turns.forEach((t, k) => {
    const c0 = starts[k], c1 = (k + 1 < starts.length ? starts[k + 1] : a.chunks.length) - 1;
    const cn = a.chunks.slice(c0, c1 + 1).map(([s, e]) => [plan.nt(s), plan.nt(e)]);
    captions.push(...captionsFor(t.text, cn, clock));
  });
  report.push(`${task.id}: audio ${a.dur.toFixed(1)}s -> ${plan.total.toFixed(1)}s, turns at ${tb.map((x) => x.toFixed(1)).join(' / ')}  (pitch/gap picks chunks ${starts.join(',')})`);
  clock += plan.total; taskFiles.push(out);
}
console.log(report.join('\n'));
const listAll = join(W, 'all.txt'); writeFileSync(listAll, taskFiles.map((f) => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
const joined = join(W, 'joined.mov'); ff(['-f', 'concat', '-safe', '0', '-i', listAll, '-c', 'copy', joined]);
const ts = (x) => { const ms = Math.round(x * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60; return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`; };
const srt = join(ROOT, 'Halyard-demo.srt'); writeFileSync(srt, captions.map(([s, e, x], i) => `${i + 1}\n${ts(s)} --> ${ts(Math.max(e, s + 0.8))}\n${x}\n`).join('\n'));
const srtPath = srt.replace(/\\/g, '/').replace(':', '\\:');
ff(['-i', joined, '-f', 'lavfi', '-i', 'anoisesrc=c=pink:a=0.0012:r=48000', '-filter_complex', `[0:v]subtitles='${srtPath}':fontsdir='C\\:/Windows/Fonts':force_style='FontName=Segoe UI,FontSize=20,PrimaryColour=&H00F5EDE8,OutlineColour=&H80000000,BackColour=&H990A1428,BorderStyle=4,Outline=0,Shadow=0,MarginV=36'[v];[0:a]afftdn=nr=8:nf=-35[s];[1:a]aformat=channel_layouts=stereo[n];[s][n]amix=inputs=2:normalize=0:duration=first[a]`, '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', join(ROOT, only ? `Halyard-demo-${only}.mp4` : 'Halyard-demo.mp4')]);
console.log('done', probeDur(join(ROOT, only ? `Halyard-demo-${only}.mp4` : 'Halyard-demo.mp4')).toFixed(1) + 's');
