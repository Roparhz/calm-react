import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SideNav.css"

function SideNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["accueil", "menu", "img-season", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <button
        className={`menu-btn ${isNavOpen ? "open" : ""}`}
        onClick={toggleNav}
      >
        {isNavOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <div className={`side-nav ${isNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsNavOpen(false)}>
          <img
            src="img/Logo CALM.webp"
            alt="Logo du restaurant"
            className="logo-side-nav"
          />
        </Link>
        <a
          href="#accueil"
          className={activeSection === "accueil" ? "active" : ""}
          onClick={toggleNav}
        >
          Accueil
        </a>
        <a
          href="#menu"
          className={activeSection === "menu" ? "active" : ""}
          onClick={toggleNav}
        >
          Menu
        </a>
        <a
          href="#img-season"
          className={activeSection === "img-season" ? "active" : ""}
          onClick={toggleNav}
        >
          Les 4 saisons
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={toggleNav}
        >
          Contact
        </a>
        <Link to="/mentions-legales">Mentions Légales</Link>
        <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
      </div>
    </>
  );
}

export default SideNav;
