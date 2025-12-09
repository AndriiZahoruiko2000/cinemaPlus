import { getGenres } from './genres';
import { getLibraryIds } from './library';
import { refs } from './refs';
//!================================================

export function movieTemplate(movie) {
  const myGenres = movie.genre_ids || movie.genres || [];
  const genresLabel = getGenres(myGenres);
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';
  const rating = movie.vote_average ? Number(movie.vote_average).toFixed(1) : '—';

  return ` <li class="weekly-item" data-id="${movie.id}">
      <div href="" class="weekly-card" data-rating="${rating}">
        <img src="https://image.tmdb.org/t/p/original/${
          movie.backdrop_path
        }" alt="" class="weekly-poster" />
        <div>
        <h4>${movie.title}</h4>
          <p><span>${genresLabel}</span> | <span>${releaseYear}</span></p>
        </div>
      </div>
    </li>`;
}

export function moviesTemplate(movies) {
  return movies.map(movieTemplate).join('');
}
//!================================================

export function modalTemplate(movie) {
  return `<div class="modal-media" >
    <img
      src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
      alt="${movie.title} poster"
      class="modal-poster"
      loading="lazy"
    />
  </div>
  <div class="modal-body">
    <h3 class="modal-title">${movie.title}</h3>
    <div class="modal-meta">
      <div class="modal-meta-row">
        <p class="modal-label">Release Date</p>
        <p class="modal-value">${movie.release_date}</p>
      </div>
      <div class="modal-meta-row">
        <p class="modal-label">Popularity</p>
        <p class="modal-value">${movie.popularity}</p>
      </div>
      <div class="modal-meta-row">
        <p class="modal-label">Vote / Votes</p>
        <p class="modal-value">${movie.vote_average} / ${movie.vote_count}</p>
      </div>
      <div class="modal-meta-row">
        <p class="modal-label">Genre</p>
        <p class="modal-value">${movie.genres.map(i => i.name).join(', ')}</p>
      </div>
    </div>
    <p class="modal-section-label">About</p>
    <p class="modal-description">${movie.overview}</p>
    <div class="modal-actions">
      <button class="btn modal-action" type="button" data-id="${
        movie.id
      }">Add to my library</button>
    </div>
  </div>`;
}
//!================================================

export function updateModalBtn(id) {
  const modalButton = refs.modalContent?.querySelector('.modal-action');
  if (!modalButton) return;

  const normalizedId = Number(id);
  const listId = getLibraryIds();

  if (Number.isNaN(normalizedId)) {
    delete modalButton.dataset.id;
    modalButton.textContent = 'Add to my library';
    return;
  }

  modalButton.dataset.id = normalizedId;

  const inLibrary = listId.includes(normalizedId);
  modalButton.textContent = inLibrary ? 'Remove from my library' : 'Add to my library';
}
