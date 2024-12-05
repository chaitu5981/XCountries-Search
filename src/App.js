import React, { useEffect, useState } from "react";
import Country from "./Country";
import "./App.css";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      let data1;
      if (search === "") data1 = data;
      else
        data1 = data.filter((d) =>
          d.name.common.toLowerCase().includes(search.toLowerCase())
        );
      setCountries(data1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  return (
    <div className="main">
      <input
        type="text/"
        placeholder="Search for countries"
        value={search}
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container">
        {countries?.map((country) => (
          <Country
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.png}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
