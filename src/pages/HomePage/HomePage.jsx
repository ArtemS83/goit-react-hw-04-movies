import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import MoviesGallery from 'components/MoviesGallery';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .fetchMovies()
      .then(({ results }) => {
        setMovies(prevMovies => [...prevMovies, ...results]);
      })
      .catch(error => console.log('ERROR: ', error))
      .finally(() => setIsLoading(false));
  }, []);

  return <MoviesGallery movies={movies} isLoading={isLoading} />;
};

export default HomePage;
