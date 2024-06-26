import React, { useState } from "react";
import "./FilterCards.css";

function FilterCards({ onFilter }) {
  const [blocked, setBlocked] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [bankCode, setBankCode] = useState("All");

  const handleSearchClick = () => {
    const filter = {
        blocked,
        cardNumber,
        bankCode: bankCode !== "All" ? bankCode : undefined,
      };
    onFilter(filter);
  };

  const handleResetClick = () => {
    setBlocked("");
    setCardNumber("");
    setBankCode("All");
    onFilter({});
  };

  return (
    <div className="filterContainer">
      <h1>Search for a card</h1>
      <div className="cardBlockSection">
        <p>Blocked ?</p>
        <select value={blocked} onChange={(e) => setBlocked(e.target.value)}>
          <option value=""> </option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>
      <div className="cardNumberSection">
        <p>Card number: </p>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="bankNumberSection">
        <p>Bank code: </p>
        <select value={bankCode} onChange={(e) => setBankCode(e.target.value)}>
          <option value="All">All</option>
          <option value="001">001</option>
          <option value="002">002</option>
          <option value="003">003</option>
          <option value="004">004</option>
        </select>
      </div>

      <button className="filterButton" onClick={handleSearchClick}>
        Search
      </button>

      <button className="resetButton" onClick={handleResetClick}>
        Show All Cards
      </button>
    </div>
  );
}

export default FilterCards;
