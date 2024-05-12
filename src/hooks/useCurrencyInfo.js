import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  async function fetchData() {
    const data = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    const result = await data.json()
    // console.log(result)
    setData(result[currency])
  }

  useEffect (() => {
    fetchData()
  },[currency])

  console.log(data);
  return data;
}

export default useCurrencyInfo;

