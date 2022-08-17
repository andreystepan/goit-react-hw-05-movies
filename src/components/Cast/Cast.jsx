import { getCreditsMovies } from 'API/moviesAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCredits] = useState(null);
  useEffect(() => {
    getCreditsMovies(movieId).then(setCredits);
  }, [movieId]);

  if (!casts) {
    return;
  }

  const { cast } = casts;
  return (
    <div>
      {cast.map(({ name, id, profile_path, character }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${profile_path}`}
              alt="img"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Cast;
