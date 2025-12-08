import { getGenres } from '../helpers/genres';
import { getWeeklyMovies } from '../helpers/movies-api';
import { refs } from '../helpers/refs';

document.addEventListener('DOMContentLoaded', async e => {
  const movies = await getWeeklyMovies();
  const markup = moviesTemplate(movies.results.slice(0, 3));
  refs.weeklyList.innerHTML = markup;
});

function movieTemplate(movie) {
  return ` <li class="weekly-item">
      <a href="" class="weekly-card">
        <img src="https://image.tmdb.org/t/p/original/${
          movie.backdrop_path
        }" alt="" class="weekly-poster" />
        <div>
        <h4>${movie.title}</h4>
          <p><span>${getGenres(
            movie.genre_ids
          )}</span> | <span>${movie.release_date.slice(0, 4)}</span></p>
        </div>
      </a>
    </li>`;
}

function moviesTemplate(movies) {
  return movies.map(movieTemplate).join('');
}
