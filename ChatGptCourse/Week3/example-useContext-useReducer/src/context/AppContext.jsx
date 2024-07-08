import { createContext, useReducer } from "react";

const initialState = {
  count: 0,
};

// eslint-disable-next-line react-refresh/only-export-components
export const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SET_VALUE: "SET_VALUE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actions.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actions.SET_VALUE:
      return { ...state, count: action.payload };
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
