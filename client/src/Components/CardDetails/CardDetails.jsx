import React, { useEffect, useState } from "react";
import "./CardDetails.css";

function CardDetails({ card, onClose }) {
  const [cardBlockedStatus, setCardBlockedStatus] = useState("");
  const [validRequestAnIncrease, setValidRequestAnIncrease] = useState(false);
  const [validSalaryRequest, setValidSalaryRequest] = useState("");

  useEffect(() => {
    if (card.isBlocked || card.occupation === "אחר") {
      setCardBlockedStatus("true");
      setValidRequestAnIncrease(false);
      return;
    }
    setCardBlockedStatus("false");
    setValidRequestAnIncrease(true);
  }, [card]);

  useEffect(() => {
    let salaryRequest = card.averageMonthlyIncome;
    if (card.occupation === "שכיר") {
      salaryRequest = Math.round(
        card.averageMonthlyIncome + card.averageMonthlyIncome / 2
      );
      setValidSalaryRequest(salaryRequest);
    }
    if (card.occupation === "עצמאי") {
      salaryRequest = Math.round(
        card.averageMonthlyIncome + card.averageMonthlyIncome / 3
      );
      setValidSalaryRequest(salaryRequest);
    }
    if (card.occupation === "אחר") {
      setValidSalaryRequest("");
    }
  }, [card]);

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="detailsContainer">
        <h1>Card Details</h1>
        <div className="cardContent">
          {validRequestAnIncrease && (
            <div className="salaryIncrease">
              <p><span className="boldLabel">Amount requested: </span> </p>
              <input
                type="text"
                className="input"
                placeholder={card.averageMonthlyIncome + " - " + validSalaryRequest}
              />
            </div>
          )}
          <p><span className="boldLabel">Occupation:</span> {card.occupation}</p>
          <p><span className="boldLabel">Average monthly income:</span> {card.averageMonthlyIncome}</p>
          <p><span className="boldLabel">Blocked:</span> {cardBlockedStatus}</p>
        </div>
        {validRequestAnIncrease && (
          <button className="increaseButton">Increase Credit Limit</button>
        )}
      </div>
    </>
  );
}

export default CardDetails;
