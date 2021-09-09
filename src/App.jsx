import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Registered from "./components/Registered";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Zocket">
            <HomePage />
          </Route>
          <Route path="/Zocket/:id" children={<Registered />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
