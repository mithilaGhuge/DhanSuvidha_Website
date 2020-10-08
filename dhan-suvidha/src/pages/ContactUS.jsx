import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  ButtonGroup,InputGroup,FormControl
} from "react-bootstrap";
import "./ContactUS.css";
import contactImg from  "../images/cntImg.jpg";
import contactBuildImg from  "../images/contactBuild.png";

class ContactUS extends Component {
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
              <img style={{width:"100%",height:"200px",paddingBottom:"2em"}} src={contactImg} alt="conactImg"/>
          </div>
        <div className="row">
          <div className="col-sm-6">
            <h1 className="headerCnt">Speak with Our Investment Specialist!</h1>
            <br></br>
            <h2 style={{ color: "blue", fontSize: "1vw" }}>
              Please share your details.We assure to get back to you on
              priority.
            </h2>
            <br></br>
            <Form>
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
                  <Form.Control type="text" placeholder="Location" />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; I Am An&nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp;
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <Dropdown.Item eventKey="1">Investor</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Partner</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Shareholder
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">Institution</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Employee</Dropdown.Item>
                    <Dropdown.Item eventKey="6">Lender</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {<span>&nbsp;&nbsp; &nbsp;&nbsp;</span>}
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; I Want To
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <Dropdown.Item eventKey="1">Buy Shares</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Sell Shares</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Lend Money
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">
                      Other,please Specify
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                  </InputGroup.Prepend>
                  <FormControl as="textarea" aria-label="With textarea" placeholder="Message"/>
                </InputGroup>
              </Form.Group>
              <Form.Row>
            <Form.Group
              as={Row}
              id="formGridTermCheckbox"
              style={{ padding: "15px" }}
            >
              <Form.Check
                type="checkbox"
              />We accept the &nbsp;<a style={{textDecoration:"underline",color:"blue"}} href="/">  term and condition</a> &nbsp; and &nbsp;<a style={{textDecoration:"underline",color:"blue"}} href="/"> privacy policy.</a>
            </Form.Group>
          </Form.Row>
          <Button className="btn btn-block" variant="info" type="submit">
            Submit Enquiry
          </Button>
            </Form>
          </div>
          <div className="col-sm-6">
              <img style={{width:"100%",height:"100%"}} src={contactBuildImg} alt="conacBuildbImg"/>
          </div>
        </div>
        
      </Container>
    );
  }
}

export default ContactUS;
