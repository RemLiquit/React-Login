import React from "react";

import login from "../components/login";
import "./style/pages.css";

class Home extends React.Component {
  render() {
    return (
      <html lang="en">
        <body>
          <header>
            <h1>Soy el header</h1>
          </header>
          <main></main>
          <footer>
            <p>soy el footer</p>
          </footer>
        </body>
      </html>
    );
  }
}

export default Home;
