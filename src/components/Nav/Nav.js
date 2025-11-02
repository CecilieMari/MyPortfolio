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

          <div
            className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
            id="navbarNav"
          >
            {/* Venstre side linker */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setIsCollapsed(true)}
                >
                  Meg
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/About"
                  onClick={() => setIsCollapsed(true)}
                >
                  Web
                </Link>
              </li>
            </ul>

            {/* Midten - Cecilie */}
            <Link className={`${styles.navbarBrand} mx-auto`} to="/">
              Cecilie
            </Link>

            {/* Høyre side linker */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Portfolio"
                  onClick={() => setIsCollapsed(true)}
                >
                  Kontakt
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Natur"
                  onClick={() => setIsCollapsed(true)}
                >
                  Visuelle Øyeblikk
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
