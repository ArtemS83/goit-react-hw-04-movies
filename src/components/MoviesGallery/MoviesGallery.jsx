// import { useState } from 'react';
import PropTypes from 'prop-types';
import MovieGalleryItem from '../MovieGalleryItem';
// import Loader from 'react-loader-spinner';
import Loader1 from 'components/Loader1';
import style from './MoviesGallery.module.scss';

const MoviesGallery = ({ movies, isLoading = false, props }) => {
  // console.log(location);
  return (
    <>
      <Loader1 isLoading={isLoading} />
      <ul className={style.MoviesGallery}>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <MovieGalleryItem
            props={props}
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
  isLoading: PropTypes.bool,
};

export default MoviesGallery;
