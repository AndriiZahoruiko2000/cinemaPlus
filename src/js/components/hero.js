import { getDailyMovies } from '../helpers/movies-api';
import { refs } from '../helpers/refs';

document.addEventListener('DOMContentLoaded', async e => {
  const movies = await getDailyMovies();
  console.log(movies);

  const firstEl = movies.results[0];
  if (firstEl) {
    renderHero(firstEl);
  }
});

function templateHero(movie) {
  return ` <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" class="hero-bg">
  <h1 class="hero-title">${movie.title}</h1>
  <p class="hero-text">
    ${movie.overview}
  </p>
  <a href="" class="hero-link">Watch Trailer</a>
  <a href="" class="hero-link">More Details</a>
  `;
}

function renderHero(movie) {
  const markup = templateHero(movie);
  refs.hero.innerHTML = markup;
}
