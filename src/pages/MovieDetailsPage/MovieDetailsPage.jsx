import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import defaultImage from 'images/default.jpg';
import Loader from 'react-loader-spinner';
import style from './MovieDetailsPage.module.scss';

const MovieDetailsPage = props => {
  const [idMovie, setIdMovie] = useState(Number(props.match.params.movieId));
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [genress, setGenress] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .fetchMovieInfo(idMovie)
      .then(({ data }) => {
        setMovie(data);
        setGenress(data.genres);
      })
      .catch(error => console.log('ERROR: ', error))
      .finally(() => setIsLoading(false));
  }, [idMovie]);

  const { poster_path, original_title, release_date, overview } = movie;

  const srcImage = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : defaultImage;

  return (
    <>
      <Loader
        type="Puff"
        color="#fff"
        height={70}
        width={70}
        visible={isLoading}
      />
      <div className={style.Item}>
        <img
          className={style.Image}
          src={srcImage}
          alt={`Film ${original_title} poster`}
        />
        <div className={style.div}>
          <h2> {original_title} </h2>
          {genress.length > 0 && (
            <ul>
              {genress.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}

          <p className={style.Description}>Description:</p>
          <p className={style.Description}> {overview}</p>
          <p>Date: {release_date}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
