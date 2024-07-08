import { useContext } from "react";
import { AppContext, actions } from "../context/AppContext";

const DecrementButton = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <button
      onClick={() => {
        dispatch({ type: actions.DECREMENT });
      }}
    >
      DecrementButton
    </button>
  );
};

export default DecrementButton;
