import { useState, useEffect } from 'react';
import moviesApi from 'services/moviesApi';
import Loader from 'react-loader-spinner';
import style from './Reviews.module.scss';

const Reviews = ({ match }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = Number(match.params.movieId);
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .fetchMovieReviews(id)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch(error => console.log('ERROR: ', error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <Loader
        type="Puff"
        color="#fff"
        height={70}
        width={70}
        visible={isLoading}
      />
      {reviews.length > 0 ? (
        <ul className={style.ReviewsList}>
          {reviews.map(({ author, content, id }) => (
            <li key={id} className={style.Item}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={style.NotReviews}>Not reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
