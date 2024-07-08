import { useState, useContext } from "react";
import { actions, AppContext } from "../context/AppContext";

const SetValueForm = () => {
  const { dispatch } = useContext(AppContext);
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value === "") {
            setValue("");
          } else if (!isNaN(e.target.value)) {
            setValue(parseInt(e.target.value));
          }
        }}
        value={value}
      />
      <button
        onClick={() => {
          if (value === "") {
            dispatch({ type: actions.SET_VALUE, payload: 0 });
          } else {
            dispatch({ type: actions.SET_VALUE, payload: value });
          }
        }}
      >
        ADD VALUE
      </button>
    </>
  );
};

export default SetValueForm;
