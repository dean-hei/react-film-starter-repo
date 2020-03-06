import React from 'react';

function FilmListing(props) {
    let posterURL = "https://image.tmdb.org/t/p/w780/" + props.poster;
    let bgURL = "https://image.tmdb.org/t/p/w780/" + props.bg;
    let divStyle = {
        background: `url(${bgURL})`,
        // background-size: "cover",
        // background-postion: "center",
        color: "white"
    }
    return (
        <div className="listing">
            <div className="banner" style={divStyle}>
                <h1>{props.title}</h1>
            </div>
            <p>{props.overview}</p>
            <img src={posterURL}></img>
        </div>
    )
}

export default FilmListing;