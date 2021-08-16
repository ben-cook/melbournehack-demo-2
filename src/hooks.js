import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!url) return;

    setStatus("fetching");

    axios(url)
      .then((res) => {
        setData(res.data);
        setStatus("succeeded");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, [url]);

  return { status, data };
}
