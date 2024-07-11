import { useState, useEffect, useCallback } from "react";

export const useData = (response) => {
  const [data, setData] = useState(null);

  const implementData = useCallback(() => {
    if (response && response.data) {
      setData(response.data.results);
    }
  }, [response]);

  useEffect(() => {
    implementData();
  }, [implementData]);

  return { data, setData };
};
