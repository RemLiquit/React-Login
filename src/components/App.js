import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "../components/Layout";
import login from "../pages/Login";
import Home from "../pages/Home";
import Main from "../pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Main" component={Main} />
    </BrowserRouter>
  );
}

export default App;
