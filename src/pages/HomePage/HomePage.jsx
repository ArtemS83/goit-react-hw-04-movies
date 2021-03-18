import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import MoviesGallery from 'components/MoviesGallery';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi
      .fetchMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log('ERROR: ', error));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Trending today movies</h1>
      <MoviesGallery movies={movies} />
    </>
  );
};

export default HomePage;
