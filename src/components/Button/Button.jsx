import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ title, type, onLoadMore, btnLoadMoreDisabled }) => {
  const hendelClick = () => {
    onLoadMore();
  };

  return (
    <button
      className={style.Button}
      type={type}
      onClick={hendelClick}
      disabled={btnLoadMoreDisabled}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: 'button',
  type: 'button',
  onLoadMore: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onLoadMore: PropTypes.func,
  btnLoadMoreDisabled: PropTypes.bool.isRequired,
};

export default Button;
