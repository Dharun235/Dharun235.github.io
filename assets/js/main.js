document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navmenu = document.querySelector('#navmenu');

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function () {
      navmenu.classList.toggle('navmenu-active');
    });
  }

  // Typed.js initialization
  if (document.querySelector('.typed')) {
    let typedStrings = document.querySelector('.typed').getAttribute('data-typed-items').split(',');

    new Typed('.typed', {
      strings: typedStrings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }

  // AOS Initialization
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});
