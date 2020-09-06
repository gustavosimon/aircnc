import React from "react";
import logo from "./assets/logo.svg";
import Routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} alt="AirCnC" />
          <div className="content">
            <Routes />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
