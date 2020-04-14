import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../src/Components/Dashboard";
import ShoppingCart from "../src/Containers/ShoppingCart";
import Header from "../src/Containers/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/shopping-cart" component={ShoppingCart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
