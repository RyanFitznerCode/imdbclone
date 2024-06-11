import React from 'react';
//import { Outlet } from 'react-router-dom';
//import { HashRouter } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import SearchResults from "./components/SearchResults";
import CategoryMovies from "./components/CategoryMovies";
import './App.css';


function App() {
return (
<div className="App">
<Router>
<Navbar />
<Routes>
<Route path="/" element={<CardGrid />} />
<Route path="/search" element={<SearchResults />} />
<Route path="/moviecard" element={<MovieCard />} />
<Route path="/movie/:id" element={<MovieDetails />} />
<Route path="/category/:categoryOrGenre" element={<CategoryMovies />} />
</Routes>
</Router>
</div>
);
}
export default App;