import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ourService.css";

class ourService extends Component {
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
                        backgroundImage: `url(${require("../images/CreditC.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-6" style={{ paddingLeft: "2em" }} >
                        <h1 className="headerServ" style={{ fontFamily: "cursive" }}>Why DHANSUVIDHA.COM??</h1>
                        <div className="row boxServ" >
                            <div className="col-sm-6">
                                <h2 style={{ color: "greenyellow" }}>INDUSTRY EXPERT</h2>
                                <p>30+ Years of collective experience in the Industry</p>
                                <br></br>
                                <h2 style={{ color: "greenyellow" }} >DEDICATED ADVISOR</h2>
                                <p>Each Client mapped to a dedicated Advisor who are expert in the respective Industry</p>
                                <br></br>
                                <h2 style={{ color: "greenyellow" }}>SINGLE USER ID FOR ALL PRODUCT</h2>
                                <p>A Single user id and password to access all your products</p>
                            </div>
                            <div className="col-sm-6">
                                <h2 style={{ color: "blue" }}>MONTHLY REVIEW ON PORTFOLIO</h2>
                                <p>Monthly review will be done on the Portfolio i.e. Loan, Investment, Insurance</p>
                                <br></br>
                                <h2 style={{ color: "blue" }}>FREE eKYC</h2>
                                <p>Every client will be getting free Centralised eKYC</p>
                                <br></br>
                                <h2 style={{ color: "blue" }}>PAN INDIA SERVICE</h2>
                                <p>We provide PAN india service</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5" >
                        <div className="row boxServ">
                            <div className="col-sm-7">
                                <h2 style={{ color: "greenyellow" }}><a className="anchorServLeft" href="/Book_Keeping">LOANS</a></h2>
                                <br></br>
                                <h2 style={{ color: "greenyellow" }} ><a className="anchorServLeft" href="/Book_Keeping">REAL-ESTATE SOLUTION</a></h2>
                                <br></br>
                                <h2 style={{ color: "greenyellow" }}><a className="anchorServLeft" href="/Book_Keeping">INVESTMENT</a></h2>
                                <br></br>
                                <h2 style={{ color: "greenyellow" }}><a className="anchorServLeft" href="/Book_Keeping">INFORMATION TECHNOLOGY</a></h2>
                                <br></br>
                                <h2 style={{ color: "greenyellow" }}><a className="anchorServLeft" href="/Book_Keeping">BOOK-KEEPING</a></h2>
                                <br></br>
                            </div>
                            <div className="col-sm-4">
                                <h2 style={{ color: "blue" }}><a className="anchorServRight" href="/Book_Keeping">PRE-IPO</a></h2>
                                <br></br>
                                <h2 style={{ color: "blue" }}><a className="anchorServRight" href="/Book_Keeping">INSURANCE</a></h2>
                                <br></br>
                                <h2 style={{ color: "blue" }}><a className="anchorServRight" href="/Book_Keeping">PR CONSULTANT</a></h2>
                                <br></br>
                                <h2 style={{ color: "blue" }}><a className="anchorServRight" href="/Book_Keeping">US Funds</a></h2>
                                <br></br>
                                <h2 style={{ color: "blue" }}><a className="anchorServRight" href="/Book_Keeping">UK $ Funds</a></h2>
                                <br></br>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5" style={{
                        backgroundImage: `url(${require("../images/our-service.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/Loan.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/PR.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/Pre-IPO.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/insurance.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                </div>

                <br></br><br></br>
                <div className="row">
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/IT.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/BK.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/International.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                    <div className="col-sm-3" style={{
                        backgroundImage: `url(${require("../images/serv.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}>
                    </div>
                </div>
            </Container >
        );
    }
}

export default ourService;
