import React, { useState } from "react";
import "./Login.css";
import { FaRegUser, FaLock } from "react-icons/fa";

function Login({ onLogin }) {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = onLogin(userName, password);
    if (!loginSuccess) {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="loginContainer">
      <h1>Sign in</h1>
      <form className="formContainer">
        <div className="userNameSection">
          <FaRegUser />
          <input
            className="userName"
            type="text"
            name="userName"
            placeholder="User Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="passwordSection">
          <FaLock />
          <input
            className="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </form>

      <button className="loginButton" onClick={handleSubmit}>
        Connect
      </button>
    </div>
  );
}

export default Login;
