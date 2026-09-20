// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
  
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active Menu Highlight (Header & Footer)
function highlightActiveMenus() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  // Header Nav Links
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Header Connect CTA Button
  const headerConnectBtn = document.querySelector('.header-connect-btn');
  if (headerConnectBtn) {
    if (currentPath === 'connect.html') {
      headerConnectBtn.classList.add('active');
    } else {
      headerConnectBtn.classList.remove('active');
    }
  }

  // Footer Links
  document.querySelectorAll('.footer-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath && href !== '#') {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', highlightActiveMenus);

// Scroll Reveal Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Add to Cart Counter & Animation
let count = 0;
document.querySelectorAll('[data-add]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    const bagCount = document.getElementById('bagCount');
    if (bagCount) {
      bagCount.textContent = count;
      bagCount.style.transform = 'scale(1.3)';
      setTimeout(() => bagCount.style.transform = 'scale(1)', 200);
    }
    const oldText = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.style.background = '#8d6049';
    btn.style.color = '#ffffff';
    setTimeout(() => {
      btn.textContent = oldText;
      btn.style.background = '';
      btn.style.color = '';
    }, 1100);
  });
});

// Modal Handlers (Commission Enquiries)
const modal = document.getElementById('modal');
const commissionBtn = document.getElementById('commissionBtn');
const commissionSpecBtn = document.getElementById('commissionSpecBtn');
const modalClose = document.getElementById('modalClose');

const openModal = () => {
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
};

const closeModal = () => {
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
};

if (commissionBtn) commissionBtn.addEventListener('click', openModal);
if (commissionSpecBtn) commissionSpecBtn.addEventListener('click', openModal);
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

const enquiryForm = document.getElementById('enquiry');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const successMsg = document.getElementById('success');
    if (successMsg) successMsg.classList.add('show');
    e.target.reset();
  });
}

// Newsletter Forms Handling
document.querySelectorAll('form.newsletter').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msgEl = form.parentElement.querySelector('.newsletter-msg') || document.getElementById('newsletterMsg');
    if (msgEl) {
      msgEl.textContent = 'Thank you — you are on the list.';
    } else {
      alert('Thank you for subscribing to KADAVA!');
    }
    form.reset();
  });
});

// Auto Year Copyright
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Back to Top Button & Scroll Parallax
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (backTop) {
    backTop.classList.toggle('show', window.scrollY > 600);
  }
  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    heroImg.style.transform = `translateY(${Math.min(window.scrollY * 0.035, 24)}px)`;
  }
}, { passive: true });

if (backTop) {
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
