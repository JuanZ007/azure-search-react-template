import React from 'react';

import './Result.css';

export default function Result(props) {
    return(

	<a href="http://{`${props.document.location}`}" target="_blank">

	 console.log(props.document);
	console.log(props.document.text);
	console.log(props.document.location);
	
	//<div className="card result">
    //    <a href={`/details/${props.document.id}`}>
    //        <img className="card-img-top" src={props.document.image_url} alt={props.document.original_title}></img>
    //        <div className="card-body">
    //            <h6 className="title-style">{props.document.original_title}</h6>
    //        </div>
    //    </a>
    //</div>
    );
}

