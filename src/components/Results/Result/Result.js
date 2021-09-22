import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
       /* <h6 className="title-style">{props.document.text} - {props.document.title} </h6> */
    <div className="card result">
        <a href={`/details/${props.document.id}`}>
            <img className="card-img-top" src={props.document.image_url} alt={props.document.original_title}></img>
            <div className="card-body">
                <h6 className="title-style">{props.document.original_title}</h6>
            </div>
        </a>
    </div>
    );
}
