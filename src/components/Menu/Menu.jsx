import React from "react";
import  "./Menu.css"
function Menu(){
    return (
      <section className="section-menu">
        <p className="p-menu">Menu de la semaine du 2 au 5 avril</p>
        <picture>
          <source media="(min-width: 1025px)" srcset="img/menu-02-04-24.webp" />
          <source srcset="img/menu-02-04-24-mini.webp" />
          <img
            src="img/menu-02-04-24-mini.webp"
            alt="Menu de la semaine du 2 avril 2024"
            className="menu"
            width="800"
            height="600"
          />
        </picture>
      </section>
    );

}

export default Menu;