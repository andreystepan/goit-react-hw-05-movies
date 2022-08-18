import { useState } from 'react';
import { useEffect } from 'react';
import { getReviewsMovies } from 'API/moviesAPI';
import { useParams } from 'react-router-dom';
import { Item } from './Reviews.styled';

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
          <Item key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </Item>
        );
      })}
    </ul>
  );
};

export default Reviews;
