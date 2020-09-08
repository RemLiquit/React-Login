import React from "react";

import "../components/style/main.css";
import { Link } from "react-router-dom";

import Home from "../pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

import small from "./image/Profile/small.jpg";
import medium from "./image/Profile/medium.jpg";
import large from "./image/Profile/large.jpg";

function Login() {
  return (
    <main className="main">
      <section className="container">
        <section className="main-container">
          <section className="main-image">
            <picture>
              <source media="(min-width: 1000px)" srcset={large} />
              <source media="(min-width: 720px)" srcset={medium} />
              <img src={small} alt="logo" />
            </picture>
          </section>
          <section className="main-input">
            <span>User</span>
            <input type="text" autoComplete="email" />
            <span>Password</span>
            <input type="text" autoComplete="Password" />
            <button>
              <Link to="/Home">Enter</Link>
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Login;
