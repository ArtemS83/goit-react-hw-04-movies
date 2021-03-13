import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import MovieItem from 'components/MovieItem';
import NotFound from '../NotFound';

// import defaultImage from 'images/default.jpg';
import Loader from 'react-loader-spinner';
// import style from './MovieDetailsPage.module.scss';

const MovieDetailsPage = props => {
  const [idMovie, setIdMovie] = useState(Number(props.match.params.movieId));
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [genress, setGenress] = useState([]);
  const [isHasMovie, setIsHasMovie] = useState(0);
  // console.log(props.match);
  // const { match } = props;
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .fetchMovieInfo(idMovie)
      .then(({ data }) => {
        setMovie(data);
        setGenress(data.genres);
        setIsHasMovie(1);
      })
      .catch(error => {
        setIsHasMovie(0);
        console.log('ERROR: ', error);
      })
      .finally(() => setIsLoading(false));
  }, [idMovie]);

  return (
    <>
      <Loader
        type="Puff"
        color="#fff"
        height={70}
        width={70}
        visible={isLoading}
      />
      {!isLoading && isHasMovie > 0 ? (
        <MovieItem movie={movie} genress={genress} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MovieDetailsPage;
