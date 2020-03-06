import React from 'react';

function FilmDetails(props) {
    return (
        <div className="detail">
            <h3>{props.title}</h3>
            <p>{props.date.split("-")[0]}</p>
        </div>
    )
}

export default FilmDetails;