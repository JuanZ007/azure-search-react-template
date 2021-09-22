import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
	
    <div className="individual-results">
	<label className="tag">
	//'+tagHtml+
	<a href="http://{`${props.document.location}`}" target="_blank">
		<h2>
			{props.document.title}
		</h2>
	</a>
	</label>
		<p>
			{props.document.text}
		//'+readMore((data[i].text).replaceAll("\u00b6", "<br>"),50);+'
		</p>
	</div>
	 console.log(props.document);
	
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

