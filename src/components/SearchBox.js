import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div style={{paddingBottom: '0.37em'}}>
            <input
                className='pa3 ba b--green bg-light-gray'
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;