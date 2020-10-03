import React, { Component } from "react";
import "./HeaderComponent.css";
import logo from "../images/dhanSuvidhaLogo.png";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="mainHead">
          <nav
            className="navbar navbar-expand-sm navbar-light"
            style={{
              backgroundImage:
                "linear-gradient(to right, white,rgb(195,225,233) )",
            }}
          >
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="companyLogo navbar-brand "
              />
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarMenu" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a href="/aboutus" className="nav-link">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Financial Calculator
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Be our Partner
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className="panel panel-default"
          style={{
            borderBlockColor: "black",
            paddingBottom: "2em",
            backgroundImage:
              "linear-gradient(to right,rgb(195,225,233), white,rgb(195,225,233))",
          }}
        >
          <div className="panel-heading panel-heading-custom">
            <div className="panel-body">
              Globally Trusted Platform for Personal Financial Planning.
            </div>
          </div>
        </div>
      </div>
    );
  }
  click = () => {
    console.log("I am clicked!!!");
  };
}
export default HeaderComponent;
