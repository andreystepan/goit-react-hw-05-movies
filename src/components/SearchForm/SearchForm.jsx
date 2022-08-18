import { useState } from 'react';
import { Form } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handelSubmit = e => {
    e.preventDefault();

    if (query) {
      onSubmit(query);
      setQuery('');
    }
  };

  return (
    <>
      <Form onSubmit={handelSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};

export default SearchForm;
