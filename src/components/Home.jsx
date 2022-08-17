import { getPopularMovies } from 'API/moviesAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
