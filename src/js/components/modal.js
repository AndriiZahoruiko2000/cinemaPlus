import { toggleLibraryMovie } from '../helpers/library';
import { refs } from '../helpers/refs';
import { updateModalBtn } from '../helpers/render-function';

export function showModal() {
  refs.modalBackdrop.classList.remove('hidden');
}

export function hideModal() {
  refs.modalBackdrop.classList.add('hidden');
}

//!================================================

refs.modalBackdrop?.addEventListener('click', e => {
  if (e.target === refs.modalBackdrop) {
    hideModal();
  }
});

refs.modalClose?.addEventListener('click', () => {
  hideModal();
});
//!================================================

refs.modalContent?.addEventListener('click', e => {
  const actionBtn = e.target.closest('.modal-action');
  if (!actionBtn) return;

  e.preventDefault();
  const id = actionBtn.dataset.id;
  if (!id) return;

  toggleLibraryMovie(id);
  updateModalBtn(id);
});
