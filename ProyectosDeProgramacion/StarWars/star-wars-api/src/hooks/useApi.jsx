import { useState, useEffect, useCallback } from "react";

export const useApi = (apiFunction) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    apiFunction()
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, loading, error };
};
