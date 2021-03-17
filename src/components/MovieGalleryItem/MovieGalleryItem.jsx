import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from 'images/default.jpg';
import style from './MovieGalleryItem.module.scss';

const MovieGalleryItem = ({ title, src, date, id, props }) => {
  // console.log(props.location.pathname);
  const srcImage = src ? `https://image.tmdb.org/t/p/w300${src}` : defaultImage;
  const backLocation = props.location.pathname + props.location.search;
  return (
    <li className={style.Item}>
      {/* <Link to={`${match.url}/${id}`}> */}
      {/* <Link to={`movies/${id}`}> */}
      <Link
        to={{
          pathname: `movies/${id}`,
          // state: { from: props.location.pathname + props.location.search },
          state: { from: backLocation },
        }}
      >
        <img
          className={style.Image}
          src={srcImage}
          // src={`https://image.tmdb.org/t/p/w300${src}`}
          loading="lazy"
          alt={`Film ${title} poster`}
        />
        <div className={style.div}>
          <h2> {title} </h2>
          <p>{date}</p>
        </div>
      </Link>
    </li>
  );
};

MovieGalleryItem.defaultProps = {
  src: defaultImage,
  date: 'Not date',
};
MovieGalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  date: PropTypes.string,
};

export default MovieGalleryItem;
