import React from "react";
import "./ImgSeason.css";


function ImgSeason (){
    return (
      <section className="section-img-season">
        <div className="img-container">
          <img src="/printemps.png" alt="Asperge mimosa" />
          <div className="season-text">
            Printemps : <br />
            Asperge mimosa
          </div>
        </div>
        <div className="img-container">
          <img src="/ete.png" alt="Nectarine au miel" />
          <div className="season-text">
            Été : <br />
            Nectarine au miel
          </div>
        </div>
        <div className="img-container">
          <img src="/automne.png" alt="Soupe de butternut" />
          <div className="season-text">
            Automne : <br />
            Soupe de butternut
          </div>
        </div>
        <div className="img-container">
          <img src="/hiver.png" alt="Poulet à l'ail et au parmesan" />
          <div className="season-text">
            Hiver : <br />
            Poulet à l'ail <br />
            et au parmesan
          </div>
        </div>
      </section>
    );
    
}

export default ImgSeason;
