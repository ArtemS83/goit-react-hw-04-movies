import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import Searchbar from 'components/Searchbar';
import MoviesGallery from 'components/MoviesGallery';
import swal from 'sweetalert';
import queryString from 'query-string';

const MoviesPage = ({ location, history }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(
    queryString.parse(location.search).query || '',
  );

  useEffect(() => {
    setQuery(queryString.parse(location.search).query);
  }, [location.search]);

  useEffect(() => {
    history.push({
      ...location,
      search: query ? `?query=${query}` : '',
    });

    if (query === '' || !query) {
      setMovies([]);
      return;
    }
    setIsLoading(true);
    moviesApi
      .fetchSearchMovie(query)
      .then(({ results }) => {
        if (results.length === 0) {
          swal('Oops!', 'Please enter a more specific querry!', 'error');
          setQuery('');
        }
        setMovies(results);
      })
      .catch(error => console.log('ERROR: ', error))
      .finally(() => setIsLoading(false));
  }, [query]);

  const hendelSearchMovie = queryMovie => {
    setQuery(queryMovie.trim());
  };

  return (
    <>
      <Searchbar onSubmit={hendelSearchMovie} />
      <MoviesGallery movies={movies} isLoading={isLoading} />
    </>
  );
};

export default MoviesPage;
