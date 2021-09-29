import React, {useState} from 'react';
import { Collapse, Checkbox, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';

import './CheckboxFacet.css';

export default function CheckboxFacet(props) {

    let [isExpanded, setIsExpanded] = useState(false);

    const checkboxes = props.values.map(facetValue => {

        let isSelected = props.selectedFacets.some(facet => facet.value === facetValue.value);
        let Value = facetValue.value
        if (Value.includes('bizagidevsdoc_site.json')) { 
                Value = 'Bizagi Devs';	    	    
            }
            if (Value.includes('tickets_support.json')) { 
                Value = 'Tickets';	    	    
            }
            if (Value.includes('documentation_site.json')) { 
                Value = 'Technical';	    	    
            }
            if (Value.includes('internalkb_site.json')) { 
                Value = 'KB Internal';	    	    
            }
            if (Value.includes('cloud_operations_site.json')) { 
                Value = 'Cloud Operations';	    	    
            }
            if (Value.includes('externalkb_site.json')) { 
                Value = 'KB External';	    	    
            }
        
        return (
            <FacetValueListItem dense disableGutters id={Value}>
                <Checkbox 
                    edge="start" 
                    disableRipple 
                    checked={isSelected}
                    onClick= {
                        isSelected ? 
                        () => props.removeFilter({field: props.name, value: Value}) :
                        () => props.addFilter(props.name, Value)
                    }
                />
                <ListItemText primary={Value + " (" + facetValue.count + ")"}/>
            </FacetValueListItem>
        );
    });


    return (
        <div>
            <FacetListItem disableRipple={true} button onClick={() => setIsExpanded(!isExpanded)}>
                <ListItemText 
                    primary={props.mapFacetName(props.name)}
                />
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </FacetListItem>
            <Collapse in={isExpanded} component="div">
                <FacetValuesList>
                    {checkboxes}
                </FacetValuesList>
            </Collapse>
        </div>
    );
}

const FacetListItem = styled(ListItem)({
    paddingLeft: '36px !important',
})

const FacetValueListItem= styled(ListItem)({
    paddingLeft: '46px !important',
});

const FacetValuesList= styled(List)({
    maxHeight: 340,
    overflowY: 'auto !important',
    marginRight: '18px !important'
})
