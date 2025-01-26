import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./SideNav.css"

function SideNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["accueil", "menu", "img-season", "contact", 'traiteur'];  
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

    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setActiveSection(null);
    window.location.href = "/";
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
        {/* <a
          href="#promotion"
          className={activeSection === "promotion" ? "active" : ""}
          onClick={toggleNav}
        >
          Offre du moment
        </a> */}
        <a
          href="#st-valentin"
          onClick={toggleNav}
          className={activeSection === "stValentin" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#f40101" }}
          />
        </a>
        <a
          href="#traiteur"
          onClick={toggleNav}
          className={activeSection === "traiteur" ? "active" : ""}
        >
          <button class="uiverse">
            <div class="wrapper">
              <span>NOUVEAU</span>
              <div class="circle circle-12"></div>
              <div class="circle circle-11"></div>
              <div class="circle circle-10"></div>
              <div class="circle circle-9"></div>
              <div class="circle circle-8"></div>
              <div class="circle circle-7"></div>
              <div class="circle circle-6"></div>
              <div class="circle circle-5"></div>
              <div class="circle circle-4"></div>
              <div class="circle circle-3"></div>
              <div class="circle circle-2"></div>
              <div class="circle circle-1"></div>
            </div>
          </button>
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
        <Link to="/politique-de-confidentialite">
          Politique de confidentialité
        </Link>
        {/* {isLoggedIn ? (
          <button onClick={handleLogout}>Déconnexion</button>
        ) : (
          <Link to="/login" onClick={() => setIsNavOpen(false)}>
            Connexion admin
          </Link>
        )} */}
      </div>
    </>
  );
}

export default SideNav;
