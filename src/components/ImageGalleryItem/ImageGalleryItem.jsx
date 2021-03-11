import PropTypes from 'prop-types';
import defaultImage from 'images/default.jpg';
import style from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ alt, src, srcModal, onOpenModal }) => {
  const hendelModalImage = () => {
    onOpenModal(srcModal, alt);
  };
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={style.ImageGalleryItemImage}
        onClick={hendelModalImage}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  srcModal: defaultImage,
  src: defaultImage,
  onOpenModal: () => {},
};
ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  srcModal: PropTypes.string,
  onOpenModal: PropTypes.func,
};

export default ImageGalleryItem;
