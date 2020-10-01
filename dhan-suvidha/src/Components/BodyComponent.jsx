import React, { Component } from "react";
import { Container, Row, Col, Form, Card, CardColumns, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from "./RegistrationForm.jsx"
import "./BodyComponent.css";


class BodyComponent extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <div className="split left">
          <Container style={{padding:"20px"}}>
            <Container>
              <Row>
                <CardColumns className="container">
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>Pre-IPO</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>US $ Funds</Card.Text>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </Row>
            </Container>
            <Container>
              <Row>
                <CardColumns className="container" >
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>Loans</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>UK Funds</Card.Text>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </Row>
            </Container>
            <Container>
              <Row>
                <CardColumns className="container" >
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>Real Estate</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>Insurance</Card.Text>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </Row>
            </Container>
            <Container>
              <Row>
                <CardColumns className="container" >
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>PMS</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>IT Services</Card.Text>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </Row>
            </Container>
            <Container>
              <Row>
                <CardColumns className="container" >
                  <Card className="card">
                    <Card.Body>
                      <Card.Text>Mutual Funds</Card.Text>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </Row>
            </Container>
          </Container>
        </div>

        <Container>
          <div className="split right">
          <RegisterForm></RegisterForm>

          </div>
        </Container>


      </Container>


    );
  }
}

export default BodyComponent;
