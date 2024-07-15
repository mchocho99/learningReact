import { Box, Grid } from "@mui/material";
import ListItem from "./ListItem";
import { useContext } from "react";
import { PeopleContext } from "../context/People";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const List = () => {
  // const {
  //   state: { people },
  // } = useContext(PeopleContext);

  const people = useSelector((state) => state.people);

  return (
    <>
      {people && (
        <Box>
          <Grid container spacing={2}>
            {people.map((element) => (
              <Grid item key={element.id} xs={12} md={4}>
                <ListItem {...element} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default List;
