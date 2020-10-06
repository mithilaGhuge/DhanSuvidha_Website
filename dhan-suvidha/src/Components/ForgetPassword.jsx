import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import "./LoginPage.css";
class ForgetPasswordModal extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header closeButton>
          </Modal.Header>
        <Modal.Body>
          <div className="container" style={{padding:"1em"}}>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="example@email.com"></Form.Control>
              </Form.Group>
              <Button className="btn btn-block" variant="info" type="submit">
                Submit
          </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ForgetPasswordModal;