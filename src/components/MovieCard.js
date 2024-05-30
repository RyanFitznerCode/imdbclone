import React from 'react';
const MovieCard = ({ movie }) => {
// URL for the movie poster image, using a common size (e.g., width 300)
const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
return (
<div className="movie-card">
<img src={imageUrl} alt={movie.title} />
<div className="movie-info">
<h3>{movie.title}</h3>
<p>{movie.overview.substring(0, 100)}...<span>more</span></p> 
</div>
</div>
);
};
export default MovieCard;