import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
// import NotFound from 'pages/NotFound';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  App: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 16,
    paddingBottom: 24,
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 64,
    padding: {
      right: 24,
      left: 24,
      top: 12,
      bottom: 12,
    },
    color: '#fff',
    backgroundColor: '#ff51b5',
    boxShadow: [
      [0, 2, 4, -1, 'rgba(0, 0, 0, 0.2)'],
      [0, 4, 5, 0, 'rgba(0, 0, 0, 0.14)'],
      [0, 1, 10, 0, 'rgba(0, 0, 0, 0.12)'], // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    ],
    '& li': {
      marginRight: 20,
    },
  },
  link: {
    fontSize: 30,
    color: '#2a2a2a',
  },
  activeLink: {
    color: '#2ff2e2',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <ul className={classes.list}>
        <li>
          <NavLink
            exact
            to="/"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={classes.link}
            activeClassName={classes.activeLink}
            // activeStyle={{
            //   fontWeight: 'bold',
            //   color: 'red',
            // }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export default App;
