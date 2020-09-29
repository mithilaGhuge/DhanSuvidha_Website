import React, { Component } from "react";
import "./HeaderComponent.css";
import logo from "../images/brandNameLogoWhite.png";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light ">
          <img src={logo} alt="logo" className="companyLogo navbar-brand " />
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
                <a href="#" className="nav-link">
                  Financial Calculator
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Be our Partner
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  SignUp/Signin
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  click = () => {
    console.log("I am clicked!!!");
  };
}
export default HeaderComponent;
