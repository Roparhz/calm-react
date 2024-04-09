import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      }); 
      const token = response.data.bearer;
      if (token) {
        localStorage.setItem("token", token);
      }
      if (response && response.status === 200) {
        setIsLoggedIn(true);
        window.location.href = "/admin";
      } else {
        setError("Adresse e-mail ou mot de passe incorrect");
      }
    } catch (error) {
      setError("Une erreur s'est produite lors de la connexion");
    }
  };

  return (
    <div className="login-container">
      <section className="form-container">
        <h2 className="title">Page de connexion</h2>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse mail"
          />
          <label htmlFor="password">Mot de passe :</label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
          />
          <button className="form-btn" type="submit">
            Se connecter
          </button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
