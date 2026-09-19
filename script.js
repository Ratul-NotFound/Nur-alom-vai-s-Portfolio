/**
 * MD. NUR ALAM - HIGH-PERFORMANCE INTERACTIVE PORTFOLIO ENGINE
 * Senior Frontend Craftsmanship: Modular, Accessible, Zero-Dependency, Responsive.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initThemeToggle();
  initMobileNav();
  initScrollSpy();
  initVisionSimulator();
  initProjectFiltering();
  initBibtexModal();
  initClipboardHandlers();
  initContactForm();
});

/* --- Scroll Depth Reading Progress --- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

/* --- Theme Management --- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  const storedTheme = localStorage.getItem('na_portfolio_theme') || 'dark';
  setTheme(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('na_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} theme`);
    });
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☼' : '☾';
    }
  }
}

/* --- Mobile Navigation Drawer --- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.textContent = isOpen ? '✕' : '☰';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          toggleBtn.textContent = '☰';
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
}

/* --- Scroll Spy Navigation --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --- INTERACTIVE GRAD-CAM & COMPUTER VISION SIMULATOR --- */
function initVisionSimulator() {
  const modeBtns = document.querySelectorAll('.vision-mode-btn');
  const diseaseBtns = document.querySelectorAll('.disease-btn');

  const gradcamOverlay = document.getElementById('gradcam-overlay');
  const attentionBox = document.getElementById('attention-bounding-box');
  const attentionLabel = document.getElementById('attention-label');
  const lesion1 = document.getElementById('lesion-primary');
  const lesion2 = document.getElementById('lesion-secondary');
  const statusTag = document.getElementById('viewport-status-tag');

  const teleClass = document.getElementById('tele-class');
  const teleConf = document.getElementById('tele-conf');
  const teleLatency = document.getElementById('tele-latency');

  // Diagnostic profiles for Amrapali mango cultivar
  const diseaseProfiles = {
    anthracnose: {
      name: 'Anthracnose (Colletotrichum)',
      conf: '98.7%',
      latency: '14.2 ms',
      lesionColor: '#78350f',
      lesionStroke: '#b45309',
      hasLesions: true,
      boxX: '90', boxY: '55', boxW: '105', boxH: '75',
      boxLabel: 'ROI_01: ANTHRACNOSE [0.987]'
    },
    dieback: {
      name: 'Dieback (Lasiodiplodia theobromae)',
      conf: '97.3%',
      latency: '15.8 ms',
      lesionColor: '#451a03',
      lesionStroke: '#78350f',
      hasLesions: true,
      boxX: '125', boxY: '35', boxW: '75', boxH: '80',
      boxLabel: 'ROI_01: DIEBACK [0.973]'
    },
    canker: {
      name: 'Bacterial Canker (Xanthomonas)',
      conf: '96.5%',
      latency: '13.9 ms',
      lesionColor: '#7f1d1d',
      lesionStroke: '#b91c1c',
      hasLesions: true,
      boxX: '105', boxY: '70', boxW: '80', boxH: '60',
      boxLabel: 'ROI_01: BACTERIAL CANKER [0.965]'
    },
    healthy: {
      name: 'Healthy Control (No Pathogen)',
      conf: '99.1%',
      latency: '12.4 ms',
      lesionColor: '#151b24',
      lesionStroke: '#252a38',
      hasLesions: false,
      boxX: '45', boxY: '22', boxW: '190', boxH: '136',
      boxLabel: 'ROI_FULL: HEALTHY [0.991]'
    }
  };

  let currentMode = 'gradcam';
  let currentDisease = 'anthracnose';

  // Handle Mode changes (Grad-CAM, Optical, Attention)
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.getAttribute('data-mode');
      applyVisionState();
    });
  });

  // Handle Disease selection changes
  diseaseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      diseaseBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDisease = btn.getAttribute('data-disease');
      applyVisionState();
    });
  });

  function applyVisionState() {
    const profile = diseaseProfiles[currentDisease];

    // Update Telemetry
    if (teleClass) teleClass.textContent = profile.name;
    if (teleConf) teleConf.textContent = profile.conf;
    if (teleLatency) teleLatency.textContent = profile.latency;

    // Update Lesion visuals
    if (lesion1 && lesion2) {
      if (profile.hasLesions) {
        lesion1.style.opacity = '1';
        lesion2.style.opacity = '1';
        lesion1.setAttribute('fill', profile.lesionColor);
        lesion1.setAttribute('stroke', profile.lesionStroke);
        lesion2.setAttribute('fill', profile.lesionColor);
        lesion2.setAttribute('stroke', profile.lesionStroke);
      } else {
        lesion1.style.opacity = '0';
        lesion2.style.opacity = '0';
      }
    }

    // Update Mode Visuals
    if (currentMode === 'gradcam') {
      if (gradcamOverlay) gradcamOverlay.style.opacity = profile.hasLesions ? '1' : '0.1';
      if (attentionBox) attentionBox.style.opacity = '0';
      if (attentionLabel) attentionLabel.style.opacity = '0';
      if (statusTag) statusTag.textContent = 'LAYER: CONV_LAST // GRAD-CAM ACTIVE';
    } else if (currentMode === 'optical') {
      if (gradcamOverlay) gradcamOverlay.style.opacity = '0';
      if (attentionBox) attentionBox.style.opacity = '0';
      if (attentionLabel) attentionLabel.style.opacity = '0';
      if (statusTag) statusTag.textContent = 'OPTICAL CAPTURE // RGB RAW';
    } else if (currentMode === 'attention') {
      if (gradcamOverlay) gradcamOverlay.style.opacity = '0.25';
      if (attentionBox) {
        attentionBox.style.opacity = '1';
        attentionBox.setAttribute('x', profile.boxX);
        attentionBox.setAttribute('y', profile.boxY);
        attentionBox.setAttribute('width', profile.boxW);
        attentionBox.setAttribute('height', profile.boxH);
      }
      if (attentionLabel) {
        attentionLabel.style.opacity = '1';
        attentionLabel.setAttribute('x', profile.boxX);
        attentionLabel.setAttribute('y', String(Number(profile.boxY) - 5));
        attentionLabel.textContent = profile.boxLabel;
      }
      if (statusTag) statusTag.textContent = 'ATTENTION MAP // BOUNDING ROI';
    }
  }
}

/* --- Project Category Filter --- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (targetFilter === 'all' || cardCategory === targetFilter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --- BibTeX Modal System --- */
function initBibtexModal() {
  const modal = document.getElementById('bibtex-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const content = document.getElementById('bibtex-content');
  const copyBtn = document.getElementById('copy-bibtex-btn');
  const openBtns = document.querySelectorAll('.open-bibtex-btn');

  const citations = {
    ieee: `@inproceedings{alam2026benchmarking,
  title={Benchmarking Attention-Enhanced Encoder-Decoder Models for Polyp Segmentation in Colonoscopy Images},
  author={Alam, Md. Nur and others},
  booktitle={IEEE International Conference on Robotics, Automation, Artificial-intelligence and Internet-of-Things (RAAICON)},
  year={2026},
  note={Accepted for Presentation, Paper ID: 433}
}`,
    mendeley: `@misc{alam2026mango,
  title={Amrapali Mango Fruit Diseases: A Cultivar-Specific Image Dataset for Computer Vision and Deep CNN Classification},
  author={Alam, Md. Nur},
  year={2026},
  month={January},
  publisher={Mendeley Data},
  version={1},
  doi={10.17632/ypttkp5fb5.1}
}`
  };

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const bibtex = citations[type] || citations.ieee;
      if (content) content.textContent = bibtex;
      modal.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });

  if (copyBtn && content) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(content.textContent, 'BibTeX citation copied to clipboard');
      modal.classList.remove('open');
    });
  }
}

/* --- Clipboard Copy Handlers & Toast System --- */
function initClipboardHandlers() {
  const heroCopyBtn = document.getElementById('copy-email-hero');
  const heroCopyText = document.getElementById('hero-copy-text');

  if (heroCopyBtn) {
    heroCopyBtn.addEventListener('click', () => {
      const email = heroCopyBtn.getAttribute('data-email');
      copyToClipboard(email, 'Email address copied to clipboard');
      if (heroCopyText) {
        const orig = heroCopyText.textContent;
        heroCopyText.textContent = '✓ Copied!';
        setTimeout(() => { heroCopyText.textContent = orig; }, 2000);
      }
    });
  }

  const fieldCopyBtns = document.querySelectorAll('.copy-field-btn');
  fieldCopyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      copyToClipboard(val, `Copied: ${val}`);
    });
  });

  const doiBtns = document.querySelectorAll('.copy-doi-btn');
  doiBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const doi = btn.getAttribute('data-doi');
      copyToClipboard(doi, `Dataset DOI copied: ${doi}`);
    });
  });
}

function copyToClipboard(text, successMessage) {
  if (!navigator.clipboard) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (e) {
      showToast('Failed to copy');
    }
    document.body.removeChild(textarea);
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => showToast(successMessage))
    .catch(() => showToast('Failed to copy text'));
}

/* --- Toast Notification Controller --- */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');

  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --- Interactive Contact Form --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields');
      return;
    }

    const mailtoUrl = `mailto:mdnuralam6498@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;

    window.location.href = mailtoUrl;
    showToast('Triggering mail client... Thank you!');
    form.reset();
  });
}
