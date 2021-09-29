import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
	    	<div>
	    		<a href={`http://${props.document.location}`}><h6 className="title-style">{props.document.title}</h6></a>
			{props.document.text}
			<br></br>
		</div>
    );
}

