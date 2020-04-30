import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url).then((response) =>
      response.json().then((result) => setData(result.results))
    );
  }, [url]);
  return data;
};
