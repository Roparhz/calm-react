import React from "react";
import  "./Menu.css"
function Menu(){
    return (
      <section className="section-menu">
        <h2 className="h2-menu">"Semaine de l'avent"</h2>
        {/* <p>
          les plats que vous avez le plus apprécié durant cette saison regroupé
          en un seul menu !
        </p> */}
        <picture>
          <source media="(min-width: 1025px)" srcset="img/menu-18-12-23.webp" />
          <source srcset="img/menu-18-12-23-mini.webp" />
          <img
            src="img/menu-18-12-23-mini.webp"
            alt="Menu de la semaine du 18 décembre 2023"
            className="menu"
            width="800"
            height="600"
          />
        </picture>
      </section>
    );

}

export default Menu