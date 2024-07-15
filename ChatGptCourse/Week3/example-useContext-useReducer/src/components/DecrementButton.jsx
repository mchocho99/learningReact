import { useContext } from "react";
import { AppContext, actions } from "../context/AppContext";

import Button from "@mui/material/Button";

const DecrementButton = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch({ type: actions.DECREMENT });
      }}
    >
      Decrement Button
    </Button>
  );
};

export default DecrementButton;
