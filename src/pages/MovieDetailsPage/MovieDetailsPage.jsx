import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import MovieItem from 'components/MovieItem';
import Button from 'components/Button';
import NotFound from '../NotFound';

const MovieDetailsPage = props => {
  // const [idMovie, setIdMovie] = useState(Number(props.match.params.movieId));
  const idMovie = Number(props.match.params.movieId);
  const [movie, setMovie] = useState({});
  const [genress, setGenress] = useState([]);
  const [isNotMovie, setIsNotMovie] = useState(0);
  // console.log('MovieDetailsPage', props.location.state);
  // const { match } = props;
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
    console.log('go back');
  };

  return (
    <>
      {/* <Button onClick={hendelGoBack} /> */}
      {!isNotMovie ? (
        <>
          <Button onClick={hendelGoBack} />
          <MovieItem movie={movie} genress={genress} props={props} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MovieDetailsPage;
