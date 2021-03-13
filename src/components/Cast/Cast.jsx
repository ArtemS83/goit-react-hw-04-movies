import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import defaultImage from 'images/default.jpg';
import Loader from 'react-loader-spinner';
import style from './Cast.module.scss';

const Cast = ({ match }) => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = Number(match.params.movieId);
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .fetchMovieCast(id)
      .then(({ data }) => {
        setCasts(data.cast);
      })
      .catch(error => console.log('ERROR: ', error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <Loader
        type="Puff"
        color="#fff"
        height={70}
        width={70}
        visible={isLoading}
      />
      <ul className={style.CastList}>
        {casts.map(({ id, name, character, profile_path }) => (
          <li key={id} className={style.Item}>
            <img
              className={style.Image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImage
              }
              loading="lazy"
              alt={`Foto ${name}`}
            />
            <div className={style.div}>
              <h3>{name}</h3>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
