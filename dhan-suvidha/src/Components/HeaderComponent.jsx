import React, { Component } from "react";
import logo from "../images/brandNameLogoWhite.png";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <img src={logo} alt="LOGO" />
        </div>
        <span className="col-md-7"></span>
        <span className="col-md-1 ">financial calculator</span>
        <span className="col-md-1 ">Be our Partner</span>
        <span className="col-md-1 ">SignUp/SignIn</span>
      </div>
    );
  }
}
export default HeaderComponent;
