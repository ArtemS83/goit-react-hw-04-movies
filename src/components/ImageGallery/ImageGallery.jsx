import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from 'components/Button';
import Notification from '../Notification';
import Modal from 'components/Modal';
import style from './ImageGallery.module.scss';

const ImageGallery = ({
  images,
  totalImages,
  onLoadMore,
  btnLoadMoreDisabled,
  isLoading,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const hendelOpenModal = (url, alt) => {
    setShowModal(true);
    setImageURL(url);
    setImageAlt(alt);
  };
  const hendelCloseModal = () => {
    setShowModal(false);
    setImageURL('');
    setImageAlt('');
  };
  return (
    <>
      {totalImages > 0 ? (
        <>
          <ul className={style.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                alt={tags}
                src={webformatURL}
                srcModal={largeImageURL}
                onOpenModal={hendelOpenModal}
              />
            ))}
          </ul>
          <Loader
            type="Puff"
            color="#3f51b5"
            height={60}
            width={60}
            visible={isLoading}
          />
          <Button
            type="button"
            title="Load more"
            onLoadMore={onLoadMore}
            btnLoadMoreDisabled={btnLoadMoreDisabled}
          />
        </>
      ) : (
        <Notification message="Please enter a more specific querry!" />
      )}
      {showModal && (
        <Modal
          alt={imageAlt}
          srcModal={imageURL}
          onCloseModal={hendelCloseModal}
        />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  totalImages: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ImageGallery;
