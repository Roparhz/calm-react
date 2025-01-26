import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Promotion from "./components/Promotion/Promotion";
import StValentin from "./components/StValentin/StValentin";
import Traiteur from "./components/Traiteur/Traiteur";
import Menu from "./components/Menu/Menu";
import ImgSeason from "./components/Img-season/ImgSeason";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import LegalMentions from "./components/LegalMentions/LegalMentions";
import PrivacyPolicy from "./components/Privacypolicy/PrivacyPolicy";
import LoginPage from "./components/LoginPage/LoginPage";
import Admin from "./components/Admin/AdminPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import "./css/helpers.css";
import "./css/reset.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []);

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <Router>
      <div className="App">
        <SideNav />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="accueil" className="section">
                    <Header />
                    <Hero />
                  </div>
                  {/* <div id="promotion">
                    <Promotion /> 
                  </div> */}
                  <div id="st-valentin">
                    <StValentin />
                  </div>
                  <div id="traiteur">
                    <Traiteur />
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
                </>
              }
            />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route
              path="/politique-de-confidentialite"
              element={<PrivacyPolicy />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
