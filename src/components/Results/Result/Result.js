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
    let cssStyle = ""
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
       cssStyle = "tag1";	    
    }
    if (location.includes('bizagidocumentation')) { 
       tagHtml = "Technical";      
       cssStyle = "tag2";	    	    
    }
    if (location.includes('bizagiknowledgebase')) { 
       tagHtml = "KB internal";     
       cssStyle = "stylekbinternal";	    	    
    }
    if (location.includes('cs-bizagi')) { 
       tagHtml = "Tickets";      
       cssStyle = "styleticket";	    	    
    }
    if (location.includes('kb.bizagi.com')) { 
       tagHtml = "KB External";     
       cssStyle = "stylekbexternal";	    	    
    }
    if (location.includes('bizagidevdocs')) { 
       tagHtml = "Bizagi Devs";     
       cssStyle = "styleBizagiDevs";	    	    
    }
	
	
	
	
	
    return(
	    	<div>
	    		<label className="tag {cssStyle}">{tagHtml}</label> <a href={`http://${location}`}><h6 className="title-style">{title}</h6></a>
		 	{elements};
			<br></br>
		</div>
    );
}	
	
	
