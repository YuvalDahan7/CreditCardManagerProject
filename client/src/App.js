import { useState } from "react";
import "./App.css";
import DisplayCardList from "./Components/DisplayCardsList/DisplayCardList";
import Login from "./Components/Login/Login";
import FilterCards from "./Components/FilterCards/FilterCards";
import { login } from "./apiService";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [showBanksDetails, setShowBanksDetails] = useState(null);

  const handleBanksDetails = (banks) => {
    setShowBanksDetails(banks);
  };

  const handleLogin = async (userName, password) => {
    try {
      const accessToken = await login(userName, password);
      console.log(accessToken);
      setIsLoggedIn(true);
    } catch (err) {
      alert("User name or password is incorrect!");
      console.error(err);
    }
  };

  return (
    <div className={"App"}>
      <>
        <h1>Credit Card Manager</h1>
        {isLoggedIn ? (
          <>
            <DisplayCardList
              showBanksDetails={showBanksDetails}
              handleBanksDetails={handleBanksDetails}
              setShowBanksDetails={setShowBanksDetails}
            />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </>
    </div>
  );
}

export default App;
