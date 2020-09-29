import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

let layout = (
  <div className="">
    <div className="">
      <HeaderComponent />
    </div>
    <hr />
    <div className="container-fluid">
      <BodyComponent></BodyComponent>
    </div>
    <div className="container-fluid">
      Insert footer component here
      <FooterComponent></FooterComponent>
    </div>
  </div>
);

ReactDOM.render(layout, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
