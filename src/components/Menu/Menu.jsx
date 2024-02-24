import React from "react";
import  "./Menu.css"
function Menu(){
    return (
      <section className="section-menu">
        <p className="p-menu">Menu du 26 février</p>
        <picture>
          <source media="(min-width: 1025px)" srcset="img/menu-26-02-24.webp" />
          <source srcset="img/menu-26-02-24-mini.webp" />
          <img
            src="img/menu-26-02-24-mini.webp"
            alt="Menu de la semaine du 26 février 2024"
            className="menu"
            width="800"
            height="600"
          />
        </picture>
      </section>
    );

}

export default Menu;