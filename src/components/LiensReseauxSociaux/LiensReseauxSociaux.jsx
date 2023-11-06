import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./LiensReseauxSociaux.css"



function LiensReseauxSociaux() {
  return (
    <section className="liens-section">
      <div>
        <a href="https://www.facebook.com/search/top?q=calm.%20comme%20a%20la%20maison" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="fb-icon">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/calm.resto/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="is-icon">
          <FontAwesomeIcon icon={faInstagram} size="3x " />
        </a>
      </div>
    </section>
  );
}

export default LiensReseauxSociaux
