import React from "react";

import "../components/style/main.css";

import small from "./image/Profile/small.jpg";
import medium from "./image/Profile/medium.jpg";
import large from "./image/Profile/large.jpg";

function Login() {
  return (
    <React.Fragment>
      <main>
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
              <button>Enter</button>
            </section>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Login;
