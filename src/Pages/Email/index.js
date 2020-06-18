import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";

import { sendEmail } from "../../store/Email/actions";

export default function Email({ handleClose, show }) {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const notifyMe = () => {
    //console.log("Im here with content:", content);
    dispatch(sendEmail(content));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message text : </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              type="textarea"
              placeholder="Hey!! I am available to help you!!"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notifyMe}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
      <button onClick={handleClose}>close</button>
    </>
  );
}
