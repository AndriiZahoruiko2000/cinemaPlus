import { genres, getGenres } from '../helpers/genres';
import { getMovieById, getMoviesByIds } from '../helpers/movies-api';
import { refs } from '../helpers/refs';
import { modalTemplate, updateModalBtn } from '../helpers/render-function';
import {
  clearLibrary,
  getLibraryIds,
  LIBRARY_UPDATED_EVENT,
  removeLibraryMovie,
} from '../helpers/library';
import { showModal } from './modal';

const state = {
  movies: [],
  filter: 'all',
};

document.addEventListener('DOMContentLoaded', () => {
  if (!refs.userList) return;
  initUserLibrary();
});

function initUserLibrary() {
  populateGenreFilter();
  attachUserListEvents();
  renderLibrary();
}

function populateGenreFilter() {
  if (!refs.userListFilter) return;
  const options = ['all', ...genres.map(genre => genre.id)];
  refs.userListFilter.innerHTML = options
    .map(option => {
      if (option === 'all') {
        return `<option value="all">All genres</option>`;
      }
      const genreItem = genres.find(item => item.id === option);
      return `<option value="${option}">${genreItem?.name ?? 'Unknown'}</option>`;
    })
    .join('');
}

function attachUserListEvents() {
  refs.userListFilter?.addEventListener('change', e => {
    state.filter = e.target.value;
    applyFilter();
  });

  refs.userListClear?.addEventListener('click', () => {
    clearLibrary();
  });

  refs.userListEmptyLink?.addEventListener('click', e => {
    const action = e.currentTarget.dataset.action;
    if (action === 'browse' || !action) {
      return;
    }
    e.preventDefault();
    if (action === 'reset-filter') {
      resetFilter();
    }
    if (action === 'retry') {
      renderLibrary();
    }
  });

  refs.userList?.addEventListener('click', handleUserListClick);
  window.addEventListener(LIBRARY_UPDATED_EVENT, renderLibrary);
}

async function renderLibrary() {
  if (!refs.userList) return;
  const ids = getLibraryIds();
  toggleClearButton(ids.length > 0);

  if (!ids.length) {
    state.movies = [];
    refs.userList.innerHTML = '';
    toggleEmptyState(true, 'empty');
    return;
  }

  try {
    const movies = await getMoviesByIds(ids);
    state.movies = movies;
    applyFilter();
  } catch (error) {
    console.error('Failed to load saved movies', error);
    state.movies = [];
    refs.userList.innerHTML = '';
    toggleEmptyState(true, 'error');
  }
}

function applyFilter() {
  if (!refs.userList) return;
  if (!state.movies.length) {
    toggleEmptyState(true, 'empty');
    return;
  }

  const targetGenre = state.filter;
  const filteredMovies =
    targetGenre === 'all'
      ? state.movies
      : state.movies.filter(movie => movieMatchesGenre(movie, targetGenre));

  refs.userList.innerHTML = filteredMovies.map(libraryCardTemplate).join('');
  const reason = filteredMovies.length ? null : 'filter';
  toggleEmptyState(!filteredMovies.length, reason);
}

function movieMatchesGenre(movie, genreId) {
  const normalizedId = Number(genreId);
  if (Number.isNaN(normalizedId)) {
    return true;
  }
  const genresSource = movie.genres || movie.genre_ids || [];
  return genresSource.some(genre => {
    if (typeof genre === 'number') {
      return genre === normalizedId;
    }
    return genre.id === normalizedId;
  });
}

function libraryCardTemplate(movie) {
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';
  const genresLabel = movie.genres
    ? movie.genres.map(item => item.name).join(', ')
    : getGenres(movie.genre_ids);
  const overview = formatOverview(movie.overview);
  const rating = movie.vote_average ? Number(movie.vote_average).toFixed(1) : '—';
  const votes = movie.vote_count ?? '0';
  const posterPath = movie.poster_path || movie.backdrop_path;
  const poster = posterPath
    ? `https://image.tmdb.org/t/p/w500/${posterPath}`
    : 'https://placehold.co/300x450/0f172a/ffffff?text=No+Poster';

  return `<li class="user-card" data-id="${movie.id}">
      <div class="user-card-media">
        <img src="${poster}" alt="${movie.title} poster" class="user-card-poster" loading="lazy" />
      </div>
      <div class="user-card-body">
        <div class="user-card-header">
          <h3 class="user-card-title">${movie.title}</h3>
          <span class="user-card-year">${releaseYear}</span>
        </div>
        <p class="user-card-genres">${genresLabel}</p>
        <p class="user-card-overview">${overview}</p>
        <div class="user-card-stats">
          <span>⭐ ${rating}</span>
          <span>Votes ${votes}</span>
        </div>
        <div class="user-card-actions">
          <button class="btn btn--ghost js-library-details" type="button" data-id="${movie.id}">
            Details
          </button>
          <button class="btn user-card-remove js-library-remove" type="button" data-id="${movie.id}">
            Remove
          </button>
        </div>
      </div>
    </li>`;
}

function handleUserListClick(e) {
  const removeBtn = e.target.closest('.js-library-remove');
  if (removeBtn) {
    const movieId = removeBtn.dataset.id;
    removeLibraryMovie(movieId);
    return;
  }

  const detailsBtn = e.target.closest('.js-library-details');
  if (!detailsBtn) return;

  openMovieModal(detailsBtn.dataset.id);
}

async function openMovieModal(id) {
  if (!id) return;
  if (!refs.modalContent) return;
  try {
    const movie = await getMovieById(id);
    const markup = modalTemplate(movie);
    refs.modalContent.innerHTML = markup;
    updateModalBtn(id);
    showModal();
  } catch (error) {
    console.error('Failed to open movie modal', error);
  }
}

function toggleEmptyState(isEmpty, reason = 'empty') {
  if (!refs.userListEmpty) return;
  refs.userListEmpty.hidden = !isEmpty;
  if (!isEmpty) {
    return;
  }

  const title = refs.userListEmpty.querySelector('.user-list-empty-title');
  const text = refs.userListEmpty.querySelector('.user-list-empty-text');
  const link = refs.userListEmptyLink;

  if (reason === 'filter') {
    title.textContent = 'No movies match this genre';
    text.textContent = 'Try a different filter to explore the rest of your saved movies.';
    if (link) {
      link.textContent = 'Reset filter';
      link.href = '#';
      link.dataset.action = 'reset-filter';
    }
  } else if (reason === 'error') {
    title.textContent = 'Something went wrong';
    text.textContent = 'Please try again later.';
    if (link) {
      link.textContent = 'Try again';
      link.href = '#';
      link.dataset.action = 'retry';
    }
  } else {
    title.textContent = 'Library is empty';
    text.textContent = 'Start adding movies from the catalog to see them listed here.';
    if (link) {
      link.textContent = 'Browse catalog';
      link.href = '/catalog.html';
      link.dataset.action = 'browse';
    }
  }
}

function toggleClearButton(enabled) {
  if (!refs.userListClear) return;
  refs.userListClear.disabled = !enabled;
}

function resetFilter() {
  if (!refs.userListFilter) return;
  refs.userListFilter.value = 'all';
  state.filter = 'all';
  applyFilter();
}

function formatOverview(text = '') {
  if (!text) {
    return 'No synopsis available yet.';
  }
  return text.length > 220 ? `${text.slice(0, 217)}...` : text;
}
