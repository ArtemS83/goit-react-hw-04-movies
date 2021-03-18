import PropTypes from 'prop-types';
import defaultImage from 'images/default.jpg';
import style from './MovieGalleryItem.module.scss';

const MovieGalleryItem = ({ title, src, date }) => {
  const srcImage = src ? `https://image.tmdb.org/t/p/w300${src}` : defaultImage;

  return (
    <li className={style.Item}>
      <img
        className={style.Image}
        src={srcImage}
        loading="lazy"
        alt={`Film ${title} poster`}
      />
      <div className={style.div}>
        <h2> {title} </h2>
        <p>{date}</p>
      </div>
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
