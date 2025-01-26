import React from "react";
import  "./Menu.css"
function Menu(){
    return (
      <section className="section-menu">
        <p className="p-menu">****<br></br>CALM vous souhaite une très bonne année 2025 !<br></br>****</p>
        <p className="p-menu">Menu de la semaine du 27 Janvier</p>
        <picture>
          <source media="(min-width: 1025px)" srcSet="img/menu-27-01-25.webp" />
          <source srcSet="img/menu-27-01-25-mini.webp" />
          <source srcSet="img/congès-mini.webp" />
          <img
            src="img/menu-27-01-25-mini.webp"
            alt="Menu de la semaine du 27 janvier 2025"
            className="menu"
            width="800"
            height="600"
          />
        </picture>
      </section>
    );
}

export default Menu;