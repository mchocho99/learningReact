import { useState, useEffect, useCallback } from "react";

import axios from "axios";

export const useFetchDataStore = (
  url,
  dispatch = null,
  action = null,
  actionRedux = null
) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    axios
      .get(url)
      .then((response) => {
        setResponse(response.data);
        if (dispatch && action) {
          dispatch({ type: action, payload: response.data });
        }
        if (dispatch && actionRedux) {
          dispatch(actionRedux(response.data));
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, loading, error };
};
