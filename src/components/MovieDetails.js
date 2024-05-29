import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById } from '../moviesSlice';
const MovieDetails = ({ match }) => {
const movieId = match.params.id; // Assuming React Router v5 is used for routing
const dispatch = useDispatch();
const movie = useSelector(state => state.movies.movieDetails[movieId] || {});
const status = useSelector(state => state.movies.status);
const error = useSelector(state => state.movies.error);
// Fetch movie details when the component mounts or the movieId changes
useEffect(() => {
if (!movie.title) {
dispatch(fetchMovieById(movieId));
}
}, [dispatch, movieId, movie.title]);
return (
<div className="movie-details">
{status === 'loading' && <p>Loading...</p>}
{status === 'failed' && <p>Error: {error}</p>}
{movie.title && (
<div>
<h2>{movie.title}</h2>
<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
<p><strong>Release Date:</strong> {movie.release_date}</p>
<p>{movie.overview}</p>
<p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
</div>
)}
</div>
);
};
export default MovieDetails;