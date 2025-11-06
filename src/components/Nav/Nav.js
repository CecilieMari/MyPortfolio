import React, { useState } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Cecilie - bare synlig på mobile */}
          <Link className={`${styles.navbarBrand} mx-auto d-lg-none`} to="/">
            Cecilie
          </Link>

          {/* Tom div for å balansere layout på mobile */}
          <div className="d-lg-none" style={{ width: "42px" }}></div>

          <div
            className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
            id="navbarNav"
          >
            {/* Venstre side linker */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/About"
                  onClick={() => setIsCollapsed(true)}
                >
                  Meg
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Web"
                  onClick={() => setIsCollapsed(true)}
                >
                  Web
                </Link>
              </li>
            </ul>

            {/* Cecilie - bare synlig på desktop */}
            <Link
              className={`${styles.navbarBrand} mx-auto d-none d-lg-block`}
              to="/"
            >
              Cecilie
            </Link>

            {/* Høyre side linker */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Kontakt"
                  onClick={() => setIsCollapsed(true)}
                >
                  Kontakt
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  Visuelle Øyeblikk
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Photo/høstTur"
                      onClick={() => setIsCollapsed(true)}
                    >
                      Høst Tur
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Photo/vietnamBilder"
                      onClick={() => setIsCollapsed(true)}
                    >
                      Vietnam
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
