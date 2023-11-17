import React from "react";
import "./ImgSeason.css";


function ImgSeason (){
    return (
      <section className="section-img-season">
        <div className="img-container">
          <a
            href="https://www.instagram.com/p/CrOJxThIHHY/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source media="(min-width: 1025px)" srcSet="img/printemps.webp" />
              <source srcSet="img/printemps-mini.webp" />
              <img src="img/printemps-mini.webp" alt="Asperge mimosa" />
            </picture>
            <div className="season-text">
              Printemps : <br /> Asperge mimosa
            </div>
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.instagram.com/p/CuZOPEQoF4i/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source media="(min-width: 1025px)" srcSet="img/ete.webp" />
              <source srcSet="img/ete-mini.webp" />
              <img src="img/ete-mini.webp" alt="Nectarine au miel" />
            </picture>
            <div className="season-text">
              Été : <br /> Nectarine au miel
            </div>
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.instagram.com/p/Cy1MDaaBLLw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source media="(min-width: 1025px)" srcSet="img/automne.webp" />
              <source srcSet="img/automne-mini.webp" />
              <img src="img/automne-mini.webp" alt="Soupe de butternut" />
            </picture>
            <div className="season-text">
              Automne : <br /> Soupe de butternut
            </div>
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.instagram.com/p/CmHwI3GoQzC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source media="(min-width: 1025px)" srcSet="img/hiver.webp" />
              <source srcSet="img/hiver-mini.webp" />
              <img
                src="img/hiver-mini.webp"
                alt="Poulet à l'ail et au parmesan"
              />
            </picture>
            <div className="season-text">
              Hiver : <br /> Poulet à l'ail <br /> et au parmesan
            </div>
          </a>
        </div>
      </section>
    );
    
}

export default ImgSeason;
