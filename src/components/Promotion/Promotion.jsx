import React from "react";
import "./Promotion.css";
function Promotion() {
  return (
    <section className="section-promotion">
      <h2 className="h2-promotion">
        CALM vous propose un plat de saison sur commande uniquement !
      </h2>
      <picture>
        <source media="(min-width: 1025px)" srcset="img-promotion/promotion-19-01-24.webp" />
        <source srcset="img-promotion/promotion-19-01-24-mini.webp" />
        <img
          src="img-promotion/promotion-19-01-24.webp"
          alt="Promotion de la semaine du 19 janvier 2024"
          className="promotion"
          width="800"
          height="600"
        />
      </picture>
    </section>
  );
}

export default Promotion;
