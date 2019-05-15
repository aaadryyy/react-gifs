import React from "react";

const SearchBar = ({ handleChange }) => {
  return <input className="form-search" type="text" onChange={handleChange} />;
};

export default SearchBar;
