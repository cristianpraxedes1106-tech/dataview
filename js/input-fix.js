(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);

  function openRepoModal(event) {
    if (event) event.preventDefault();

    const welcome = $('#welcome');
    const modal = $('#newRepoModal');
    const input = $('#newRepoName');

    if (welcome) welcome.classList.remove('show');
    if (!modal) return;

    modal.classList.add('show');

    if (input) {
      input.disabled = false;
      input.readOnly = false;
      input.removeAttribute('disabled');
      input.removeAttribute('readonly');
      input.removeAttribute('aria-hidden');
      input.style.pointerEvents = 'auto';
      input.style.userSelect = 'text';

      setTimeout(() => {
        input.focus({ preventScroll: true });
        input.select();
      }, 30);
    }
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
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
