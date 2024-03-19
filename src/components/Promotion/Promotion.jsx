import React from "react";
import "./Promotion.css";
function Promotion() {
  return (
    <section className="section-promotion">
      <h2 className="h2-promotion">
        CALM vous propose un plat sur commande uniquement !
      </h2>
      <picture>
        <source media="(min-width: 1025px)" srcset="img-promotion/promotion-30-03-24.webp" />
        <source srcset="img-promotion/promotion-30-03-24-mini.webp" />
        <img
          src="img-promotion/promotion-30-03-24.webp"
          alt="Menu de Paques"
          className="promotion"
          width="800"
          height="600"
        />
      </picture>
    </section>
  );
}

export default Promotion;
