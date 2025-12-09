import {
  getMovieById,
  getMovieByName,
  getWeeklyMovies,
} from '../helpers/movies-api';
import { instancePagination } from '../helpers/pagination';
import { refs } from '../helpers/refs';
import {
  modalTemplate,
  moviesTemplate,
  updateModalBtn,
} from '../helpers/render-function';
import 'tui-pagination/dist/tui-pagination.css';
import { showModal } from './modal';
//!================================================
let page;
let totalPage = 0;
let inputValue;

document.addEventListener('DOMContentLoaded', async e => {
  page = 1;
  const response = await getWeeklyMovies();
  const markup = moviesTemplate(response.results);
  refs.movieList.innerHTML = markup;
  totalPage = response.total_pages;
  instancePagination.reset(response.total_results);
});

instancePagination.on('afterMove', async event => {
  const currentPage = event.page;

  let response;
  if (!inputValue) {
    response = await getWeeklyMovies(currentPage);
  } else {
    response = await getMovieByName(inputValue, currentPage);
  }
  const markup = moviesTemplate(response.results);
  refs.movieList.innerHTML = markup;
});
//!================================================

refs.searchMovieForm.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  const formData = new FormData(e.target);
  inputValue = formData.get('movie');
  const response = await getMovieByName(inputValue, page);
  const markup = moviesTemplate(response.results);
  refs.movieList.innerHTML = markup;
  instancePagination.reset(response.total_pages);
});

//!================================================

refs.movieList.addEventListener('click', async e => {
  if (e.target === refs.movieList) {
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

//!================================================
