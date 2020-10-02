import React, { Component } from "react";
import "./HeaderComponent.css";
import logo from "../images/dhanSuvidhaLogo.png";
import { Container, Row } from "react-bootstrap";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light ">
          <a href="/">
            <img src={logo} alt="logo" className="companyLogo navbar-brand " />
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
                <a href="#" className="nav-link">
                  <strong className="text">Financial Calculator</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <strong className="text">Be our Partner</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <strong className="text">Login</strong>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className="panel panel-default"
          style={{ borderBlockColor: "black" }}
        >
          <div class="panel-heading panel-heading-custom">
            <div className="panel-body">
              Globally Trusted Platform for Personal Financial Planning
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderComponent;
