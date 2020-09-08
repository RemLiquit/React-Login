import React from "react";

import "./style/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return (
      <html>
        <header>
          <Navbar />
        </header>
        <main>
          <section className="main-container">
            <section className="main-side">
              <div className="side-box">
                <p>Caja 1</p>
              </div>
              <div className="side-box">
                <p>Caja 2</p>
              </div>
              <div className="side-box">
                <p>Caja 3</p>
              </div>
              <div className="side-box">
                <p>Caja 4</p>
              </div>
            </section>
            <section className="main-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                tenetur quia aliquam iusto veniam? Illum doloribus rerum numquam
                exercitationem, officiis impedit et unde pariatur animi delectus
                sit, expedita enim autem.
              </p>
            </section>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </html>
    );
  }
}

export default Home;
