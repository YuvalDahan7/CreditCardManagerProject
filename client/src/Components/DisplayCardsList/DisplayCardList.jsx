import React, { useEffect, useState } from "react";
import { getCards } from "../../apiService";
import "./DisplayCardList.css";
import CardDetails from "../CardDetails/CardDetails";
import DisplayBankList from "../BanksList/DisplayBankList";
import FilterCards from "../FilterCards/FilterCards"; // Import FilterCards component

function DisplayCardList({
  showBanksDetails,
  handleBanksDetails,
  setShowBanksDetails,
}) {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState({ blocked: "", cardNumber: "", bankCode: "" });
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardDetails = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setShowBanksDetails(null);
    setSelectedCard(null);
  };

  const refreshCards = () => {
    getCards(filter)
      .then((data) => {
        setCards(data);
        console.log(data)
      })
      .catch((err) => {
        console.log("Error fetching cards:", err);
      });
  };

  const handleCardListUpdate = (updatedCards) => {
    refreshCards();
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    refreshCards();
  }, [filter]);

  return (
    <div className={"cardsContainer"}>
      <div className="topSection">
        <div className="getBanksButton">
          <button onClick={handleBanksDetails}>Get all banks</button>
        </div>

        <div className="filterCards">
          <FilterCards onFilter={handleFilter} />
        </div>
      </div>

      <ul className="cardList">
        {cards
          .filter((card) => {
            return (
              (filter.blocked === "" ? card : card.isBlocked === filter.blocked) &&
              (filter.cardNumber === "" || card.cardNumber.includes(filter.cardNumber)) &&
              (filter.bankCode === "" || filter.bankCode === "All" || card.bankCode === filter.bankCode)
            );
          })
          .map((card) => (
            <div
              className="card"
              onClick={() => handleCardDetails(card)}
              key={card.cardNumber}
            >
              <li>
                <img src={card.cardImage} alt="" className="cardImage" />
                <div className="cardContent">
                  <div className="cardNumber">
                    Card number: {card.cardNumber}
                  </div>
                  <div className="bankName">
                    <span className="boldLabel">Bank:</span> {card.bankName}
                  </div>
                </div>
              </li>
            </div>
          ))}
        {selectedCard && (
          <CardDetails
            card={selectedCard}
            onClose={handleClose}
            onCardListUpdate={handleCardListUpdate}
          />
        )}
        {showBanksDetails && <DisplayBankList onClose={handleClose} />}
      </ul>
    </div>
  );
}

export default DisplayCardList;
