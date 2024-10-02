import { useState, useEffect } from "react";

export const useFetch = (Options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (Options.url) {
      fetch(Options.url).then((response) =>
        response.json().then((jsonData) => setData(jsonData))
      );
    }
  }, [Options.url]);

  return {
    data,
  };
};
