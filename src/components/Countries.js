import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

let ign = require("ignore-case");

const Countries = ({ item }) => {
  const [country, setCountry] = useState("");

  return (
    <div className="container">
      <h1>Search country </h1>
      <form>
        <input
          type="text"
          value={country}
          placeholder="type here..."
          onChange={(e) => setCountry(e.target.value)}
        />
      </form>
      <div className="country">
        {country !== ""
          ? item.map((result) => {
              if (ign.includes(result.name, country)) {
                return <Country key={uuidv4()} result={result} res={item} />;
              }
            })
          : item.map((result) => {
              return <Country key={uuidv4()} result={result} res={item} />;
            })}
      </div>
    </div>
  );
};

export default Countries;
