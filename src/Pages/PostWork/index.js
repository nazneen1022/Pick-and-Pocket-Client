import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function PostWork() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = (title, description) => {};

  return (
    <>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="email"
              placeholder="Enter title"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description : </Form.Label>
            <Form.Control
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Enter description here.."
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Log in
            </Button>
          </Form.Group>
          <Button>Post</Button>
        </Form>
      </Container>
    </>
  );
}
