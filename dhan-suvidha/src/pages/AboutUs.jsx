import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <Container fluid style={{
        backgroundImage: `url(${require("../images/background.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", paddingBottom: "2em", paddingTop: "2em"
      }}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-4" style={{
              backgroundImage: `url(${require("../images/Ruppe.png")})`,
              backgroundRepeat: "no-repeat",
              backgroundSize:"contain",
            }}>
            </div>
            <div className="col-sm-6" >
              <h1 className="headerAbt" style={{fontFamily:"cursive"}}>OUR <br></br> COMPANY</h1>
              <p className="boxAbt">	A different industry expert comes together for a common objective to serve the client on the single platform where they can have all the solutions related to finance.
                <br></br><br></br>
                Clients understand the diversification and thus the reason they tend to sign-up on the various portals for various products, which leads to having an account on multiple portals for multiple purposes.
                <br></br><br></br>
                We @DHANSUVIDHA created a portal where all the solutions related to finance can be solved under one roof as  DHAN stands for  “MONEY” and  SUVIDHA stands for “SOLUTION”.<br></br> <br></br>
                We wanted to bring sophisticated technology to our client for fin solution related to INVESTMENT, LOANS, INSURANCE, CREDIT CARD AND PORTFOLIO MANAGEMENT SERVICE.<br></br><br></br>
                We founding partner carried 30+ years of experience collectively and raised over 1000+core into Indian financial market under various products.</p>
            </div>
            <div className="col-sm-1"></div>
          </div>
      </Container>
    );
  }
}

export default AboutUs;
