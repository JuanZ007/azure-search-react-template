import React from 'react';
import { Text } from 'react-native';
import './Result.css';

export default function Result(props) {
    const length = 50;
    return(
	    	<div>
	    		<a href={`http://${props.document.location}`}><h6 className="title-style">{props.document.title}</h6></a>
			
			// Split text into individual words and count length
			  const words = {props.document.text}.split(' ');
			  const count = words.length;

			  // Prepare elements and position tracker
			  const elements = [];
			  let position = 0;

			  // Loop through words whilst position is less than count
			  while (position < count) {
			    // Prepare text for specified length and increment position
			    const text = words.slice(position, length).join(' ');
			    position += length;

			    // Append text element
			    elements.push((
			      <Text>{text}</Text>
			    ));
			  }
			
			
			
			<br></br>
		</div>
    );
}

