import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";

const url = "https://restcountries.eu/rest/v2/all";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(url);
    const newItems = await res.json();
    setData(newItems);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <div className="App">
      <Countries item={data} />
    </div>
  );
}

export default App;
