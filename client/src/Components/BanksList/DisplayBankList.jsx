import React, { useEffect, useState } from "react";
import { getBanks } from "../../apiService";
import "./DisplayBankList.css";

function DisplayBankList({ onClose }) {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    getBanks()
      .then((data) => {
        setBanks(data);
      })
      .catch((err) => {
        console.log("Error fetching cards:", err);
      });
  }, []);

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="banksContainer">
        <ul className="bankList">
          {banks.map((bank) => (
            <div className="bank">
              <li key={bank.bankCode}>
                <div className="bankContent">
                  <div className="bankCode">
                    <span className="boldLabel">Bank Code: </span>{" "}
                    {bank.bankCode}
                  </div>
                  <div className="bankNumber">
                    <span className="boldLabel">Bank name: </span>{" "}
                    {bank.bankName}
                  </div>
                  <div className="bankDescription">
                    <span className="boldLabel">Description:</span>
                    {bank.description}
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DisplayBankList;
