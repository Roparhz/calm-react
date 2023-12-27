import React from "react";
import  "./Menu.css"
function Menu(){
    return (
      <section className="section-menu">
        <h2 className="h2-menu">Fermeture hivernale</h2>
        <p>
          Retour le mercredi 3 pour une nouvelle année !
        </p>
        {/* <picture>
          <source media="(min-width: 1025px)" srcset="img/menu-18-12-23.webp" />
          <source srcset="img/menu-18-12-23-mini.webp" />
          <img
            src="img/menu-18-12-23-mini.webp"
            alt="Menu de la semaine du 18 décembre 2023"
            className="menu"
            width="800"
            height="600"
          />
        </picture> */}
      </section>
    );

}

export default Menu