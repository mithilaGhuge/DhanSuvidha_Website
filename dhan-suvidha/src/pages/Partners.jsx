import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Partners extends Component {
    state = {};
    render() {
        return (
            <Container fluid style={{
                backgroundImage: `url(${require("../images/background.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", paddingBottom: "2em", paddingTop: "2em"
            }}>
                    <div className="col-sm-10" style={{
                        width:"100%",
                        hight:"500%",
                        backgroundImage: `url(${require("../images/be-our-partner.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain", paddingBottom: "2em", paddingTop: "2em"
                    }}>
                </div>
            </Container>
        );
    }
}

export default Partners;
