import { getMovieById, getWeeklyMovies } from '../helpers/movies-api';
import { refs } from '../helpers/refs';
import { modalTemplate, moviesTemplate, updateModalBtn } from '../helpers/render-function';
import { showModal } from './modal';

//!================================================

document.addEventListener('DOMContentLoaded', async e => {
  const movies = await getWeeklyMovies();
  const markup = moviesTemplate(movies.results.slice(0, 3));
  refs.weeklyList.innerHTML = markup;
});

//!================================================

refs.weeklyList.addEventListener('click', async e => {
  if (e.target === refs.weeklyList) {
    return;
  }
  const liElement = e.target.closest('li');
  const id = liElement.dataset.id;

  const response = await getMovieById(id);

  const markup = modalTemplate(response);
  refs.modalContent.innerHTML = markup;
  updateModalBtn(id);
  showModal();
});
