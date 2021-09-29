import React from 'react';
import { List, Chip } from '@material-ui/core';
import CheckboxFacet from './CheckboxFacet/CheckboxFacet';
import styled from 'styled-components';
import "./Facets.css";

export default function Facets(props) {

    function mapFacetName(facetName) {
        const capitalizeFirstLetter = (string) =>
            string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : '';
        facetName = facetName.trim();
        
        if (facetName.includes('metadata_storage_name')) { 
            facetName = 'source';	    	    
        }
        
        facetName = capitalizeFirstLetter(facetName);
        facetName = facetName.replace('_', ' ');
        return facetName;
    }

    function addFilter(name, value) {
        const newFilters = props.filters.concat({ field: name, value: value });
        props.setFilters(newFilters);
    }

    function removeFilter(filter) {      
        const newFilters = props.filters.filter((item) => item.value !== filter.value);
        props.setFilters(newFilters);
    }

    var facets;
    try{
        facets = Object.keys(props.facets).map(key => {
            let facetValue= props.facets[key]
            if (facetValue.includes('bizagidevsdoc_site.json')) { 
                facetValue = 'Bizagi Devs';	    	    
            }
            if (facetValue.includes('tickets_support.json')) { 
                facetValue = 'Tickets';	    	    
            }
            if (facetValue.includes('documentation_site.json')) { 
                facetValue = 'Technical';	    	    
            }
            if (facetValue.includes('internalkb_site.json')) { 
                facetValue = 'KB Internal';	    	    
            }
            if (facetValue.includes('cloud_operations_site.json')) { 
                facetValue = 'Cloud Operations';	    	    
            }
            if (facetValue.includes('externalkb_site.json')) { 
                facetValue = 'KB External';	    	    
            }
            
            return <CheckboxFacet 
                key={key}
                name={key} 
                values={props.facets[key]}
                addFilter={addFilter}
                removeFilter={removeFilter}
                mapFacetName={mapFacetName}
                selectedFacets={props.filters.filter( f => f.field === key)}
              />;
          });
    } catch (error) {
        console.log(error);
    }

    const filters = props.filters.map((filter, index) => {
            if (filter.field.includes('bizagidevsdoc_site.json')) { 
                filter.field = 'Bizagi Devs';	    	    
            }
            if (filter.field.includes('tickets_support.json')) { 
                filter.field = 'Tickets';	    	    
            }
            if (filter.field.includes('documentation_site.json')) { 
                filter.field = 'Technical';	    	    
            }
            if (filter.field.includes('internalkb_site.json')) { 
                filter.field = 'KB Internal';	    	    
            }
            if (filter.field.includes('cloud_operations_site.json')) { 
                filter.field = 'Cloud Operations';	    	    
            }
            if (filter.field.includes('externalkb_site.json')) { 
                filter.field = 'KB External';	    	    
            }
        
            return (
            <li key={index}>
                <Chip 
                    label={`${mapFacetName(filter.field)}: ${filter.value}`} 
                    onDelete={() => removeFilter(filter)}
                    className="chip"
              />
            </li>);
          });


    return (
        <div id="facetPanel" className="box">
            <div className="facetbox">
                <div id="clearFilters">
                <ul className="filterlist">
                    {filters}
                </ul>
                </div>
                <FacetList component="nav" className="listitem" >
                    {facets}
                </FacetList>    
            </div>
        </div>
    );
};

const FacetList = styled(List)({
    marginTop: '32px !important'
})
