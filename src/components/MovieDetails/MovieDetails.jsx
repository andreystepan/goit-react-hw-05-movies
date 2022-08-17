import { getByIdMovies } from 'API/moviesAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getByIdMovies(movieId).then(setMovieInfo);
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  return (
    <>
      <Link to="/">Go back</Link>
      <div>
        <img
          width="200"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="img"
        />
      </div>

      <h2>{title}</h2>
      <div>User score: {vote_average}</div>
      <div>
        <h3>Overview</h3> {overview}
      </div>
      <div>{genres.map(genre => genre.name).join(' ')}</div>
      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      <div>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
