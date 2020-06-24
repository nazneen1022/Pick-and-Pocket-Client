import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";

import { sendEmail } from "../../store/Email/actions";

export const selectEmailMsg = (state) => state.email;

export default function Email({ handleClose, show, title }) {
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);
  const emailMsg = useSelector(selectEmailMsg);

  console.log("emailMsg:", emailMsg);

  const dispatch = useDispatch();
  const notifyMe = () => {
    dispatch(sendEmail(content));
    setDisabled(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email ({title})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message </Form.Label>
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
          <Button variant="primary" onClick={notifyMe} disabled={disabled}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
