import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import MovieDetails from './components/MovieDetails';
function App() {
return (
<Router>
<div className="App">
<Navbar />
<Routes>
<Route path="/" exact component={CardGrid} />
<Route path="/movie/:id" component={MovieDetails} />
</Routes>
</div>
</Router>
);
}
export default App;