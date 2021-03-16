import style from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  const hendelClickButton = () => {
    onClick();
  };
  return (
    <button className={style.button} type="button" onClick={hendelClickButton}>
      Go back
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
