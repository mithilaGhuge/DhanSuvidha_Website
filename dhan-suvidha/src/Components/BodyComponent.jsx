import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  CardColumns,
  Button,
} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./RegistrationForm.jsx";
import "./BodyComponent.css";
import background from "../images/background.png";

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
                <div className="col-sm-4 box">Pre-IPO</div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box">US $ Funds</div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box">Loans</div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box">UK Funds</div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box">Real Estate</div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box">Insurance</div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box">PMS</div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box">IT-Services</div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-4 box">Mutual Funds</div>
                <div className="col-sm-2"></div>
                <br></br>
                <div className="col-sm-4 box">Book Keeping</div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4"
            style={{backgroundImage:"linear-gradient(rgb(195,225,233) ,white ,rgb(195,225,233))"}}
          >
            <RegisterForm></RegisterForm>
          </div>
        </div>
          <div>
            <Row style={{paddingBottom:"2em",backgroundImage:"linear-gradient(to right, rgb(195,225,233),white,rgb(195,225,233))"}}></Row>
          </div>
        
      </Container>
     
    );
  }
}

export default BodyComponent;
