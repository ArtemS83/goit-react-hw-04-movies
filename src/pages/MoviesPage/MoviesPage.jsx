import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import Searchbar from 'components/Searchbar';
import MoviesGallery from 'components/MoviesGallery';
import swal from 'sweetalert';
import queryString from 'query-string';

const MoviesPage = props => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(
    queryString.parse(props.location.search).query || '',
  );
  // console.log('queryString.parse', queryString.parse(props.location.search));
  // // console.log(props.match.url);//4????
  // console.log(props.location);
  // useEffect(() => {
  //   props.history.push({
  //     ...props.location,
  //     search: query ? `?query=${query}` : '',
  //   });
  // }, [query]);

  useEffect(() => {
    setQuery(queryString.parse(props.location.search).query);
  }, [props.location.search]);

  useEffect(() => {
    props.history.push({
      ...props.location,
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
      <MoviesGallery
        movies={movies}
        isLoading={isLoading}
        // match={props.match}
        props={props}
      />
    </>
  );
};

// const MoviesPage = props => {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   // console.log(props.match.url);//4????
//   console.log(props.location);
//   useEffect(() => {
//     if (query === '') {
//       setMovies([]);
//       return;
//     }
//     setIsLoading(true);
//     moviesApi
//       .fetchSearchMovie(query)
//       .then(({ results }) => {
//         if (results.length === 0) {
//           swal('Oops!', 'Please enter a more specific querry!', 'error');
//         }
//         setMovies(results);
//       })
//       .catch(error => console.log('ERROR: ', error))
//       .finally(() => setIsLoading(false));
//   }, [query]);

//   const hendelSearchMovie = queryMovie => {
//     setQuery(queryMovie.trim());
//     // props.location.search = `?query=${queryMovie.trim()}`;
//   };

//   return (
//     <>
//       <Searchbar onSubmit={hendelSearchMovie} />
//       <MoviesGallery
//         movies={movies}
//         isLoading={isLoading}
//         // match={props.match}
//       />
//     </>
//   );
// };

export default MoviesPage;
