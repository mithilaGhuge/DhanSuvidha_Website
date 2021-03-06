import React, { Component} from "react";
import "./HeaderComponent.css";
import logo from "../images/dhanSuvidhaLogo.png";
import LoginModel from "./LoginPage"
import { Button, ButtonToolbar } from "react-bootstrap";

class HeaderComponent extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state={addModelShow:false}
  }
  render() {
    let addModelClose=() => this.setState({addModelShow:false});
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
                  <a href="/partners" className="nav-link">
                    Be our Partner
                  </a>
                </li>
                <li className="nav-item">
                  <ButtonToolbar>
                    <Button
                      variant='info'
                      onClick={()=> this.setState({addModelShow:true})}
                      > Login
                    </Button>
                    <LoginModel
                    show={this.state.addModelShow}
                    onHide={addModelClose}
                    />
                  </ButtonToolbar>
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
               ONE STOP SOLUTION FOR FINANCIAL NEED
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default HeaderComponent;
