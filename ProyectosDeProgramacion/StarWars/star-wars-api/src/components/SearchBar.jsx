import PropTypes from "prop-types";
import { Input } from "@chakra-ui/react";

const SearchBar = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input
        placeholder="Search people.."
        type="search"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default SearchBar;
