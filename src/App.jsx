import React, { useState, useEffect } from "react";
import SideNav from "./components/SideNav/SideNav"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import ImgSeason from "./components/Img-season/ImgSeason";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import "./App.css";
import "./css/helpers.css";
import "./css/reset.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <div className="App">
      <SideNav />
      <div className="content">
        <div id="accueil" className="section">
          <Header />
          <Hero />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="img-season">
          <ImgSeason />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
