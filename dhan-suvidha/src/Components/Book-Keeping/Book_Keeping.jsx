import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./book_keeping.css";

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${require("../Book-Keeping/background.png")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
};

class Book_Keeping extends Component {
    state = {};
    render() {
        return (
            <div style={{paddingBottom:"2em",backgroundImage:"linear-gradient(to right, rgb(195,225,233),white,rgb(195,225,233))"}}>
                 <section style={sectionStyle}>
                     <h1 className="header">Coming <br></br>&nbsp;&nbsp;Soon</h1>
                </section>
            </div>
               
        );
    }
}

export default Book_Keeping;