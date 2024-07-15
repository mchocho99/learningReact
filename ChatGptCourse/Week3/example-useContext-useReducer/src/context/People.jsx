import { createContext, useReducer } from "react";

const initialState = {
  people: [],
};

// eslint-disable-next-line react-refresh/only-export-components
export const actions = {
  GET_PEOPLE: "GET_PEOPLE",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PEOPLE:
      return { ...state, people: action.payload };
  }
};

export const PeopleContext = createContext();

// eslint-disable-next-line react/prop-types
export const PeopleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PeopleContext.Provider value={{ state, dispatch }}>
      {children}
    </PeopleContext.Provider>
  );
};
