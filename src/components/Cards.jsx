import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Cards.css'

function Cards({mood,data}) {
  

  return (
    <div className="cards">
      {data.map((item,index) => (
        <div key={index} className={mood? "cardLight":"cardDark"}>
          <img src={item.flags.png} alt="" />
          <h3>{item.name.common}</h3>
          <p>Population:{item.population}</p>
          <p>Region:{item.region}</p>
          <p>Capital: {item.capital} </p>
          <a href="">Details</a>
        </div>
      ))}
    </div>
  );
}

export default Cards;
