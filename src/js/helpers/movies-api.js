import axios from 'axios';

export async function getDailyMovies() {
  const baseURL = 'https://api.themoviedb.org/3';
  const endPoint = '/trending/movie/day';
  const url = baseURL + endPoint;

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY',
  };

  const res = await axios.get(url, { headers });
  return res.data;
}
//!================================================
export async function getWeeklyMovies(page = 1) {
  const baseURL = 'https://api.themoviedb.org/3';
  const endPoint = '/trending/movie/week';
  const url = baseURL + endPoint;

  const params = {
    page,
  };

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY',
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
}
//!================================================

export async function getUpcomingMovie() {
  const baseURL = 'https://api.themoviedb.org/3';
  const endPoint = '/movie/upcoming';
  const url = baseURL + endPoint;

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY',
  };

  const res = await axios.get(url, { headers });
  return res.data;
}

//!================================================

export async function getMovieByName(query, page) {
  const baseURL = 'https://api.themoviedb.org/3';
  const endPoint = '/search/movie';
  const url = baseURL + endPoint;

  const params = {
    query,
    page,
  };

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY',
  };

  const res = await axios.get(url, { headers, params });
  return res.data;
}
//!================================================

export async function getMovieById(id) {
  const baseURL = 'https://api.themoviedb.org/3';
  const endPoint = `/movie/${id}`;
  const url = baseURL + endPoint;

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY',
  };
  const res = await axios.get(url, { headers });
  return res.data;
}

//!================================================

export async function getMoviesByIds(ids) {
  if (!Array.isArray(ids) || !ids.length) {
    return [];
  }
  const response = ids.map(getMovieById);
  const result = await Promise.all(response);
  return result;
}
