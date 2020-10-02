import React, { Component } from "react";
import "./FooterComponent.css";
import youtube from "../images/svg/youtube.svg";
import linkedin from "../images/svg/linkedin.svg";
import facebook from "../images/svg/facebook.svg";
import instagram from "../images/svg/instagram.svg";
import twitter from "../images/svg/twitter.svg";
class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div className="footerBox">
        <div className="footerDiv">
          <a className="footLink" href="#">
            About RayFintech
          </a>
          <a className="footLink" href="#">
            Mission & Vision
          </a>
          <a className="footLink" href="#">
            Our Services
          </a>

          <a className="footLink" href="#">
            Partners
          </a>

          <a className="footLink" href="#">
            Career
          </a>
        </div>
        <div className="footerDiv">
          <h5>Social</h5>
          <a href="https://facebook.com/Ray-Fintech-106560331168923/">
            <img className="social" src={facebook} alt="FB" />
          </a>
          <a href="">
            <img className="social" src={linkedin} alt="FB" />
          </a>
          <a href="">
            <img className="social" src={twitter} alt="FB" />
          </a>
        </div>
        <div className="footerDiv">
          <div>
            <h5>Address :</h5> <p> Sushant arcade Gurgaon 122009</p>
          </div>
          <div>
            MAP
            <p></p>
          </div>
          <div>Phone Number : +91 99991 97734</div>
          <div>Email : info@dhansuvidha.com</div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
