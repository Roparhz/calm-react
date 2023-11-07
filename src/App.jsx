import React from "react";
import SideNav from "./components/SideNav/SideNav"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import ImgSeason from "./components/Img-season/ImgSeason";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./css/helpers.css";
import "./css/reset.css";

function App() {
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
