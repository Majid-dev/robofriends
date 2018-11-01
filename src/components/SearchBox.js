import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='ma3'>
      <input
        className='pa2 br2 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;