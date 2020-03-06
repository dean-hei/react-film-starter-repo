import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmList from './FilmList';
import TMDB from './TMDB';


function App() {
  return (
    <div className="film-library">
      <div className="film-list">
        <FilmList films={TMDB.films} />
      </div>
      <div className="film-details">
        <FilmListing title={TMDB.films[6].title} 
          poster={TMDB.films[6].poster_path} 
          bg={TMDB.films[6].backdrop_path}
          overview={TMDB.films[6].overview}
        />
      </div>
    </div>
  );
}

export default App;
