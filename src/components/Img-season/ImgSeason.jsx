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
            <img src="/printemps.png" alt="Asperge mimosa" />
            <div className="season-text">
              Printemps : <br />
              Asperge mimosa
            </div>
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.instagram.com/p/CuZOPEQoF4i/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ete.png" alt="Nectarine au miel" />
            <div className="season-text">
              Été : <br />
              Nectarine au miel
            </div>
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.instagram.com/p/Cy1MDaaBLLw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/automne.png" alt="Soupe de butternut" />
            <div className="season-text">
              Automne : <br />
              Soupe de butternut
            </div>
          </a>
        </div>
        <div className="img-container">
          <a
            href="https://www.instagram.com/p/CmHwI3GoQzC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/hiver.png" alt="Poulet à l'ail et au parmesan" />
            <div className="season-text">
              Hiver : <br />
              Poulet à l'ail <br />
              et au parmesan
            </div>
          </a>
        </div>
      </section>
    );
    
}

export default ImgSeason;
