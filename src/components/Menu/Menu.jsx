import React from "react";
import  "./Menu.css"
function Menu(){
    return (
      <section className="section-menu">
        <p className="p-menu">Menu de la semaine du 15 au 19 avril</p>
        <picture>
          <source media="(min-width: 1025px)" srcSet="img/menu-15-04-24.webp" />
          <source srcSet="img/menu-15-04-24-mini.webp" />
          <img
            src="img/menu-15-04-24-mini.webp"
            alt="Menu de la semaine du 15 avril 2024"
            className="menu"
            width="800"
            height="600"
          />
        </picture>
      </section>
    );

}

export default Menu;