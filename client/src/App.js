import { useState } from "react";
import "./App.css";
import DisplayCardList from "./Components/DisplayCardsList/DisplayCardList";
import Login from "./Components/Login/Login";
import FilterCards from "./Components/FilterCards/FilterCards";
import DisplayBankList from "./Components/BanksList/DisplayBankList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [showBanksDetails, setShowBanksDetails] = useState(false);

  const handleBanksDetails = () => {
    setShowBanksDetails(!showBanksDetails);
  };

  const handleLogin = (userName, password) => {
    if (userName === "1" && password === "1") {
      setIsLoggedIn(true);
      return true;
    }
    console.log("err");
    return false;
  };
  return (
    <div className={showBanksDetails ? "rearDarkness" : "App"}>
      <>
        <h1>Credit Card Manager</h1>
        {isLoggedIn ? (
          <>
            <FilterCards />
            <DisplayCardList showBanksDetails={showBanksDetails} handleBanksDetails={handleBanksDetails} />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </>
    </div>
  );
}

export default App;
