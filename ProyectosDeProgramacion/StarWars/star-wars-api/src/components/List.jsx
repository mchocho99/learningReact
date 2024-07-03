import PropTypes from "prop-types";
import Person from "./Person";
import { SimpleGrid } from "@chakra-ui/react";

const List = ({ people }) => {
  return (
    <>
      {people && (
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {people.map((person) => (
            <Person key={person.url} {...person} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
  // return <>{people && people.map((p) => <Person key={p.url} {...p} />)}</>;
};

List.propTypes = {
  people: PropTypes.array,
};

export default List;
