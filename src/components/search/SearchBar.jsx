import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div>name</div>
      <div>model</div>
      <div>color</div>
      <div>year</div>
      <div>{"< year"}</div>
      <div>{"> year"}</div>
    </div>
  );
}

export default SearchBar