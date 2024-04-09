import React from "react";
import "./Hero.css"

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-p">
        <p> Mon restaurant offre une alternative aux actifs mais pas que !</p>
        <p>Avec une cuisine simple, éclectique et familiale</p>
        <strong className="strong-hero">"Comme A La Maison"</strong>
        <p>Le tout à emporter !</p>
      </div>
    </section>
  );
}

export default Hero;
