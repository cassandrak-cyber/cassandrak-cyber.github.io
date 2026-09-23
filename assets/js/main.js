(() => {
  'use strict';
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const rain = document.querySelector('.code-rain');
  const button = document.querySelector('.motion');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  try { paused = localStorage.getItem('portfolio-motion-paused') === 'true'; } catch (_) { /* Storage is optional. */ }
  const snippets = ['SecurityEvent\n| summarize count()\nby Computer', 'Get-WinEvent\n-LogName Security', 'packet.time\nconn.log\nobserve → analyze', 'def investigate():\n    read_logs()\n    correlate()', 'source.ip\ndestination.port\nevent.action', 'Zeek / DNS\nquery → response', 'timeline\nevidence\ncontext', 'host.name\nuser.name\nevent.id'];
  snippets.forEach((text, i) => {
    const strand = document.createElement('span');
    strand.className = 'code-strand'; strand.textContent = text;
    strand.style.left = `${8 + i * 12}%`;
    strand.style.setProperty('--duration', `${32 + i * 4}s`);
    strand.style.setProperty('--delay', `${-i * 8}s`);
    rain.appendChild(strand);
  });
  function sync() {
    document.body.classList.toggle('paused', paused || document.hidden || reducedMotion.matches);
    button.hidden = reducedMotion.matches;
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Resume background motion' : 'Pause background motion';
  }
  button.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('portfolio-motion-paused', String(paused)); } catch (_) { /* Keep working without storage. */ }
    sync();
  });
  reducedMotion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  sync();
})();
