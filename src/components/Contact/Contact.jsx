import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <section className="contact-section">
      <div>
        <h2>Coordonnées</h2>
        <p>
          <strong>Adresse :</strong> 81 Rue Nationale, 37250, Sorigny
        </p>
        <p>
          <strong>Téléphone :</strong> 06.74.54.85.07
        </p>
        <p>
          <strong>Email :</strong> commealamaison.restaurant@gmail.com
        </p>
      </div>

      <div>
        <h2>Horaires d'ouverture</h2>
        <p>Du lundi au vendredi</p>
        <p>de 12h à 15h</p>
        <p>de 16h30 à 19h30</p>
      </div>
    </section>
  );
}

export default Contact;
