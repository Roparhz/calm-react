import React from 'react';
import { useNavigate } from "react-router-dom";
import './PrivacyPolicy.css';

function PrivacyPolicy() {
    let navigate = useNavigate();
    
  return (
    <div className="privacy-policy">
      <h1>Politique de Confidentialité</h1>

      <p>
        La présente politique de confidentialité décrit les pratiques de CALM
        comme à la maison concernant la collecte et l'utilisation de vos données
        sur le site https://www.calm-restaurant.fr/.
      </p>

      <h2>Google Analytics</h2>
      <p>
        Nous utilisons Google Analytics, un service d'analyse web fourni par
        Google, Inc. ("Google"), pour comprendre comment nos visiteurs utilisent
        notre site. Google Analytics utilise des "cookies", qui sont des
        fichiers texte placés sur votre ordinateur, pour aider le site internet
        à analyser l'utilisation du site par ses utilisateurs. Les informations
        générées par les cookies concernant votre utilisation du site (y compris
        votre adresse IP) seront transmises et stockées par Google sur des
        serveurs situés aux États-Unis.
      </p>

      <h2>Cookies</h2>
      <p>
        Les cookies sont utilisés pour collecter des informations sur la manière
        dont vous interagissez avec notre site web et nous permettent de nous
        souvenir de vous. Nous utilisons ces informations afin d'améliorer et de
        personnaliser votre expérience de navigation et pour l'analytique et les
        métriques sur nos visiteurs à la fois sur ce site web et sur d'autres
        médias.
      </p>

      <h2>Refus du suivi</h2>
      <p>
        Vous pouvez refuser l'utilisation des cookies en sélectionnant les
        paramètres appropriés sur votre navigateur. Cependant, veuillez noter
        que si vous faites cela, vous ne pourrez peut-être pas utiliser toutes
        les fonctionnalités de ce site web. Vous pouvez également empêcher la
        collecte et l'utilisation des données par Google (cookies et adresse IP)
        en téléchargeant et en installant le plug-in de navigateur disponible
        sous{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tools.google.com/dlpage/gaoptout
        </a>
        .
      </p>

      <h2>Utilisation des données</h2>
      <p>
        Nous n'utilisons les informations collectées via Google Analytics que
        pour analyser et améliorer notre site web. Aucune donnée personnelle
        n'est collectée auprès des visiteurs de notre site web, car nous ne
        proposons pas de formulaire de contact, d'abonnement par e-mail ou de
        transactions en ligne.
      </p>

      <h2>Consentement</h2>
      <p>
        En utilisant notre site web, vous consentez à notre politique de
        confidentialité et acceptez ses termes.
      </p>

      <h2>Modifications de notre politique de confidentialité</h2>
      <p>
        Nous pouvons mettre à jour notre politique de confidentialité de temps à
        autre. Nous vous notifierons de toute modification en publiant la
        nouvelle politique de confidentialité sur cette page.
      </p>

      <h2>Nous contacter</h2>
      <p>
        Si vous avez des questions sur cette politique de confidentialité,
        veuillez nous contacter.
      </p>

      <button onClick={() => navigate(-1)}>Retour</button>
    </div>
  );
}

export default PrivacyPolicy;