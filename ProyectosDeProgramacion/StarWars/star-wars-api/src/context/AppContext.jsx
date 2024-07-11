import { createContext, useReducer } from "react";

const initialState = {
  filter: "",
};

// eslint-disable-next-line react-refresh/only-export-components
export const actions = {
  SET_FILTER: "SET_FILTER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FILTER:
      return { ...state, filter: action.payload };
  }
};

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
