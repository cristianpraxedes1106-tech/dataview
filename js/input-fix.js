(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);

  function openRepoModal() {
    const welcome = $('#welcome');
    const modal = $('#newRepoModal');
    if (welcome) welcome.classList.remove('show');
    if (!modal) return;

    modal.classList.add('show');

    requestAnimationFrame(() => {
      const input = $('#newRepoName');
      if (input) {
        input.disabled = false;
        input.readOnly = false;
        input.removeAttribute('aria-hidden');
        input.focus();
      }
    });
  }

  function closeRepoModal() {
    const modal = $('#newRepoModal');
    if (modal) modal.classList.remove('show');
  }

  function init() {
    ['headerCreate', 'heroCreate', 'repoCreate', 'repoBlankBtn'].forEach((id) => {
      const button = $('#' + id);
      if (!button) return;
      button.addEventListener('click', openRepoModal, true);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeRepoModal();
    });

    const modal = $('#newRepoModal');
    if (modal) {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) closeRepoModal();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
