import { getGenres } from '../helpers/genres';
import { getUpcomingMovie } from '../helpers/movies-api';
import { refs } from '../helpers/refs';

document.addEventListener('DOMContentLoaded', async e => {
  const response = await getUpcomingMovie();
  const markup = upcomingMovieTemplate(response.results[0]);
  refs.upcomingCard.innerHTML = markup;
});

function upcomingMovieTemplate(movie) {
  return `<img src="https://image.tmdb.org/t/p/original/${
    movie.backdrop_path
  }" alt="" class="upcoming-poster" />
    <h3 class="upcoming-title">${movie.title}</h3>
    <div class="upcoming-meta">
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Release Date</p>
        <p class="upcoming-value">${movie.release_date}</p>
      </div>
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Popularity</p>
        <p class="upcoming-value">${movie.popularity}</p>
      </div>
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Vote / Votes</p>
        <p class="upcoming-value">${movie.vote_average} / ${
    movie.vote_count
  }</p>
      </div>
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Genre</p>
        <p class="upcoming-value">${getGenres(movie.genre_ids)}</p>
      </div>
    </div>
    <p class="upcoming-description">About</p>
    <p class="upcoming-subtext">${movie.overview}</p>
    <button class="upcoming-btn">Add to my library</button>`;
}
