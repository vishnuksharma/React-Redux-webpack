import React from 'react';
import FilterLink from "../containers/FilterLink";
import {visibilityFilters} from "../actions";

const Footer = () => {
    return (
        <div>
            <span> Show:</span>
            <FilterLink filter={visibilityFilters.SHOW_ALL}>
                All 
            </FilterLink>
            <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
                Completed 
            </FilterLink>
            <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>
                Active 
            </FilterLink>
        </div>
    );
}

export default Footer;