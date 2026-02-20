/**
 * MM Painting & Design — script.js
 * Pure vanilla JS: hamburger nav, sticky header, back-to-top, form validation
 */

(function () {
  'use strict';

  /* ── DOM REFERENCES ── */
  const header       = document.getElementById('siteHeader');
  const hamburger    = document.getElementById('hamburger');
  const mobileNav    = document.getElementById('mobileNavOverlay');
  const backToTop    = document.getElementById('backToTop');
  const contactForm  = document.getElementById('contactForm');
  const yearEl       = document.getElementById('year');
  const mobileLinks  = document.querySelectorAll('.mobile-nav-link');

  /* ── YEAR ── */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── STICKY HEADER SHADOW ── */
  function onScroll() {
    // Sticky header shadow
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }

    // Back-to-top visibility
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.hidden = false;
      } else {
        backToTop.hidden = true;
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── BACK TO TOP ── */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── HAMBURGER / MOBILE NAV ── */
  function openMobileNav() {
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleMobileNav() {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', toggleMobileNav);

    // Close on mobile nav link click
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        closeMobileNav();
        hamburger.focus();
      }
    });

    // Close on overlay click (outside nav)
    mobileNav.addEventListener('click', function (e) {
      if (e.target === mobileNav) closeMobileNav();
    });
  }

  /* ── SMOOTH SCROLL for nav links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── CONTACT FORM VALIDATION ── */
  if (contactForm) {

    function showError(inputId, errorId, message) {
      const input = document.getElementById(inputId);
      const error = document.getElementById(errorId);
      if (input) input.classList.add('error');
      if (error) error.textContent = message;
    }

    function clearError(inputId, errorId) {
      const input = document.getElementById(inputId);
      const error = document.getElementById(errorId);
      if (input) input.classList.remove('error');
      if (error) error.textContent = '';
    }

    // Real-time clear errors on input
    ['name', 'phone', 'email', 'message'].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', function () {
          clearError(id, id + 'Error');
        });
      }
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const name    = document.getElementById('name');
      const phone   = document.getElementById('phone');
      const email   = document.getElementById('email');
      const message = document.getElementById('message');

      // Clear previous errors
      ['name', 'phone', 'email', 'message'].forEach(function (id) {
        clearError(id, id + 'Error');
      });

      // Name validation
      if (!name || name.value.trim().length < 2) {
        showError('name', 'nameError', 'Please enter your full name.');
        valid = false;
      }

      // Phone validation
      if (!phone || phone.value.trim().length < 7) {
        showError('phone', 'phoneError', 'Please enter a valid phone number.');
        valid = false;
      }

      // Email validation (optional but if filled must be valid)
      if (email && email.value.trim().length > 0) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
          showError('email', 'emailError', 'Please enter a valid email address.');
          valid = false;
        }
      }

      // Message validation
      if (!message || message.value.trim().length < 10) {
        showError('message', 'messageError', 'Please describe your project (at least 10 characters).');
        valid = false;
      }

      if (!valid) {
        // Focus first error
        const firstError = contactForm.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      // Build mailto
      const subject = encodeURIComponent('Free Estimate Request — MM Painting & Design');
      const body = encodeURIComponent(
        'Name: '    + name.value.trim()    + '\n' +
        'Phone: '   + phone.value.trim()   + '\n' +
        'Email: '   + (email ? email.value.trim() : 'Not provided') + '\n\n' +
        'Project Details:\n' + message.value.trim()
      );
      const mailto = 'mailto:estimates@mmpaintingdesign.com?subject=' + subject + '&body=' + body;
      window.location.href = mailto;

      // Show success state
      const submitBtn = contactForm.querySelector('.form-submit');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '✓ Request Sent! We\'ll be in touch.';
        submitBtn.disabled = true;
        submitBtn.style.background = '#22863a';
        submitBtn.style.borderColor = '#22863a';
        setTimeout(function () {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
          contactForm.reset();
        }, 5000);
      }
    });
  }

  /* ── FAQ ACCORDION: close others when one opens ── */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });

  /* ── INTERSECTION OBSERVER for subtle entrance animations ── */
  if ('IntersectionObserver' in window) {
    const observeEls = document.querySelectorAll(
      '.service-card, .review-card, .why-item, .gallery-item, .faq-item, .about-stat'
    );

    const style = document.createElement('style');
    style.textContent = `
      .observe-target {
        opacity: 0;
        transform: translateY(18px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .observe-target.in-view {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    observeEls.forEach(function (el, i) {
      el.classList.add('observe-target');
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    observeEls.forEach(function (el) { observer.observe(el); });
  }

})();
