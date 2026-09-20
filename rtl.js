/**
 * KADAVA Studio — RTL Direction & Alignment System (rtl.js)
 * Strictly handles LTR / RTL layout alignment switching, directional attribute persistence,
 * symbol flipping, and layout mirroring WITHOUT changing text language.
 */

(function () {
  'use strict';

  const DIR_KEY = 'kadava_dir';

  // 1. Get Saved Direction
  function getPreferredDir() {
    const saved = localStorage.getItem(DIR_KEY);
    return saved === 'rtl' ? 'rtl' : 'ltr';
  }

  // 2. Apply Direction to Document
  function applyDir(dir) {
    const isRtl = dir === 'rtl';
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_KEY, dir);

    updateToggleButtons(dir);
    flipArrowSymbols(isRtl);

    window.dispatchEvent(new CustomEvent('kadavaDirChanged', { detail: { dir, isRtl } }));
  }

  // 3. Flip Arrow Symbols without altering text language
  function flipArrowSymbols(isRtl) {
    document.querySelectorAll('.button span, .intro-action span, a span, button span').forEach((span) => {
      const text = span.textContent.trim();
      if (text === '↗' && isRtl) {
        span.textContent = '↖';
      } else if (text === '↖' && !isRtl) {
        span.textContent = '↗';
      }
    });
  }

  // 4. Toggle Direction Function
  function toggleDir() {
    const currentDir = document.documentElement.getAttribute('dir') || getPreferredDir();
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDir(newDir);
  }

  // 5. Update Toggle Button Text ('RTL' or 'LTR')
  function updateToggleButtons(dir) {
    const buttons = document.querySelectorAll('.rtl-toggle-btn');
    const isRtl = dir === 'rtl';

    buttons.forEach((btn) => {
      btn.setAttribute('aria-label', isRtl ? 'Switch to LTR Alignment' : 'Switch to RTL Alignment');
      btn.setAttribute('title', isRtl ? 'Switch to LTR Alignment' : 'Switch to RTL Alignment');
      btn.textContent = isRtl ? 'LTR' : 'RTL';
    });
  }

  // 6. Inject RTL Toggle Button into Header
  function injectRtlToggle() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions || document.querySelector('.rtl-toggle-btn')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rtl-toggle-btn';
    btn.addEventListener('click', toggleDir);

    headerActions.insertBefore(btn, headerActions.firstChild);

    const activeDir = document.documentElement.getAttribute('dir') || getPreferredDir();
    updateToggleButtons(activeDir);
  }

  // Apply direction state immediately
  const currentDir = getPreferredDir();
  document.documentElement.setAttribute('dir', currentDir);

  // Bind DOM events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectRtlToggle();
      applyDir(document.documentElement.getAttribute('dir') || currentDir);
    });
  } else {
    injectRtlToggle();
    applyDir(document.documentElement.getAttribute('dir') || currentDir);
  }

  // Expose global controller
  window.KadavaRtl = {
    toggle: toggleDir,
    set: applyDir,
    get: () => document.documentElement.getAttribute('dir') || getPreferredDir()
  };
})();
