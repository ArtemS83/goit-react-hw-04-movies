import { useState } from 'react';
import PropTypes from 'prop-types';
import MovieGalleryItem from '../MovieGalleryItem';
import Loader from 'react-loader-spinner';
import style from './MoviesGallery.module.scss';

const MoviesGallery = ({ movies, isLoading }) => {
  return (
    <>
      <Loader
        type="Puff"
        color="#fff"
        height={70}
        width={70}
        visible={isLoading}
      />
      <ul className={style.MoviesGallery}>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <MovieGalleryItem
            key={id}
            id={id}
            title={title}
            src={poster_path}
            date={release_date}
            // match={match}
          />
        ))}
      </ul>
    </>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MoviesGallery;
