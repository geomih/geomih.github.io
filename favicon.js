// Blinks the terminal cursor in the tab icon. Browsers don't animate SVG
// favicons themselves, so swap between the cursor-on and cursor-off image.
// favicon.svg stays as the static fallback (no JS, reduced motion, Safari).
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const link = document.querySelector('link[rel="icon"]');
  const frame = (cursor) => 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
    '<rect width="32" height="32" rx="7" fill="#1d2129"/>' +
    '<text x="4" y="24" font-family="ui-monospace, Consolas, Menlo, monospace" font-weight="700" font-size="23" fill="#f8f0e0">G</text>' +
    (cursor ? '<rect x="20" y="7" width="7" height="18" rx="1" fill="#7fb0e6"/>' : '') +
    '</svg>');
  const frames = [frame(true), frame(false)];
  let on = true;
  setInterval(() => {
    on = !on;
    link.href = frames[on ? 0 : 1];
  }, 600);
}
