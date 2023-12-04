import React from "react";
import { useNavigate } from "react-router-dom";
import "./LegalMentions.css";

function LegalMentions() {
  let navigate = useNavigate();

  return (
    <div className="legal-mentions">
      <h1>Mentions Légales</h1>
      <div className="container">
        <h2>Responsable de publication</h2>
        <p>Amélie Levêque</p>

        <h2>Coordonnées de l'éditeur</h2>
        <p>CALM comme à la maison <br />
        81 rue National <br />
        37250 Sorigny <br />
        06 74 54 85 07 <br />
        commealamaison.restaurant@gmail.com</p>

        <h2>Site internet créé et mis à jour par la société</h2>
        <p>Julien Levêque</p>

        <h2>Hébergement</h2>
        <p>O2switch <br />
        SAS au capital de 100 000€ <br />
        Siret 510 909 807 00032 <br />
        Siège social : Chemin des Pardiaux 63000 Clermont-Ferrand</p>

        <h2>Propriété</h2>
        <p>
          La structure générale, ainsi que les textes, images animées ou fixes,
          sons, dessins, graphismes et tous autres éléments composant le site
          sont de l’utilisation exclusive de l’éditeur. Toute représentation
          totale ou partielle de ce site, par quelques procédés que ce soient,
          sans autorisation expresse de l’éditeur, est interdite et
          constituerait une contrefaçon sanctionnée par les articles L335-2 et
          suivants du Code de la propriété intellectuelle. Les liens hypertextes
          mis en place dans le cadre du présent site internet en direction
          d’autres ressources présentes sur le réseau internet, ne sauraient
          engager la responsabilité de l’éditeur.
        </p>

        <h2>Acces au site</h2>
        <p>
          Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
          majeure, interruption programmée ou non et pouvant découlant d’une
          nécessité de maintenance. En cas de modification, interruption ou
          suspension du Site, l'Editeur ne saurait être tenu responsable.
        </p>

        <h2>Loi applicable</h2>
        <p>
          L’usage de ce site web est régi par la loi française à l’exception de
          toute autre législation.
        </p>
        <button onClick={() => navigate(-1)} className="btn-mention">Retour</button>
      </div>
    </div>
  );
}

export default LegalMentions;
