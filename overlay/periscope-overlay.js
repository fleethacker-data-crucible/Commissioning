/* Periscope overlay: shows the real Edge-Ops catalog page under the name PERISCOPE.
   Nothing in the edge-ops repo changes. This only edits what the browser shows, and only
   for the page it is injected into. It is a presentation skin, not a rename.

   Ways to apply it:
   1. Recording / screenshots:  node make-periscope-screen.mjs   (injects it with Playwright)
   2. Live, in a browser:       open the catalog, press F12, paste this whole file into the Console, Enter.
   Set HIDE_PORTS to false to keep the port badges. */
(function () {
  var HIDE_PORTS = true;   // catalog.json shows 8765 for several tools; PORTS.md assigns each its own block, so the badge is stale
  var NAME = 'PERISCOPE';
  var TAGLINE = 'Launch, deliver and run tools on the endpoint you already have.';
  var RE = /(fleethacker\s+)?edge[\s‐-―-]*ops/ig;
  var RETICLE = '<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" style="vertical-align:-6px;margin-right:12px"><circle cx="17" cy="17" r="14" fill="none" stroke="currentColor" stroke-width="2"/><path d="M17 1v8M17 25v8M1 17h8M25 17h8" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="17" r="2" fill="currentColor"/></svg>';

  function skinHeading() {
    var h = document.querySelector('header h1');
    if (h && h.getAttribute('data-periscope') !== '1') {
      h.setAttribute('data-periscope', '1');
      h.innerHTML = RETICLE + NAME;
      h.style.letterSpacing = '.32em';
      h.style.color = '#d6a948';
      var p = h.nextElementSibling;
      if (p && p.tagName === 'P') p.textContent = TAGLINE;
    }
  }
  function scrub(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n, todo = [];
    while ((n = w.nextNode())) {
      var pt = n.parentNode && n.parentNode.nodeName;
      if (pt === 'SCRIPT' || pt === 'STYLE') continue;
      if (RE.test(n.nodeValue)) todo.push(n);
      RE.lastIndex = 0;
    }
    todo.forEach(function (t) { t.nodeValue = t.nodeValue.replace(RE, 'Periscope'); });
  }
  function hideRepoLinks() {
    // The footer links name the repo. Hide them for the recording.
    var f = document.querySelector('footer');
    if (f) f.style.display = 'none';
  }
  function hidePorts() {
    if (!HIDE_PORTS) return;
    [].forEach.call(document.querySelectorAll('main *'), function (e) {
      if (e.children.length === 0 && /^port\s/i.test((e.textContent || '').trim())) e.style.display = 'none';
    });
  }
  function apply() {
    document.title = 'Periscope';
    skinHeading();
    hideRepoLinks();
    hidePorts();
    if (document.body) scrub(document.body);
  }
  apply();
  document.addEventListener('DOMContentLoaded', apply);
  if (document.body) {
    new MutationObserver(function () { apply(); }).observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      new MutationObserver(function () { apply(); }).observe(document.body, { childList: true, subtree: true });
    });
  }
})();
