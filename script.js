/**
 * MD. NUR ALAM - PORTFOLIO INTERACTIVITY
 * Fast, lightweight, zero-dependency vanilla JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initThemeToggle();
  initMobileNav();
  initScrollSpy();
  initCopyHandlers();
  initContactForm();
  initLedgerFilter();
});

/* --- Typewriter Role Effect (Reference Design) --- */
function initTypewriter() {
  const roleElem = document.getElementById('typewriter-role');
  if (!roleElem) return;

  const roles = [
    'AI/ML Engineer',
    'Computer Vision Researcher',
    'Software Engineer',
    'DL & Explainable AI Specialist',
    'Innovator & Tech Enthusiast'
  ];

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      roleElem.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 50;
    } else {
      charIndex++;
      roleElem.textContent = currentRole.substring(0, charIndex);
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  // Start after brief initial pause
  setTimeout(type, 1800);
}

/* --- Theme Toggle --- */
function initThemeToggle() {
  const btn = document.getElementById('theme-btn');
  const icon = document.getElementById('theme-icon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('nur_portfolio_theme') || 'dark';
  applyTheme(savedTheme);

  if (btn) {
    btn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('nur_portfolio_theme', nextTheme);
      showToast(`Switched to ${nextTheme} theme`);
    });
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (icon) {
      icon.textContent = theme === 'dark' ? '☼' : '☾';
    }
  }
}

/* --- Mobile Navigation --- */
function initMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

/* --- Scroll Spy --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --- Clipboard Copy Handlers --- */
function initCopyHandlers() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      if (!val) return;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(val).then(() => {
          showToast(`Copied: ${val}`);
        }).catch(() => fallbackCopy(val));
      } else {
        fallbackCopy(val);
      }
    });
  });

  function fallbackCopy(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
      showToast(`Copied: ${text}`);
    } catch (err) {
      showToast('Copy failed');
    }
    document.body.removeChild(el);
  }
}

/* --- Toast Feedback --- */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* --- Contact Form Submission --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all fields');
      return;
    }

    const mailto = `mailto:mdnuralam6498@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
    window.location.href = mailto;

    showToast('Opening mail client... Thank you!');
    form.reset();
  });
}

/* --- Recognition Ledger Filter Tabs --- */
function initLedgerFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const rows = document.querySelectorAll('.ledger-row');
  if (!tabs.length || !rows.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      rows.forEach(row => {
        const cat = row.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          row.classList.remove('is-hidden');
        } else {
          row.classList.add('is-hidden');
        }
      });
    });
  });
}

