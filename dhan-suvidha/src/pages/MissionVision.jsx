import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MissionVision.css";

class MissionVision extends Component {
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
              backgroundImage: `url(${require("../images/Invest.png")})`,
              backgroundRepeat: "no-repeat",
              backgroundSize:"contain",
            }}>
            </div>
            <div className="col-sm-6" >
              <h1 className="headerAbt" style={{fontFamily:"cursive"}}>OUR <br></br> VISION</h1>
              <p className="boxAbt">To be the market king in the segment of financial solution to individuals or groups by means of giving the best of industry service.</p>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <br></br><br></br>
          <div className="row">
            <div className="col-sm-1"></div>
           
            <div className="col-sm-6" >
              <h1 className="headerAbt" style={{fontFamily:"cursive"}}>OUR <br></br> MISSION</h1>
              <p className="boxAbt">A one stop roof where all the financial needs can be fulfilled as per the client need with the help of sophisticated technology.</p>
            </div>
            <div className="col-sm-4" style={{
              backgroundImage: `url(${require("../images/Mission.png")})`,
              backgroundRepeat: "no-repeat",
              backgroundSize:"contain",
            }}>
            </div>
            <div className="col-sm-1"></div>
          </div>
      </Container>
    );
  }
}

export default MissionVision;
