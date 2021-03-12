import axios from 'axios';

const API_KEY = '4c4fcd40981097a4f391c61f2f249de1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

async function fetchMovies(pageValue = 1) {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=${pageValue}`,
  );
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results };
}

async function fetchSearchMovie(valueSearch, pageValue = 1) {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&page=${pageValue}&query=${valueSearch}`,
  );
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results };
}

async function fetchMovieInfo(id) {
  const data = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

  return data;
}

async function fetchMovieReviews(id) {
  const data = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);

  return data;
}

async function fetchMovieCast(id) {
  const data = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);

  return data;
}

export default {
  fetchMovies,
  fetchSearchMovie,
  fetchMovieInfo,
  fetchMovieReviews,
  fetchMovieCast,
};
