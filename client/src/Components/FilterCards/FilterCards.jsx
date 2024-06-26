import React from "react";
import "./FilterCards.css";

function FilterCards() {
  const handleSearchClick = () => {
    "";
  };
  return (
    <div className="filterContainer">
      <h1>Search for a card</h1>
      <div className="cardBlockSection">
        <p>Blocked ?</p>
        <select name="" id="">
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>
      <div className="cardNumberSection">
        <p>Card number: </p>
        <input type="text" />
      </div>
      <div className="bankNumberSection">
        <p>Bank code: </p>
        <select name="" id="">
          <option value="001">001</option>
          <option value="002">002</option>
          <option value="003">003</option>
          <option value="004">004</option>
        </select>
      </div>

      <button className="filterButton" onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default FilterCards;
