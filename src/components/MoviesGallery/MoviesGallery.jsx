import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieGalleryItem from '../MovieGalleryItem';
import Loader1 from 'components/Loader1';
import style from './MoviesGallery.module.scss';

const MoviesGallery = ({ movies, isLoading = false, location }) => {
  const backLocation = location.pathname + location.search;

  return (
    <>
      <Loader1 isLoading={isLoading} />
      <ul className={style.MoviesGallery}>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <Link
            key={id}
            to={{
              pathname: `movies/${id}`,
              state: { from: backLocation },
            }}
          >
            <MovieGalleryItem
              title={title}
              src={poster_path}
              date={release_date}
            />
          </Link>
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

export default withRouter(MoviesGallery);
