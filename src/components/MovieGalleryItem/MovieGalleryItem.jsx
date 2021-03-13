import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from 'images/default.jpg';
import style from './MovieGalleryItem.module.scss';

const MovieGalleryItem = ({ title, src, date, id }) => {
  // console.log(match.url);
  const srcImage = src ? `https://image.tmdb.org/t/p/w300${src}` : defaultImage;
  return (
    <li className={style.Item}>
      {/* <Link to={`${match.url}/${id}`}> */}
      <Link to={`movies/${id}`}>
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

// MovieGalleryItem.defaultProps = {
//   src: defaultImage,
// };
MovieGalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default MovieGalleryItem;
