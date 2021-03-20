import PropTypes from 'prop-types';
import MovieGalleryItem from '../MovieGalleryItem';
import Loader1 from 'components/Loader1';
import style from './MoviesGallery.module.scss';

const MoviesGallery = ({ movies, isLoading = false }) => {
  return (
    <>
      <Loader1 isLoading={isLoading} />
      <ul className={style.MoviesGallery}>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <MovieGalleryItem
            key={id}
            id={id}
            title={title}
            src={poster_path}
            date={release_date}
          />
        ))}
      </ul>
    </>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default MoviesGallery;
