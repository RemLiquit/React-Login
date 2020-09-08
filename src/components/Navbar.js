import React from "react";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Main from "../pages/Main";

import "./style/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="hero">
      <section className="navbar">
        <section className="navbar-title">
          <span>Pagina </span>
          <span className="span2">Principal</span>
        </section>
        <section className="navbar-items">
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Main">Main</Link>
            </li>
          </ul>
        </section>
      </section>
    </header>
  );
}

export default Navbar;
