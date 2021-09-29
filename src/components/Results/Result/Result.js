import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
	    	<div>
	    		<h6 className="title-style">{props.document.title}</h6>
			<a href={`http://${props.document.location}`} target="_blank">{props.document.text}</a>
		</div>
    );
}

