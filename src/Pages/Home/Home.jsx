import { getPopularMovies } from 'API/moviesAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { Item, NavLinkItem } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <Item key={id}>
              <NavLinkItem to={`/movies/${id}`}>{title}</NavLinkItem>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
