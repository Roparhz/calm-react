import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });
      if (response.status === 200) {
        window.location.href = "/";
      } else {
        setError("Adresse e-mail ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
      setError("Une erreur s'est produite lors de la connexion");
    }
  };

  return (
    <div>
      <h2>Page de connexion</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
