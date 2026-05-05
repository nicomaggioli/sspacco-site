/* ============================================================
   sspacco — light, tasteful interactions only
   ============================================================ */

// ---------- EST clock ----------
(function clock() {
  const el = document.getElementById('clock');
  const day = document.getElementById('today');
  if (!el) return;

  const fmtTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour12: false,
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
  const fmtDay = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
  });

  function tick() {
    el.textContent = fmtTime.format(new Date()) + ' EST';
    day.textContent = fmtDay.format(new Date()).toLowerCase();
  }
  tick();
  setInterval(tick, 1000);
})();


// ---------- work filter ----------
(function filter() {
  const buttons = document.querySelectorAll('.filter li');
  const cards = document.querySelectorAll('.grid .card');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      buttons.forEach(b => b.classList.remove('is-on'));
      btn.classList.add('is-on');

      cards.forEach(c => {
        if (f === 'all' || c.dataset.cat === f) {
          c.classList.remove('is-hidden');
        } else {
          c.classList.add('is-hidden');
        }
      });
    });
  });
})();


// ---------- reveal on scroll ----------
(function reveal() {
  const targets = document.querySelectorAll(
    '.section-head, .grid .card, .bio p, .facts li, .now-list li, .contact-list li'
  );
  targets.forEach(t => t.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(t => io.observe(t));
})();


// ---------- subtle: log a Tibor-ish hello ----------
console.log('%cmade quiet, a little crude — sspacco', 'font: italic 14px/1.4 Georgia; color:#1d3fff;');
