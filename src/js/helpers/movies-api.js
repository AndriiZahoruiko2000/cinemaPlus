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
export async function getWeeklyMovies() {
  const baseURL = 'https://api.themoviedb.org/3';
  const endPoint = '/trending/movie/week';
  const url = baseURL + endPoint;

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY',
  };

  const res = await axios.get(url, { headers });
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
