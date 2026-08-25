document.addEventListener('DOMContentLoaded', function () {
  const navs = document.querySelectorAll('.main-nav, .site-nav, .navbar');

  navs.forEach((nav) => {
    const toggle = nav.querySelector('.nav-toggle');
    const menu = nav.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      nav.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      document.querySelectorAll('.main-nav, .site-nav, .navbar').forEach((nav) => {
        const menu = nav.querySelector('.nav-menu');
        const toggle = nav.querySelector('.nav-toggle');
        if (!menu || !toggle) return;
        menu.classList.remove('open');
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
