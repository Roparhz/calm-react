import React from "react";
import LiensReseauxSociaux from "../LiensReseauxSociaux/LiensReseauxSociaux";
import Contact from "../contact/Contact";
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <Contact />
      <LiensReseauxSociaux />
    </footer>
  );
}

export default Footer;
