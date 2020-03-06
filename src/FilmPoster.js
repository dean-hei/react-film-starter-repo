import React from 'react';

function FilmPoster(props) {
    let altText = "poster for " + props.title; 
    let src = "https://image.tmdb.org/t/p/w780/" + props.poster;
    return (
        <div>
            <img src={src} alt={altText} />
        </div>
    )
}

export default FilmPoster;