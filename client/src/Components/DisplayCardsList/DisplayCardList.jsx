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
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardDetails = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setShowBanksDetails(null);
    setSelectedCard(null);
  };

  const refreshCards = () => {
    getCards()
      .then((data) => {
        setCards(data);
        setFilteredCards(data); // Initialize filteredCards with all cards
      })
      .catch((err) => {
        console.log("Error fetching cards:", err);
      });
  };

  const handleCardListUpdate = (updatedCards) => {
    refreshCards();
  };

  const handleFilter = (filters) => {
    const filtered = cards.filter((card) => {
      return (
        (filters.cardNumber === "" ||
          card.cardNumber.includes(filters.cardNumber)) &&
        (filters.isBlocked === "" ||
         String(card.isBlocked) === filters.isBlocked) 
        // (filters.bankCode === "All" || card.bankCode === filters.bankCode)
      );
    });
    setFilteredCards(filtered);
  };

  useEffect(() => {
    refreshCards();
  }, []);

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
        {filteredCards.map((card) => (
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
