#!/usr/bin/env python3
"""Rebuild REVIEW.md from jobs.json, and (optionally) the review page as an artifact-ready HTML fragment.
  python build-review.py [artifact-html-path]"""
import json, html, sys, os
here = os.path.dirname(os.path.abspath(__file__))
J = json.load(open(os.path.join(here, 'jobs.json')))['jobs']
INTRO = ["Nothing has been sent.", "Placeholders like {{reyes-pick}} are replaced by the ID of an earlier result. Masters and sheets are task IDs; the two *-north-panel keys are material IDs of the cropped north panels."]
CHECK = ["REYES and MORGAN appearance descriptions use my defaults. Change anything you do not want.",
 "REYES wears navy blue flame-resistant coveralls with rank on the collar and tapes on the chest (a reviewer's at-sea choice). Her exact uniform is still worth a carrier Sailor's look; the prompts carry no bracketed notes.",
 "The Captain's cap is plain navy with a small gold crest and gold oak-leaf visor, no lettering. The boat name is composited later.",
 "Badges are shown turned backward (plain white reverse). The \"CIV\" tag and name are composited later.",
 "No real names, ship names, hull numbers or seals appear in any prompt.",
 "Voices are described and given sample lines, not cloned. Seed Audio took three speakers in one task before (task 413603).",
 "No prices: there is no price list. Your ledger put a 1k image at about 6 credits, a character sheet at about 23 and a 4k room sheet at about 28."]
md = ["# Review: everything that would be sent to Renoise\n\n", f"**{INTRO[0]}** {INTRO[1]}\n\n## Review checklist\n\n"] + [f"- {c}\n" for c in CHECK]
for j in J:
    md.append(f"\n## {j['order']:02d}. {j['title']}{'  (optional)' if j['optional'] else ''}\n- Model: {j['model']}, size {j['size']}, aspect {j['aspect']}, count {j['count']}\n- Needs: {', '.join(j['needs']) or 'nothing'}\n- Result recorded as: `{j['records']}`\n")
    if j.get('notes'): md.append(f"- Note: {j['notes']}\n")
    md.append(f"\n```text\n{j['prompt']}\n```\n")
open(os.path.join(here, 'REVIEW.md'), 'w').write(''.join(md)); print('wrote REVIEW.md')
if len(sys.argv) > 1:
    tpl = open(os.path.join(here, 'review-page.css')).read()
    b = ['<main><h1>Renoise Payload Review</h1>', f'<section class="strip"><p><b class="ok">{INTRO[0]}</b> This is every prompt, in generation order. {html.escape(INTRO[1])} Copy a prompt to paste it into Renoise yourself.</p><ul>' + ''.join(f'<li>{html.escape(c)}</li>' for c in CHECK) + '</ul></section>']
    for j in J:
        opt = '<span class="tag">optional</span>' if j['optional'] else ('<span class="tag">manual step</span>' if j.get('manual') else '')
        note = f'<div class="meta">Note: {html.escape(j["notes"])}</div>' if j.get('notes') else ''
        b.append(f'<section class="card"><h2>{j["order"]:02d}. {html.escape(j["title"])}{opt}</h2><div class="meta">{html.escape(j["model"])} · size {j["size"]} · aspect {j["aspect"]} · count {j["count"]} · needs: {html.escape(", ".join(j["needs"]) or "nothing")} · records as {j["records"]}</div>{note}<pre id="p{j["order"]}">{html.escape(j["prompt"])}</pre><div class="row"><button type="button" data-i="{j["order"]}">Copy prompt</button><span class="done" id="d{j["order"]}" hidden>Copied</span></div></section>')
    b.append('</main>')
    js = open(os.path.join(here, 'review-page.js')).read()
    open(sys.argv[1], 'w').write(tpl + '\n' + ''.join(b) + js); print('wrote', sys.argv[1])
