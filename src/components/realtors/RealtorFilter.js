import React, { useContext, useEffect, useRef } from "react";
import RealtorContext from "../../context/realtor/realtorContext";

const RealtorFilter = () => {
  const realtorContext = useContext(RealtorContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered == null) {
      text.current.value = "";
    }
  });

  const { filterRealtors, clearFilter, filtered } = realtorContext;

  const onChange = (e) => {
    if (e.target.value !== "") {
      filterRealtors(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <input
        type="text"
        ref={text}
        className="search__input"
        placeholder="Search realtor..."
        onChange={onChange}
      />
    </form>
  );
};

export default RealtorFilter;
