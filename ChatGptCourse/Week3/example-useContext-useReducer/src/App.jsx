import { useContext } from "react";

import { useSelector, useDispatch } from "react-redux";

import { actions, PeopleContext } from "./context/People";

import { getPeople } from "./redux/peopleSlice";

import { useFetchDataStore } from "./hooks/useFetchDataStore";

import { getPeopleURL } from "./api";

import List from "./components/List";

import { Box } from "@mui/material";

import "./App.css";

function App() {
  // const { dispatch } = useContext(PeopleContext);
  // const { response, loading, error } = useFetchDataStore(
  //   getPeopleURL,
  //   dispatch,
  //   actions.GET_PEOPLE
  // );

  const dispatchRedux = useDispatch();

  const { response, loading, error } = useFetchDataStore(
    getPeopleURL,
    dispatchRedux,
    null,
    getPeople
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <Box>{response && response.results && <List />}</Box>;
}

export default App;
