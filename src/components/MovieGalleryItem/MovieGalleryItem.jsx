import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg'; //прописываем полный путь,т.к c withRouter абсолютный ипморт
import style from './MovieGalleryItem.module.scss';

const MovieGalleryItem = ({ title, src, date, id, location }) => {
  const srcImage = src ? `https://image.tmdb.org/t/p/w300${src}` : defaultImage;
  const backLocation = location.pathname + location.search;

  return (
    <li className={style.Item}>
      <Link
        to={{
          pathname: `movies/${id}`,
          state: { from: backLocation },
        }}
      >
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
  id: PropTypes.number.isRequired,
};

export default withRouter(MovieGalleryItem);
