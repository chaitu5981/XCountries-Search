import React from "react";
import "./Country.css";
const Country = ({ name, flag }) => {
  return (
    <div className="countryCard">
      <img src={flag} alt={name} className="flag" />
      <h4 className="name">{name}</h4>
    </div>
  );
};

export default Country;
