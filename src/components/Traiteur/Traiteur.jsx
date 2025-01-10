import React, { useState } from "react";
import "./Traiteur.css";


function Traiteur() {
    
     const slides = [
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-1/box1.1.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-1/box1.1-mini.webp" />
             <img
               src="img-traiteur/box-1/box1.1-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-1/box1.2.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-1/box1.2.webp" />
             <img src="img-traiteur/box-1/box1.2.webp" alt="Box apéritive" />
           </picture>
         ),
         legend: "Box apéritive",
       },
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-1/box1.3.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-1/box1.3-mini.webp" />
             <img
               src="img-traiteur/box-1/box1.3-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-1/box1.4.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-1/box1.4-mini.webp" />
             <img
               src="img-traiteur/box-1/box1.4-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-1/box1.5.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-1/box1.5-mini.webp" />
             <img
               src="img-traiteur/box-1/box1.5-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
     ];

    const slides2 = [
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-2/box2.3.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-2/box2.3-mini.webp" />
             <img
               src="img-traiteur/box-2/box2.3-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-2/box2.1.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-2/box2.1-mini.webp" />
             <img
               src="img-traiteur/box-2/box2.1-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-2/box2.2.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-2/box2.2-mini.webp" />
             <img
               src="img-traiteur/box-2/box2.2-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
       {
         content: (
           <picture>
             <source
               media="(min-width: 1025px)"
               srcSet="img-traiteur/box-2/box2.4.webp"
               width="800"
               height="600"
             />
             <source srcSet="img-traiteur/box-2/box2.4-mini.webp" />
             <img
               src="img-traiteur/box-2/box2.4-mini.webp"
               alt="Box apéritive"
             />
           </picture>
         ),
         legend: "Box apéritive",
       },
    ];

     const [currentIndex, setCurrentIndex] = useState(0);
     const [currentIndex2, setCurrentIndex2] = useState(0);

     const prevSlide = () => {
       setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? slides.length - 1 : prevIndex - 1
       );
     };

     const nextSlide = () => {
       setCurrentIndex((prevIndex) =>
         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
       );
     };

     const prevSlide2 = () => {
       setCurrentIndex2((prevIndex) =>
         prevIndex === 0 ? slides2.length - 1 : prevIndex - 1
       );
     };

     const nextSlide2 = () => {
       setCurrentIndex2((prevIndex) =>
         prevIndex === slides2.length - 1 ? 0 : prevIndex + 1
       );
     };

  return (
    <div>
      <h2 className="h2-box">
        Nouveau votre restaurant CALM vous propose 2 box apéritives !
      </h2>
      <p className="title-box">Box n°1</p>
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-content">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                {slide.content}
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="btn-prev">
            ❮
          </button>
          <button onClick={nextSlide} className="btn-next">
            ❯
          </button>
        </div>
        <div className="static-text">
          <p>
            Description : <br></br>
            <ul>
              <li>Muffin à la patate douce et curry</li>
              <li>Tartelette bleu et poires</li>
              <li>Pancake à la courge, crème de chèvre et viande de grison</li>
              <li>Toast d'avocat, crevettes marinées et poêlées</li>
              <li>Sablé au camembert et jambon cru</li>
            </ul>
          </p>
        </div>
      </div>

      <p className="title-box">Box n°2</p>
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-content">
            {slides2.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === currentIndex2 ? "active" : ""
                }`}
              >
                {slide.content}
              </div>
            ))}
          </div>
          <button onClick={prevSlide2} className="btn-prev">
            ❮
          </button>
          <button onClick={nextSlide2} className="btn-next">
            ❯
          </button>
        </div>
        <div className="static-text">
          <p>
            Description : <br></br>
            <ul>
              <li>Pain d'épices, fromage frais et magret fumé</li>
              <li>
                Gaufre de pommes de terre, crème citronnée et truite fumée
              </li>
              <li>Mousse de carottes et cumin, graines de courges torrefiées</li>
              <li>Croque-Monsieur au poulet et emmental</li>
              <li>Velouté de courge et crème de lard</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Traiteur;