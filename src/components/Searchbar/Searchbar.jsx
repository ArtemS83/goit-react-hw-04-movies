import { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Searchbar: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    padding: {
      right: 24,
      left: 24,
      top: 12,
      bottom: 12,
    },
    color: '#fff',
    backgroundColor: '#3f51b5',
    boxShadow: [
      [0, 2, 4, -1, 'rgba(0, 0, 0, 0.2)'],
      [0, 4, 5, 0, 'rgba(0, 0, 0, 0.14)'],
      [0, 1, 10, 0, 'rgba(0, 0, 0, 0.12)'], // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    ],
  },
  SearchForm: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
  },

  SearchFormButton: {
    display: 'inline-block',
    width: 48,
    height: 48,
    border: 0,
    background: {
      image: "url('https://image.flaticon.com/icons/svg/149/149852.svg')",
      size: '40%',
      repeat: 'no-repeat',
      position: 'center',
    },
    opacity: 0.6,
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',

    '&:hover': {
      opacity: 1,
    },
    '& span': {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      overflow: 'hidden',
      clip: ' rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      clipPath: 'inset(50%)',
      border: 0,
    },
  },
  SearchFormInput: {
    display: 'inline-block',
    width: '100%',
    font: 'inherit',
    fontSize: 20,
    border: 'none',
    outline: 'none',
    paddingLeft: 4,
    paddingRight: 4,
    '&::placeholder': {
      font: 'inherit',
      fontSize: 18,
    },
  },
});

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const classes = useStyles();

  const hendelChangeInput = ({ target }) => {
    setValue(target.value);
  };

  const hendelSubmit = e => {
    e.preventDefault();
    // console.log('sumbit', value);
    onSubmit(value);
    // setValue(''); // если хотим очисть форму поиска после сабмита
  };

  return (
    <header className={classes.Searchbar}>
      <form className={classes.SearchForm} onSubmit={hendelSubmit}>
        <button type="submit" className={classes.SearchFormButton}>
          <span>Search</span>
        </button>

        <input
          className={classes.SearchFormInput}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={hendelChangeInput}
        />
      </form>
    </header>
  );
};

// Searchbar.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// };

export default Searchbar;
