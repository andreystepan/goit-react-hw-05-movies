import { useState } from 'react';
import { useEffect } from 'react';
import { getReviewsMovies } from 'API/moviesAPI';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviewsMovies(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <ul>
      {reviews.results.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
