import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({
  searchValue,
  onChangeSearch,
  checkBoxValue,
  onChangeCheckBox,
}) => {
  return (
    <React.Fragment>
      <div>
        <input
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            onChangeSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={checkBoxValue}
          onChange={(e) => {
            onChangeCheckBox(e.target.checked);
          }}
        />
        <span>Only show products in stock</span>
      </div>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  onChangeSearch: PropTypes.func,
  checkBoxValue: PropTypes.boolean,
  onChangeCheckBox: PropTypes.func,
};

export default SearchBar;
