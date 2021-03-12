import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return(
        <div>
            <input type='search' className='search' placeholder={placeholder}
            onChange={handleChange}>
            </input>
        </div>
    );
}

export default SearchBox;