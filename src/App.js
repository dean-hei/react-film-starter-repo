import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails'
import TMDB from './TMDB';

function App() {
  return (
    <div className="film-library">
      <div className="film-list">
        <FilmListing />
      </div>
      <div className="film-details">
        <FilmDetails />
      </div>
    </div>
  );
}

export default App;
