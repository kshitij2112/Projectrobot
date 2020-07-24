import React from 'react';

const SearchBox = ({searchfield, seacrhChange}) => {
  return (
    <div className = 'pa2'>
    <input
    className='pa3 b--green bg-lightest-blue'
     type='search'
     placeholder='Search Robots'
    onChange = {seacrhChange}  />
    </div>
  );
}

export default SearchBox;
