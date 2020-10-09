import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import prtImg from "../images/partner.jpg";
import "./ContactUS.css";
import "./partner.css";
import growImg from "../images/growImg.png"

class Partners extends Component {
  state = {};
  render() {
    return (
      <Container
        fluid
        style={{
          backgroundImage: `url(${require("../images/background.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingBottom: "2em",
        }}
      >
        <div className="row">
          <img
            style={{ width: "100%", hight: "2px", paddingBottom: "1em" }}
            src={prtImg}
            alt="prtImg"
          ></img>
        </div>
        <div className="row">
          <h1
            className="headerCnt"
            style={{
              textAlign: "center",
              paddingLeft: "12em",
              paddingBottom: "1em",
            }}
          >
            {" "}
            Join Our Network Choose from our Product Offerings
          </h1>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="row">
              <Button className="dropdownMenu">
                Domestic Pre-IPO and Unlisted Stock
              </Button>{" "}
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Insurance
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Health Insurance</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Life Insurance</Dropdown.Item>
                  <Dropdown.Item eventKey="3">General INsurance</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup} className="dropdownMenu">
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Domestic Real Estate India
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Mumbai</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Delhi NCR</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Kolkata</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Chennai</Dropdown.Item>
                  <Dropdown.Item eventKey="5">Banglore</Dropdown.Item>
                  <Dropdown.Item eventKey="6">Hydrabad</Dropdown.Item>
                  <Dropdown.Item eventKey="7">Ahemdabad</Dropdown.Item>
                  <Dropdown.Item eventKey="8">Pune</Dropdown.Item>
                  <Dropdown.Item eventKey="9">Jaipur</Dropdown.Item>
                  <Dropdown.Item eventKey="10">Chandigarh</Dropdown.Item>
                  <Dropdown.Item eventKey="11">Ludhiana</Dropdown.Item>
                  <Dropdown.Item eventKey="12">Kanpur</Dropdown.Item>
                  <Dropdown.Item eventKey="13">Lucknow</Dropdown.Item>
                  <Dropdown.Item eventKey="14">Goa</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <br></br>
            <div className="row">
              <Button className="dropdownMenu">
                International Pre-IPO and Unlisted Stock
              </Button>{" "}
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Mutual Funds
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">
                    Domestic Mutual Funds
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    International Mutual Funds
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup} className="dropdownMenu">
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Fractional Real Estate India
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">
                    Commercial Real Estate
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Warehouse</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Holiday Homess</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <br></br>
            <div className="row">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  International Listed Enquities
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">US Listed Stocks</Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    S Exchange Traded Funds
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Loans
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Home Loans</Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    Loan Against Property
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">Vehical Loan</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Personal Loans</Dropdown.Item>
                  <Dropdown.Item eventKey="5">Business Loans</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup} className="dropdownMenu">
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Real Estate Funds
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">
                    UK Real Estate Funds
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    US Real Estate Funds{" "}
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Indian Real Estate Funds
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <br></br>
            <div className="row">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Taxation & Compliance{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Tax Filling</Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    Foreign Income Tax Filling
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Accounting Services
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4">GST Services</Dropdown.Item>
                  <Dropdown.Item eventKey="5">Company Formation</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Blue International Real Estate Funds
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">
                    United Arab Emirates
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Canada</Dropdown.Item>
                  <Dropdown.Item eventKey="3">United Kingdom</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Greece</Dropdown.Item>
                  <Dropdown.Item eventKey="5">Europe</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
              <Dropdown as={ButtonGroup} className="dropdownMenu">
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  PR & Citizenship by investment
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">USA (EB-5)</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Canada </Dropdown.Item>
                  <Dropdown.Item eventKey="3">United Kingdom</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <br></br>
            <div className="row">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  className="dropdownMenu"
                >
                  Information Technology{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors"></Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="row">
          <h2
            className="headerCnt"
            style={{ paddingLeft: "11em", paddingTop: "1em" }}
          >
            Please Provide your details. Our Team will get back to you
          </h2>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-6">
            <Form style={{ paddingLeft: "2em",paddingTop:"3em" }} className="input-lg">
              <Form.Row>
                <Form.Group as={Col} controlId="contactGridName">
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="controlridMobile Number">
                  <Form.Control type="tel" placeholder="Mobile Number" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="contolridEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="controlGridLoc">
                  <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="contolridEmail">
                  <Form.Control type="text" placeholder="Address 1" />
                </Form.Group>

                <Form.Group as={Col} controlId="controlGridLoc">
                  <Form.Control type="text" placeholder="Address 2" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="contolridEmail">
                  <Form.Control type="date" placeholder="Date of Birth" />
                </Form.Group>

                <Form.Group as={Col} controlId="controlGridLoc">
                  <Form.Control
                    type="text"
                    placeholder="Preffered Location of Business"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="contolridEmail">
                  <Form.Control
                    type="text"
                    placeholder="Product You are currently Dealing in"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="controlGridLoc">
                  <Form.Control
                    type="text"
                    placeholder="How do you Hear About us?"
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </div>
          <div className="col-sm-6 ">
            <img className="growImg" src={growImg} alt="growImg"/>
          </div>
        </div>
      </Container>
    );
  }
}

export default Partners;
