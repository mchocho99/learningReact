import { Input } from "@chakra-ui/react";
import { useValueState } from "../hooks/useValueState";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ action = null }) => {
  const { data, setData } = useValueState(action);

  return (
    <>
      <Input
        placeholder="Search people.."
        type="search"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBar;
