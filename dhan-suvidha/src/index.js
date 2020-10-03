import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";
import AboutUs from "./pages/AboutUs";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

let layout = (
  <div className="">
    <HeaderComponent />
    <hr />
    <Router>
      <Switch>
        <Route path="/" exact component={BodyComponent} />
        <Route path="/foot" component={FooterComponent} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </Router>
    <FooterComponent></FooterComponent>
  </div>
);

ReactDOM.render(layout, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
