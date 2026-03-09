/**
 * SomaLab Theme — Main JS
 * Handles scroll animations and mobile menu toggle.
 */

(function () {
  'use strict';

  // ===== Scroll fade-in animations =====
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(function (el) {
    observer.observe(el);
  });

  // ===== Mobile menu toggle =====
  var toggle = document.getElementById('mobileToggle');
  var menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
