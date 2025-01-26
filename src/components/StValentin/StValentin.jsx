import React from "react";
import "./StValentin.css";

function StValentin() {
    return (
      <div className="StValentin">
        <h2 className="h2-valentin">St Valentin</h2>
        <p className="p-valentin">
          Pour la Saint Valentin CALM vouis propose au choix : <br></br>
          Un menu pour 2 personnes à 50€ <br></br>
          Une box à partager à 60€ <br></br>
        </p>
        <picture className="img-stvalentin">
          <source
            media="(min-width: 1025px)"
            srcSet="img/menu-stvalentin.webp"
            width="800"
            height="600"
          />
          <source srcSet="img/menu-stvalentin-mini.webp" />
          <img src="img/menu-stvalentin-mini.webp" alt="Menu St Valentin" />
        </picture>
        <picture className="img-stvalentin">
          <source
            media="(min-width: 1025px)"
            srcSet="img/box-stvalentin.webp"
            width="800"
            height="600"
          />
          <source srcSet="img/box-stvalentin-mini.webp" />
          <img src="img/box-stvalentin-mini.webp" alt="Box St Valentin" />
        </picture>
      </div>
    );
    }

export default StValentin;
