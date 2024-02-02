import React from "react";
import "./Promotion.css";
function Promotion() {
  return (
    <section className="section-promotion">
      <h2 className="h2-promotion">
        CALM vous propose un plat de la St Valentin sur commande uniquement !
      </h2>
      <picture>
        <source media="(min-width: 1025px)" srcset="img-promotion/menu-st-valentin.webp" />
        <source srcset="img-promotion/menu-st-valentin-mini.webp" />
        <img
          src="img-promotion/menu-st-valentin.webp"
          alt="Menu de la St Valentin"
          className="promotion"
          width="800"
          height="600"
        />
      </picture>
    </section>
  );
}

export default Promotion;
