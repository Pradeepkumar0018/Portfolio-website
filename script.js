const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  nav?.classList.toggle('open', !expanded);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
  });
});
