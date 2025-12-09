import { USER_MOVIE_LIST_KEY } from './constants';
import { loadFromLs, saveToLs } from './local-storage';

export const LIBRARY_UPDATED_EVENT = 'library:update';

export function getLibraryIds() {
  const saved = loadFromLs(USER_MOVIE_LIST_KEY);
  if (!Array.isArray(saved)) {
    return [];
  }
  return saved.map(Number).filter(id => !Number.isNaN(id));
}

function persistLibrary(ids) {
  const uniqueIds = [...new Set(ids.map(Number).filter(id => !Number.isNaN(id)))];
  saveToLs(USER_MOVIE_LIST_KEY, uniqueIds);
  window.dispatchEvent(
    new CustomEvent(LIBRARY_UPDATED_EVENT, {
      detail: { ids: uniqueIds },
    })
  );
  return uniqueIds;
}

export function toggleLibraryMovie(id) {
  const movieId = Number(id);
  if (Number.isNaN(movieId)) {
    return { ids: getLibraryIds(), added: false };
  }

  const ids = getLibraryIds();
  const exists = ids.includes(movieId);
  const nextIds = exists ? ids.filter(savedId => savedId !== movieId) : [...ids, movieId];
  const persisted = persistLibrary(nextIds);

  return { ids: persisted, added: !exists };
}

export function removeLibraryMovie(id) {
  const movieId = Number(id);
  if (Number.isNaN(movieId)) {
    return getLibraryIds();
  }
  const ids = getLibraryIds();
  if (!ids.includes(movieId)) {
    return ids;
  }
  return persistLibrary(ids.filter(savedId => savedId !== movieId));
}

export function clearLibrary() {
  persistLibrary([]);
}
