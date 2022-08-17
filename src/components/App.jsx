import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Home from './Home';
import Layout from './Layout';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
