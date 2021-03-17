import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from 'images/default.jpg';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import style from './MovieItem.module.scss';

const MovieItem = ({ movie, genress, props }) => {
  // console.log('MovieItem', props.location);
  const { poster_path, original_title, release_date, overview, id } = movie;
  // console.log(match.url);
  const srcImage = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : defaultImage;

  return (
    <>
      <div className={style.Item}>
        <div className={style.ItemMovie}>
          <img
            className={style.Image}
            src={srcImage}
            alt={`Film ${original_title} poster`}
          />
          <div className={style.div}>
            <h2> {original_title} </h2>
            {genress.length > 0 && (
              <>
                <p className={style.DescriptionTitle}>Genres:</p>
                <ul>
                  {genress.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </>
            )}
            {overview && (
              <>
                <p className={style.DescriptionTitle}>Description:</p>
                <p className={style.Description}> {overview}</p>
              </>
            )}
            {release_date && (
              <>
                <p>Date:</p>
                <p>{release_date}</p>
              </>
            )}
          </div>
        </div>

        <div className={style.Link}>
          <NavLink
            // to={`/movies/${id}/cast`}
            to={{
              pathname: `/movies/${id}/cast`,
              state: props.location.state,
            }}
            className={style.link}
            activeClassName={style.activeLink}
          >
            Cast
          </NavLink>
          <NavLink
            // to={`/movies/${id}/reviews`}
            to={{
              pathname: `/movies/${id}/reviews`,
              state: props.location.state,
            }}
            className={style.link}
            activeClassName={style.activeLink}
          >
            Reviews
          </NavLink>
        </div>
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </div>
    </>
  );
};

MovieItem.defaultProps = {
  genress: [],
};
MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  genress: PropTypes.array,
};

export default MovieItem;
