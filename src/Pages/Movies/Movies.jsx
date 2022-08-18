import { getSearchMovies } from 'API/moviesAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { List, Item, LinkItem } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const handleFormSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchMovies(query).then(data => setMovies(data.results));
  }, [query]);

  if (!movies) {
    return;
  }
  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      <List>
        {movies.length > 0 && (
          <div>
            {movies.map(({ title, id }) => {
              return (
                <Item key={id}>
                  <LinkItem to={`/movies/${id}`} state={{ from: location }}>
                    {title}
                  </LinkItem>
                </Item>
              );
            })}
          </div>
        )}
      </List>
    </>
  );
};

export default Movies;
