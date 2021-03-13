import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import Searchbar from 'components/Searchbar';
import MoviesGallery from 'components/MoviesGallery';
import swal from 'sweetalert';

const MoviesPage = props => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(props.match.url);//4????

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }
    setIsLoading(true);
    moviesApi
      .fetchSearchMovie(query)
      .then(({ results }) => {
        if (results.length === 0) {
          swal('Oops!', 'Please enter a more specific querry!', 'error');
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
      <MoviesGallery
        movies={movies}
        isLoading={isLoading}
        // match={props.match}
      />
    </>
  );
};

export default MoviesPage;
