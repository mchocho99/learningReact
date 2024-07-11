import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export const useValueState = (action) => {
  const [data, setData] = useState("");
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (data && action) {
      dispatch({ type: action, payload: data });
    }
  }, [data, action, dispatch]);

  return { data, setData };
};
