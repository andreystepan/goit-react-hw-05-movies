// import Movies from 'Pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
// import Home from '../Pages/Home/Home';
import Layout from './Layout/Layout';
// import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<div>NOT FOUND </div>} />
      </Routes>
    </>
  );
};
