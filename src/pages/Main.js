import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Main extends React.Component {
  render() {
    return (
      <html>
        <header>
          <Navbar />
        </header>
        <main></main>
        <footer>
          <Footer />
        </footer>
      </html>
    );
  }
}

export default Main;
