import React from "react";
import "./Header.css";
import Logo from "../../img/logo.jpeg";

function Header() {
  return (
    <>
      <div className="header-container">
        <div class="navbar">
          <button class="hamburger-button" id="hamburgerBtn">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <nav class="nav-menu" id="navMenu">
            <div className="links">
              <a href="#">Inmuebles</a>
              <a href="#">Blog</a>
              <a href="#">Nosotros</a>
              <a href="#">Ayuda</a>
            </div>
          </nav>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <a href="#">Inmuebles</a>
          <a href="#">Blog</a>
          <a href="#">Nosotros</a>
          <a href="#">Ayuda</a>
        </div>
        <div className="acceder">
          <input type="button" value="Acceder" />
        </div>
      </div>
    </>
  );
}

export default Header;
