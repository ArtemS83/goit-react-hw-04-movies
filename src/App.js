import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Loader1 from 'components/Loader1';
// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import NotFound from 'pages/NotFound';
// import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  App: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 16,
    paddingBottom: 24,
    '& svg': {
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    // '& div': {
    //   display: 'block',
    //   marginRight: 'auto',
    //   marginLeft: 'auto',
    // },
  },
});

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */),
);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <AppBar />
      <Suspense
        fallback={
          // <div>Loading...</div>
          <Loader1 />
        }
      >
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
