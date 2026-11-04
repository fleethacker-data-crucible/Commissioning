#!/usr/bin/env python3
"""Turn jobs.json + ids.json into ready-to-paste prompt files, in order.
  python make-prompts.py --list           show every job and whether it is ready or blocked
  python make-prompts.py                  write out/NN-<job>.txt for every job whose references are all filled in
  python make-prompts.py --set reyes-pick=413900    record an ID in ids.json
Nothing here calls a generator. Copy each file's prompt into Renoise with the settings in its header."""
import json, os, re, sys
here = os.path.dirname(os.path.abspath(__file__))
jobs = json.load(open(os.path.join(here, 'jobs.json')))['jobs']
idp = os.path.join(here, 'ids.json')
ids = json.load(open(idp)) if os.path.exists(idp) else {}
ids = {k: v for k, v in ids.items() if not k.startswith('_')}
if '--set' in sys.argv:
    for kv in sys.argv[sys.argv.index('--set') + 1:]:
        if '=' not in kv: break
        k, v = kv.split('=', 1); ids[k] = v
    json.dump(ids, open(idp, 'w'), indent=2); print('saved', idp); sys.exit(0)
def missing(j):
    keys = set(j['needs']) | set(re.findall(r'\{\{([\w-]+)\}\}', j['prompt']))
    return sorted(k for k in keys if not ids.get(k))
out = os.path.join(here, 'out'); os.makedirs(out, exist_ok=True)
for j in jobs:
    m = missing(j); tag = 'optional' if j['optional'] else ('manual' if j.get('manual') else 'required')
    if '--list' in sys.argv:
        print(f"{j['order']:02d} {j['id']:20s} {tag:9s} {'BLOCKED, needs: ' + ', '.join(m) if m else 'ready':45s} {j['model']} {j['size']} {j['aspect']} x{j['count']}")
        continue
    if m:
        print(f"skip  {j['order']:02d} {j['id']} (needs {', '.join(m)})"); continue
    body = j['prompt']
    for k, v in ids.items(): body = body.replace('{{%s}}' % k, v)
    note = ('# Note: ' + j['notes'] + '\n') if j.get('notes') else ''
    hdr = f"# {j['title']}\n{note}# Model: {j['model']}   Size: {j['size']}   Aspect: {j['aspect']}   Count: {j['count']}   Optional: {j['optional']}\n# When done, record the result:  python make-prompts.py --set {j['records']}=<ID>\n\n"
    path = os.path.join(out, f"{j['order']:02d}-{j['id']}.txt")
    open(path, 'w').write(hdr + body + '\n'); print('wrote', path)
