import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import MovieItem from 'components/MovieItem';
import Button from 'components/Button';
import NotFound from '../NotFound';

const MovieDetailsPage = props => {
  // const [idMovie, setIdMovie] = useState(Number(props.match.params.movieId));
  const [movie, setMovie] = useState({});
  const [genress, setGenress] = useState([]);
  const [isNotMovie, setIsNotMovie] = useState(0);

  const idMovie = Number(props.match.params.movieId);

  useEffect(() => {
    moviesApi
      .fetchMovieInfo(idMovie)
      .then(({ data }) => {
        setMovie(data);
        setGenress(data.genres);
      })
      .catch(error => {
        setIsNotMovie(1);
        console.log('ERROR: ', error);
      });
  }, [idMovie]);

  const hendelGoBack = () => {
    const { location, history } = props;
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push({
    //   pathname: '/',
    // });
    history.push(location?.state?.from || '/');
  };

  return (
    <>
      <Button onClick={hendelGoBack} />
      {!isNotMovie ? (
        <MovieItem movie={movie} genress={genress} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MovieDetailsPage;
