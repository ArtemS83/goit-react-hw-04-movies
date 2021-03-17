import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import MoviesGallery from 'components/MoviesGallery';

const HomePage = props => {
  // console.log('props.location.state', props.location.pathname);
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // setIsLoading(true);
    moviesApi
      .fetchMovies()
      .then(({ results }) => {
        setMovies(results);
        //  setMovies(prevMovies => [...prevMovies, ...results]);
      })
      .catch(error => console.log('ERROR: ', error));
    // .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Trending today movies</h1>
      <MoviesGallery movies={movies} props={props} />
      {/* <MoviesGallery movies={movies} /> */}
    </>
  );
};

export default HomePage;
