import { getCreditsMovies } from 'API/moviesAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, List, Item } from './Cast.styled';

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
    <Container>
      <List>
        {cast.map(({ name, id, profile_path, character }) => {
          return (
            <Item key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                alt="img"
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default Cast;
