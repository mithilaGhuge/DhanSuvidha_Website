import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import "./LoginPage.css";
import ForgetModal from "./ForgetPassword";

class LoginModel extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state={addModelShow:false,addModelShowLogin:true}
  }
  render() {
    let addModelClose=() => this.setState({addModelShow:false});

    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="container" style={{padding:"1em"}}>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="example@email.com"></Form.Control>
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Row  style={{paddingLeft:"0.2em"}}>
                <Form.Group id="formGridCheckasUser">
                  <Form.Check type="radio" inline label="User" />
                </Form.Group>

                <Form.Group id="formGridCheckasPartner">
                  <Form.Check type="radio" inline label="Partner" />
                </Form.Group>
              </Form.Row>
              <Button className="btn btn-block" variant="info" type="submit">
                Sign In
          </Button>
              <Form.Row>
                <a   onClick={()=> this.setState({addModelShow:true})}><p className="anchorLog">Forgotten password?</p></a>
                    <ForgetModal
                    show={this.state.addModelShow}
                    onHide={addModelClose}
                    />
              </Form.Row>
              <Button className="btn btn-block" variant="info" onClick={this.props.onHide}>Close</Button>

            </Form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LoginModel;