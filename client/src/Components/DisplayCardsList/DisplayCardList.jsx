import React, { useEffect, useState } from "react";
import { getCards } from "../../apiService";
import "./DisplayCardList.css";
import CardDetails from "../CardDetails/CardDetails";

function DisplayCardList() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardDetails = (card) => {
    console.log("card: ", card, "clicked!");
    setSelectedCard(card);
  };

  const handleClose = () => {
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

  return (
    <div className="cardsContainer">
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
          <CardDetails card={selectedCard} onClose={handleClose} />
        )}
      </ul>
    </div>
  );
}

export default DisplayCardList;
