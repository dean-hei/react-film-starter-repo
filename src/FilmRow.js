import React from 'react';
import FilmPoster from './FilmPoster';
import FilmDetails from './FilmDetails';

function FilmRow(props) {
    
    return (
        <div className="film-row">
            <FilmPoster poster={props.poster_path} title={props.title} />
            <FilmDetails title={props.title} date={props.release_date} />
        </div>
    )
}

export default FilmRow;