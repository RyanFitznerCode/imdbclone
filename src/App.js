import React from 'react';
//import { Outlet } from 'react-router-dom';
//import { HashRouter } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import './App.css';
import Home from './components/Home';


function App() {
return (
<div className="App">
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/moviecard" element={<MovieCard />} />
<Route path="/cardgrid" element={<CardGrid />} />
<Route path="/movie/:id" element={<MovieDetails />} />
</Routes>
</Router>
</div>
);
}
export default App;