document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Active navigation page highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Newsletter submission interaction
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.newsletter-msg');
      const input = form.querySelector('input[type="email"]');
      if (msg) {
        msg.style.display = 'block';
      }
      if (input) {
        input.value = '';
      }
    });
  });
});

// Interactive Demo Controls for Tools Page
let fontState = 0; // 0: Normal, 1: Large, 2: Extra Large
let themeState = 0; // 0: Default, 1: High Contrast Dark, 2: Soft Cream
let spacingState = 0; // 0: Standard, 1: Wide, 2: Extra Wide

window.toggleDemoFont = function() {
  const preview = document.getElementById('demo-preview');
  const label = document.getElementById('font-label');
  if (!preview || !label) return;
  
  fontState = (fontState + 1) % 3;
  if (fontState === 0) {
    preview.style.fontSize = '1rem';
    label.textContent = 'Normal';
  } else if (fontState === 1) {
    preview.style.fontSize = '1.25rem';
    label.textContent = 'Large';
  } else {
    preview.style.fontSize = '1.45rem';
    label.textContent = 'Extra Large';
  }
};

window.toggleDemoTheme = function() {
  const preview = document.getElementById('demo-preview');
  const label = document.getElementById('theme-label');
  if (!preview || !label) return;

  themeState = (themeState + 1) % 3;
  if (themeState === 0) {
    preview.style.background = 'var(--primary-pale)';
    preview.style.color = 'var(--text)';
    label.textContent = 'Default';
  } else if (themeState === 1) {
    preview.style.background = '#1a181c';
    preview.style.color = '#ffff00';
    label.textContent = 'High Contrast Dark';
  } else {
    preview.style.background = '#fff8e7';
    preview.style.color = '#3b2f2f';
    label.textContent = 'Soft Reading Tint';
  }
};

window.toggleDemoSpacing = function() {
  const preview = document.getElementById('demo-preview');
  const label = document.getElementById('spacing-label');
  if (!preview || !label) return;

  spacingState = (spacingState + 1) % 3;
  if (spacingState === 0) {
    preview.style.lineHeight = '1.6';
    preview.style.letterSpacing = 'normal';
    label.textContent = 'Standard';
  } else if (spacingState === 1) {
    preview.style.lineHeight = '2.0';
    preview.style.letterSpacing = '0.04em';
    label.textContent = 'Wide';
  } else {
    preview.style.lineHeight = '2.4';
    preview.style.letterSpacing = '0.08em';
    label.textContent = 'Extra Wide';
  }
};
