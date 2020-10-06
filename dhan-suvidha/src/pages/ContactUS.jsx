import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactUS.css";
class ContactUS extends Component {
    state = {};
    render() {
        return (
            <Container fluid style={{
                backgroundImage: `url(${require("../images/background.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", paddingBottom: "2em", paddingTop: "2em"
            }}>
                <div className="boxContact" >
                    Address:434A,Block C, Sushant Lok Phase I, Gurugram <br></br>
                    Phone Number : +91 99991 97734<br></br>
                    Email : info@dhansuvidha.com
          </div>
            </Container>
        );
    }
}

export default ContactUS;
