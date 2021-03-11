import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ alt, srcModal, onCloseModal }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log('Нажали ESC,закрываем модалку');
      onCloseModal();
    }
  };
  useEffect(() => {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      // console.log('Modal componentWillUnmount');
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div className={style.Overlay} onClick={handleBackdropClick}>
      <div className={style.Modal}>
        <img src={srcModal} alt={alt} />
      </div>
    </div>,
    modalRoot,
  );
};

Modal.defaultProps = {
  onCloseModal: () => {},
};
Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  srcModal: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
export default Modal;
