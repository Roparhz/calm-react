import React from "react";
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="img-container">
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="img/img-chatgpt2-mini.webp"
          />
          <source srcset="img/img-chatgpt2.webp" />
          <img
            src="img/img-chatgpt2.webp"
            alt="Image d'une table avec des fruits et légumes"
            width="800" 
            height="600"
          />
        </picture>
        <h1 className="image-overlay-title">Bienvenue chez Calm !</h1>
      </div>
    </header>
  );
}


export default Header;
