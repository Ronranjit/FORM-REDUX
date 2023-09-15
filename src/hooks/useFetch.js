import React, { useEffect, useState } from "react";

const useFetch = (url, option) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetch(url, option);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
  });
  return { data };
};

export default useFetch;
