import React from "react";
import  "./Menu.css"


function Menu(){
    return(
    <section className="section-menu">
        <picture>
            <source media="(min-width: 1025px)" srcset="img/menu-13-11-23.webp" />
            <source srcset="img/menu-13-11-23-mini.webp" />
            <img src="img/menu-13-11-23-mini.webp" alt="Menu de la semaine du 13 novembre 2023" className="menu"/>
        </picture>
    </section>
    )

}

export default Menu