import React, { useEffect, useState } from "react";
import "./CardDetails.css";
import { increaseCreditLimit } from "../../apiService";

function CardDetails({ card, onClose, onCardListUpdate }) {
  const [validRequestAnIncrease, setValidRequestAnIncrease] = useState(false);
  const [validSalaryRequest, setValidSalaryRequest] = useState("");
  const [userSalaryRequest, setUserSalaryRequest] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [userAverageMonthlyIncome, setUserAverageMonthlyIncome] = useState("");
  const [displaySuccessMsg, setDisplaySuccessMsg] = useState(false);

  useEffect(() => {
    validateInputs();
  }, [userSalaryRequest, userOccupation, userAverageMonthlyIncome]);

  const validateInputs = () => {
    setValidRequestAnIncrease(false);
    setValidSalaryRequest("");

    if (
      card.isBlocked ||
      !userSalaryRequest ||
      userSalaryRequest <= 0 ||
      !userOccupation ||
      !userAverageMonthlyIncome
    ) {
      return;
    }

    const salary = parseFloat(userAverageMonthlyIncome);
    if (isNaN(salary) || salary < 12000 || salary < 0) {
      return;
    }

    let maxAllowedLimit = 0;
    if (userOccupation === "שכיר") {
      maxAllowedLimit = Math.round(card.averageMonthlyIncome / 2);
    } else if (userOccupation === "עצמאי") {
      maxAllowedLimit = Math.round(card.averageMonthlyIncome / 3);
    } else {
      return;
    }

    if (parseFloat(userSalaryRequest) <= maxAllowedLimit) {
      setValidRequestAnIncrease(true);
      setValidSalaryRequest(maxAllowedLimit);
    }
  };

  const handleIncreaseCreditLimit = () => {
    const requestedLimit = parseFloat(userSalaryRequest);
    if (!requestedLimit || isNaN(requestedLimit)) {
      console.error("Invalid requested amount.");
      return;
    }

    increaseCreditLimit({
      cardNumber: card.cardNumber,
      requestedLimit: requestedLimit,
      occupation: userOccupation,
      averageMonthlyIncome: parseFloat(userAverageMonthlyIncome),
    })
      .then((updatedCards) => {
        onCardListUpdate(updatedCards);
        console.log("Card list updated successfully.");
        setDisplaySuccessMsg(true);
      })
      .catch((err) => {
        console.log("Unable to update card list:", err);
      });
  };

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="detailsContainer">
        <h1>Card Details</h1>

        {displaySuccessMsg ? (
          <div className="successMsg">
            <p>
              <span>Your request passed successfully!</span>
              <br />
              <br /> Press any place to close this window.
            </p>
          </div>
        ) : (
          <div className="cardContent">
            <div className="formSection">
              <p>
                <span className="boldLabel">Amount requested: </span>{" "}
              </p>
              <input
                type="number"
                className="input"
                name="amountRequested"
                onChange={(e) => setUserSalaryRequest(e.target.value)}
              />
            </div>

            <div className="formSection">
              <p>
                <span className="boldLabel">Occupation:</span>
              </p>
              <input
                type="text"
                placeholder="שכיר\עצמאי\אחר"
                className="input"
                value={userOccupation}
                onChange={(e) => setUserOccupation(e.target.value)}
              />
            </div>

            <div className="formSection">
              <p>
                <span className="boldLabel">Average monthly income:</span>
              </p>
              <input
                type="number"
                className="input"
                value={userAverageMonthlyIncome}
                onChange={(e) => setUserAverageMonthlyIncome(e.target.value)}
              />
            </div>

            {validRequestAnIncrease && (
              <button
                className="increaseButton"
                onClick={handleIncreaseCreditLimit}
              >
                Increase Credit Limit
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CardDetails;
