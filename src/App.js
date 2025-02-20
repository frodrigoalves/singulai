import React from "react";
import "./App.css";
import logo from "./assets/singulAI-logo.png";
import securityIcon from "./assets/segurança.png";

function App() {
  return (
    <div className="container">
      <div className="glass-card">
        <img src={logo} alt="SingulAI Logo" className="logo" />
        <h2 className="title">SingulAI</h2>
        <p className="subtitle">Legado Digital Eterno®</p>

        <div className="input-container">
          <input type="text" placeholder="Digite sua carteira" className="input-field" />
        </div>

        <button className="login-button">Entrar</button>

        <div className="security-container">
          <img src={securityIcon} alt="Segurança" className="security-icon" />
          <p className="security-text">Conexão segura com Blockchain</p>
        </div>
      </div>
    </div>
  );
}

export default App;
