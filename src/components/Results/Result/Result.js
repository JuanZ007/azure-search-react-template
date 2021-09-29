import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
	    	<div>
			<a href={`http://${props.document.location}`} target="_blank">{props.document.text}</a>
		</div>
    );
}

