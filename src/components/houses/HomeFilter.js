import React, { useContext, useEffect, useRef } from 'react';
import HouseContext  from '../../context/house/houseContext';

const HomeFilter = () => {
  const houseContext = useContext(HouseContext)
  const text = useRef('')

  useEffect(() => {
    if(filtered == null) {
        text.current.value = ''
    }
  })

  // we just need the house dispatch without state.
  // const houseDispatch = usehouses()[1];
  const { filterHouses, clearFilter, filtered } = houseContext

  const onChange = (e) => {
    if (e.target.value !== '') {
      filterHouses(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <input type='text' ref={text} className="search__input" 
      placeholder="Search houses..." onChange={onChange} />
    </form>
  );
};

export default HomeFilter;