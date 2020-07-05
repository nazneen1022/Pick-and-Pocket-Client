import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";

import { sendEmail } from "../../store/Email/actions";

export default function Email({ handleClose, show, title }) {
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();
  const notifyMe = () => {
    dispatch(sendEmail(title, content));
    setDisabled(true);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post title - {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Hey!! I am available to help you!!"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={notifyMe} disabled={disabled}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
