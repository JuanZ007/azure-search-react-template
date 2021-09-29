import React from 'react';
import './Result.css';

export default function Result(props) {
    const length = 50; 
    const location = props.document.location
    const title= props.document.title
    const text = props.document.text
    const words = text.split(' ');
    const count = words.length;
    const elements = [];
    let tagHtml = ""
    let position = 0;
    while (position < count) {
			    const text = words.slice(position, length).join(' ');
			    position += length;
			    elements.push((
			      text
			    ));
			  }
    if (location.includes('cloudoperations')) { 
       tagHtml = "Operations";      
    }
    if (location.includes('bizagidocumentation')) { 
       tagHtml = "Technical";      
    }
    if (location.includes('bizagiknowledgebase')) { 
       tagHtml = "KB internal";      
    }
    if (location.includes('cs-bizagi')) { 
       tagHtml = "Tickets";      
    }
    if (location.includes('kb.bizagi.com')) { 
       tagHtml = "KB External";      
    }
    if (location.includes('bizagidevdocs')) { 
       tagHtml = "Bizagi Devs";      
    }
	
	
	
	
	
    return(
	    	<div>
	    		<a href={`http://${location}`}><h6 className="title-style">{tagHtml}: {title}</h6></a>
		 	{elements};
			<br></br>
		</div>
    );
}	
	
	
