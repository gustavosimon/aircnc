import React, { FormEvent, useState } from "react";
import api from "./services/api";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} alt="AirCnC" />

          <div className="content">
            <p>
              Ofereça <strong>spots</strong> para programadores e encontre{" "}
              <strong>talentos</strong> para sua empresa
            </p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-MAIL *</label>
              <input
                type="email"
                id="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </form>
            <button type="submit" className="btn">
              Entrar
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
