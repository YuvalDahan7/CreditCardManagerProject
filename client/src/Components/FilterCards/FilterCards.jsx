import React, { useEffect, useState } from "react";
import "./FilterCards.css";

function FilterCards({ onFilter, onReset }) {
  const defaultFilters = {
    isBlocked: 'All',
    cardNumber: '',
    bankCode: 'All',
  };

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    onReset();
  };

  useEffect(() => {
    onFilter(filters);
  }, [filters]);

  return (
    <div className="filterContainer">
      <h1>Search for a card</h1>
      <div className="cardBlockSection">
        <p>Blocked ?</p>
        <select
          name="isBlocked"
          value={filters.isBlocked}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>
      <div className="cardNumberSection">
        <p>Card number: </p>
        <input
          type="text"
          name="cardNumber"
          value={filters.cardNumber}
          onChange={handleFilterChange}
        />
      </div>
      <div className="bankNumberSection">
        <p>Bank code: </p>
        <select
          name="bankCode"
          value={filters.bankCode}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="001">001</option>
          <option value="002">002</option>
          <option value="003">003</option>
          <option value="004">004</option>
        </select>
      </div>
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
}

export default FilterCards;


