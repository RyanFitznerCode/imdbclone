import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../moviesSlice';
import { Link } from 'react-router-dom';
const Navbar = () => {
const [searchTerm, setSearchTerm] = useState('');
const dispatch = useDispatch();
const handleSearch = (event) => {
event.preventDefault();
if (searchTerm.trim()) {
dispatch(searchMovies(searchTerm));
}
};
return (
<nav className="navbar">
<div className="logo">
<Link to="/">TMDB Clone</Link>
</div>
<form onSubmit={handleSearch} className="search-form">
<input
type="text"
placeholder="Search movies..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
<button type="submit">Search</button>
</form>
</nav>
);
};
export default Navbar;


