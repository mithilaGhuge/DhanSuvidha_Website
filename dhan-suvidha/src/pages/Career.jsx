import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

class Career extends Component {
  state = {};
  render() {
    return (
      <Container fluid style={{
        backgroundImage: `url(${require("../images/background.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", paddingBottom: "2em", paddingTop: "2em"
      }}>
          <div> Will Update Opening Soon<br></br><br></br>
          Thank you for showing Intrest.
          </div>
      </Container>
    );
  }
}

export default Career;
