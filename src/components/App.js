import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import login from "../components/login";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/login" component={login} />
    </BrowserRouter>
  );
}

export default App;
