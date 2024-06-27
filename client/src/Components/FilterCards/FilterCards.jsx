import React, { useState } from "react";
import "./FilterCards.css";

function FilterCards({ onFilter }) {
  const handleCreditCardNumberChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="filterContainer">
      <h1>Search for a card</h1>
      {/* <div className="cardBlockSection">
        <p>Blocked ?</p>
        <select value={blocked} onChange={(e) => setBlocked(e.target.value)}>
          <option value=""> </option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div> */}
      <div className="cardNumberSection">
        <p>Card number: </p>
        <input type="text" onChange={handleCreditCardNumberChange} />
      </div>
      {/* <div className="bankNumberSection">
        <p>Bank code: </p>
        <select value={bankCode} onChange={(e) => setBankCode(e.target.value)}>
          <option value="All">All</option>
          <option value="001">001</option>
          <option value="002">002</option>
          <option value="003">003</option>
          <option value="004">004</option>
        </select>
      </div> */}
    </div>
  );
}

export default FilterCards;
