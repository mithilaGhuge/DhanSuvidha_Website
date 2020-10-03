import React, { Component } from "react";
import "./FooterComponent.css";
import linkedin from "../images/svg/linkedin.svg";
import facebook from "../images/svg/facebook.svg";
import twitter from "../images/svg/twitter.svg";
class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div className="footerBox">
        <div className="footerDiv">
          <a className="footLink" href="/">
            About RayFintech
          </a>
          <a className="footLink" href="/">
            Mission & Vision
          </a>
          <a className="footLink" href="/">
            Our Services
          </a>

          <a className="footLink" href="/">
            Partners
          </a>

          <a className="footLink" href="/">
            Career
          </a>
        </div>
        <div className="footerDiv">
          <h5>Social</h5>
          <a href="https://facebook.com/Ray-Fintech-106560331168923/">
            <img className="social" src={facebook} alt="FB" />
          </a>
          <a href="/">
            <img className="social" src={linkedin} alt="FB" />
          </a>
          <a href="/">
            <img className="social" src={twitter} alt="FB" />
          </a>
        </div>
        <div className="footerDiv">
          <div>
            <h5>Address :</h5> <p> Sushant arcade Gurgaon 122009</p>
          </div>
          <div class="gmap_canvas">
            <iframe src="https://maps.google.com/maps?q=Sushant%20arcade%20Gurgaon&t=&z=11&ie=UTF8&iwloc=&output=embed" />
          </div>
          <div style={{ paddingTop: "0.3em" }}>
            Phone Number : +91 99991 97734
          </div>
          <div>Email : info@dhansuvidha.com</div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
