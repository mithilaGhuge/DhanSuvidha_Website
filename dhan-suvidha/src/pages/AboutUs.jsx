import React, { Component } from "react";
import "./AboutUs.css";

var sectionStyle = {
  backgroundImage: `url(${require("../images/background.png")})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width:"auto",
  hight:"auto"
};

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div style={{ paddingBottom: "2em", backgroundImage: "linear-gradient(to right, rgb(195,225,233),white,rgb(195,225,233))" }}>
        <section style={sectionStyle}>
          <h1 className="headerAbt">About Us</h1>
          <div className="container" style={{paddingLeft:"10%",paddingBottom:"2em"}}>
          <p className="boxAbt">	A different industry expert comes together for a common objective to serve the client on the single platform where they can have all the solutions related to finance.
          <br></br>
          <br></br>
          Clients understand the diversification and thus the reason they tend to sign-up on the various portals for various products, which leads to having an account on multiple portals for multiple purposes.
          <br></br>
          <br></br>

           We @ DHANSUVIDHA created a portal where all the solutions related to finance can be solved under one roof as  DHAN stands for  “MONEY” and  SUVIDHA stands for “SOLUTION”.<br></br> <br></br>
          We wanted to bring sophisticated technology to our client for fin solution related to INVESTMENT, LOANS, INSURANCE, CREDIT CARD AND PORTFOLIO MANAGEMENT SERVICE.<br></br><br></br>
          We founding partner carried 30+ years of experience collectively and raised over 1000+core into Indian financial market under various products.</p>
          
          </div>
        </section>
      </div>

    );
  }
}

export default AboutUs;
