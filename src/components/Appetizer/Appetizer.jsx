import React, { useState } from "react";
import "./appetizer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

function Appetizer(){
  const images = [
  "appetizers-img/traiteur-1.webp",
  "appetizers-img/traiteur-2.webp",
  "appetizers-img/traiteur-3.webp",
  "appetizers-img/traiteur-4.webp",
  "appetizers-img/traiteur-5.webp",
  "appetizers-img/traiteur-6.webp",
  "appetizers-img/traiteur-7.webp",
  "appetizers-img/traiteur-8.webp",
];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? images.length - 1 : current - 1);
    };


    return (
      <section className="appetizer-section slider-1">
        <div className="slider">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Traiteur ${index + 1}`}
              width="400"
              height="600"
              style={{ display: index === current ? "block" : "none" }}
            />
          ))}
        </div>
        <div className="btn">
          <button onClick={prevSlide} className="icon-btn">
            <FontAwesomeIcon icon={faArrowLeftLong} size="2xl" />
          </button>
          <button onClick={nextSlide} className="icon-btn">
            <FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
          </button>
        </div>
      </section>
    );
}

export default Appetizer;