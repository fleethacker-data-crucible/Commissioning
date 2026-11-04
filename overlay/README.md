# Scope overlay

The presentation calls the Edge-Ops hub **Scope**. The repo, the catalog and every link keep the name `edge-ops`. This folder re-skins the real catalog page at display time only. Nothing in the edge-ops repo changes.

## What it does
- Title and heading become **SCOPE** with a scope reticle; the subtitle becomes the tagline.
- Any other visible "Edge-Ops" / "Edge Ops" text becomes "Scope" (it watches the page, so cards drawn later are covered too).
- The footer, which links to the repo, is hidden.
- The port badges are hidden (`HIDE_PORTS`), because `catalog.json` shows 8765 for several tools while `PORTS.md` gives each tool its own block. Set it to `false` to show them.

## Use it
1. **Screen still for the zoom (4K):** `node make-scope-screen.mjs --edge-ops <path to edge-ops>` writes `scope-screen-real.png` (3840x2160, dark). Pass `--playwright <folder>` if `require('playwright')` does not resolve.
2. **Live in a browser:** open `edge-ops/index.html`, press F12, paste all of `scope-overlay.js` into the Console, press Enter. It lasts until you reload.
3. **Recording:** inject it with Playwright's `addInitScript` (as the script does), or paste it in the Console before you start recording.

## Checked
Run against the real page: title "Scope", heading "SCOPE", no remaining "Edge-Ops" text in the page body, no port badges. The page's `<a>` repo links and the `/edge-ops` URL are not visible, but the address bar still shows the file path or URL, so crop or hide the address bar in the recording (use a Chrome app window).

## Limits
- It is a skin. If someone opens the page without it, they see Edge-Ops.
- Tool cards still show their real details: "Network" and "Outlook" badges, status words such as prototype or unreleased. That is accurate, so I left it.
- If the page's markup changes (for example `header h1` is renamed), the heading skin will stop applying.
