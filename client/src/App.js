import { useState } from "react";
import "./App.css";
import DisplayCardList from "./Components/DisplayCardsList/DisplayCardList";
import Login from "./Components/Login/Login";
import FilterCards from "./Components/FilterCards/FilterCards";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [showBanksDetails, setShowBanksDetails] = useState(null);

  const handleBanksDetails = (banks) => {
    setShowBanksDetails(banks);
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
    <div className={"App"}>
      <>
        <h1>Credit Card Manager</h1>
        {isLoggedIn ? (
          <>
            <FilterCards />
            <DisplayCardList showBanksDetails={showBanksDetails} handleBanksDetails={handleBanksDetails} setShowBanksDetails={setShowBanksDetails} />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </>
    </div>
  );
}

export default App;
