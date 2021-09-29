import React from 'react';
import { Text } from 'react-native';
import './Result.css';

export default function Result(props) {
    const length = 50; 
    const location = {props.document.location}
    const title= {props.document.title}
    const text = {props.document.text}
    const words = text.split(' ');
    const count = words.length;
    const elements = [];
    
    let position = 0;
    while (position < count) {
			    const text = words.slice(position, length).join(' ');
			    position += length;
			    elements.push((
			      <Text>{text}</Text>
			    ));
			  }
    return(
	    	<div>
	    		<a href={`http://${location}`}><h6 className="title-style">{title}</h6></a>
		 	{elements};
			<br></br>
		</div>
    );
}	
	
	
