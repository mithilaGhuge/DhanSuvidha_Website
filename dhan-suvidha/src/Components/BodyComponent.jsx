import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import RegisterForm from "./RegistrationForm.jsx";
import "./BodyComponent.css";
import Book_Keeping from "./Book-Keeping/Book_Keeping"

class BodyComponent extends Component {
  state = {};

  render() {
    return (
      <Container fluid> 
        <div className="row">
          <div
            className="col-sm-8"
            style={{
              paddingTop: "50px",
              paddingLeft: "10vw",
              backgroundImage: `url(${require("../images/background.png")})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-4 box "><a className="anchor"  href="/Book_Keeping">Pre-IPO</a></div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">US $ Funds</a></div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">Loans</a></div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">UK Funds</a></div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">Real Estate</a></div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">Insurance</a></div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">PMS</a></div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">IT-Services</a></div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">Mutual Funds</a></div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box"><a className="anchor"  href="/Book_Keeping">Book Keeping</a></div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4"
            style={{
              backgroundImage:
                "linear-gradient(rgb(195,225,233) ,white ,rgb(195,225,233))",
            }}
          >
            <RegisterForm></RegisterForm>
          </div>
        </div>
        <div>
          <Row
            style={{
              paddingBottom: "2em",
              backgroundImage:
                "linear-gradient(to right, rgb(195,225,233),white,rgb(195,225,233))",
            }}
          ></Row>
        </div>
      </Container>
    );
  }
}

export default BodyComponent;
