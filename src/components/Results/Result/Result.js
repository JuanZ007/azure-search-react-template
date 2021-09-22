import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
	<a href="http://{`${props.document.location}`}" target="_blank">props.document.text</a>

	console.log(props.document);
	console.log(props.document.text);
	console.log(props.document.location);
	
    );
}

