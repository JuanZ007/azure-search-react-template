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
            if (filter.value.includes('bizagidevsdoc_site.json')) { 
                filter.value = 'Bizagi Devs';	    	    
            }
            if (filter.value.includes('tickets_support.json')) { 
                filter.value = 'Tickets';	    	    
            }
            if (filter.value.includes('documentation_site.json')) { 
                filter.value = 'Technical';	    	    
            }
            if (filter.value.includes('internalkb_site.json')) { 
                filter.value = 'KB Internal';	    	    
            }
            if (filter.value.includes('cloud_operations_site.json')) { 
                filter.value = 'Cloud Operations';	    	    
            }
            if (filter.value.includes('externalkb_site.json')) { 
                filter.value = 'KB External';	    	    
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
