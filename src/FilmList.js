import React from 'react';
import FilmRow from './FilmRow';

function FilmList(props) {
    return (
        <div>
            {props.films.map((film) => {
                return (
              <FilmRow poster_path={film.poster_path} title={film.title} release_date={film.release_date} />
            )})}
        </div>
    )
}

export default FilmList;