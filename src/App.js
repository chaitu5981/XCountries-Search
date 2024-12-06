import React, { useEffect, useState } from "react";
import Country from "./Country";
import "./App.css";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let data1;
    if (search === "") data1 = countries;
    else
      data1 = countries.filter((d) =>
        d.name.common.toLowerCase().includes(search.toLowerCase())
      );
    setFilteredCountries(data1);
  }, [search, countries]);
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
        {filteredCountries?.map((country) => (
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
