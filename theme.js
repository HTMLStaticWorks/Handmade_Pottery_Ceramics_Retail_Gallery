/**
 * KADAVA Studio — Theme Management System (theme.js)
 * Strictly handles Light / Dark Mode switching, storage, and UI toggling.
 */

(function () {
  'use strict';

  const THEME_KEY = 'kadava_theme';

  // 1. Determine Initial Theme
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  // 2. Apply Theme to Document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleButtons(theme);

    // Dispatch custom event if other components need to react
    window.dispatchEvent(new CustomEvent('kadavaThemeChanged', { detail: { theme } }));
  }

  // 3. Toggle Theme Function
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  // 4. Update Button SVG Icons & Labels
  function updateToggleButtons(theme) {
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach((btn) => {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');

      // Update Icon inside button (Icon Only)
      btn.innerHTML = isDark
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
    });
  }

  // 5. Inject Theme Button into Header Actions
  function injectThemeToggle() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions || document.querySelector('.theme-toggle-btn')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle-btn';
    btn.addEventListener('click', toggleTheme);

    // Insert before connect button or as first action item
    headerActions.insertBefore(btn, headerActions.firstChild);

    // Update with current active theme
    const activeTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    updateToggleButtons(activeTheme);
  }

  // Apply immediately on load
  const currentTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Bind DOM events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectThemeToggle();
      applyTheme(document.documentElement.getAttribute('data-theme') || currentTheme);
    });
  } else {
    injectThemeToggle();
    applyTheme(document.documentElement.getAttribute('data-theme') || currentTheme);
  }

  // Listen for system theme changes if user hasn't set an explicit preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Expose global controller if needed
  window.KadavaTheme = {
    toggle: toggleTheme,
    set: applyTheme,
    get: () => document.documentElement.getAttribute('data-theme') || getPreferredTheme()
  };
})();
