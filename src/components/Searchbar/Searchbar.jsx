import { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  SearchForm: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  SearchFormButton: {
    display: 'inline-block',
    height: 48,
    border: 0,
    backgroundColor: '#ff51b5',
    padding: 8,
    opacity: 0.6,
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      opacity: 1,
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
    if (value === '') return; ////
    e.preventDefault();
    onSubmit(value);
    setValue(''); //?????
  };

  return (
    <form className={classes.SearchForm} onSubmit={hendelSubmit}>
      <input
        className={classes.SearchFormInput}
        type="text"
        value={value}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={hendelChangeInput}
      />
      <button type="submit" className={classes.SearchFormButton}>
        <span>Search</span>
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
