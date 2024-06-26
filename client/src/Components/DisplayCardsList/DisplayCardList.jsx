import React, { useEffect, useState } from "react";
import { getCards } from "../../apiService";
import "./DisplayCardList.css";
import CardDetails from "../CardDetails/CardDetails";
import DisplayBankList from "../BanksList/DisplayBankList";

function DisplayCardList({
  showBanksDetails,
  handleBanksDetails,
  setShowBanksDetails,
}) {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardDetails = (card) => {
    console.log("card: ", card, "clicked!");
    setSelectedCard(card);
  };

  const handleClose = () => {
    setShowBanksDetails(null);
    setSelectedCard(null);
  };

  useEffect(() => {
    getCards(filter)
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Error fetching cards:", err);
      });
  }, [filter]);

  const handleCardListUpdate = (updatedCards) => {
    setCards(updatedCards);
  };

  return (
    <div className={"cardsContainer"}>
      <div className="getBanksButton">
        <button onClick={handleBanksDetails}>Get all banks</button>
      </div>
      <ul className="cardList">
        {cards.map((card) => (
          <div className="card" onClick={() => handleCardDetails(card)}>
            <li key={card.cardNumber}>
              <img src={card.cardImage} alt="" className="cardImage" />
              <div className="cardContent">
                <div className="cardNumber">Card number: {card.cardNumber}</div>
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
