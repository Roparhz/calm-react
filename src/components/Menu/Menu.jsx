import React from "react";
import  "./Menu.css"
function Menu(){
    return (
      <section className="section-menu">
        <h2 className="h2-menu">
          CALM vous souhaite une très belle année 2024 !
        </h2>
        <p className="p-menu">Menu du 3 au 12 janvier</p>
        <picture>
          <source media="(min-width: 1025px)" srcset="img/menu-03-01-24.webp" />
          <source srcset="img/menu-03-01-24-mini.webp" />
          <img
            src="img/menu-03-01-24-mini.webp"
            alt="Menu de la semaine du 03 janvier 2024"
            className="menu"
            width="800"
            height="600"
          />
        </picture>
      </section>
    );

}

export default Menu;