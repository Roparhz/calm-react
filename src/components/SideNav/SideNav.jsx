import React from "react";
import "./SideNav.css"

function SideNav() {
  return (
    <div className="side-nav">
      <img src="/Logo CALM.jpg" alt="Logo du restaurant" className="logo-side-nav" />
      <a href="#accueil">Accueil</a>
      <a href="#menu">Menu</a>
      <a href="#img-season">Les 4 saisons</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default SideNav;
