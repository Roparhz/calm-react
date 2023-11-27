import React, { useState, useEffect } from "react";
import "./appetizer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

function Appetizer(){
  const images = [
  { src: "appetizers-img/traiteur-1.webp", srcMini: "appetizers-img/traiteur-1-mini.webp" },
  { src: "appetizers-img/traiteur-2.webp", srcMini: "appetizers-img/traiteur-2-mini.webp" },
  { src: "appetizers-img/traiteur-3.webp", srcMini: "appetizers-img/traiteur-3-mini.webp" },
  { src: "appetizers-img/traiteur-4.webp", srcMini: "appetizers-img/traiteur-4-mini.webp" },
  { src: "appetizers-img/traiteur-5.webp", srcMini: "appetizers-img/traiteur-5-mini.webp" },
  { src: "appetizers-img/traiteur-6.webp", srcMini: "appetizers-img/traiteur-6-mini.webp" },
  { src: "appetizers-img/traiteur-7.webp", srcMini: "appetizers-img/traiteur-7-mini.webp" },
  { src: "appetizers-img/traiteur-8.webp", srcMini: "appetizers-img/traiteur-8-mini.webp" },
];
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? images.length - 1 : current - 1);
    };



    return (
      <section className="appetizer-section slider-1">
        <div className="slider">
          {images.map((image, index) => (
            <picture
              key={index}
              style={{ display: isMobile || index === current ? "block" : "none" }}
            >
              <source media="(min-width: 769px)" srcSet={image.src} />
              <source media="(max-width: 768px)" srcSet={image.srcMini} />
              <img
                src={image.src}
                alt="Divers petits fours"
                width="400"
                height="600"
              />
            </picture>
          ))}
        </div>
        {!isMobile && (
          <div className="btn">
            <button onClick={prevSlide} className="icon-btn">
              <FontAwesomeIcon icon={faArrowLeftLong} size="2xl" />
            </button>
            <button onClick={nextSlide} className="icon-btn">
              <FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
            </button>
          </div>
        )}
        {/* <div className="btn">
          <button onClick={prevSlide} className="icon-btn">
            <FontAwesomeIcon icon={faArrowLeftLong} size="2xl" />
          </button>
          <button onClick={nextSlide} className="icon-btn">
            <FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
          </button>
        </div> */}
      </section>
    );
}

export default Appetizer;