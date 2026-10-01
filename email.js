// The address is never in the HTML source and is only assembled on click,
// so scrapers don't see it, including ones that run scripts.
for (const btn of document.querySelectorAll('button.email')) {
  btn.addEventListener('click', () => {
    const addr = btn.dataset.u + '@' + btn.dataset.d;
    const a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    btn.replaceWith(a);
    a.focus();
  });
}
