import React from "react";

const SearchBar = () => {
  return (
    <React.Fragment>
      <div>
        <input type="search" placeholder="Search..." />
      </div>
      <div>
        <input type="checkbox" /> <span>Only show products in stock</span>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
