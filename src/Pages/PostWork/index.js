import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import { submitPost } from "../../store/post/actions";

export default function PostWork() {
  const now = moment();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState(now.format("YYYY-MM-DD"));
  const [fromTime, setFromTime] = useState(now.format("HH:mm"));
  const [toTime, setToTime] = useState("");

  const postForm = (event) => {
    event.preventDefault();
    const startTime = `${date} ${fromTime}`;
    const endTime = `${date} ${toTime}`;
    dispatch(submitPost(title, description, imageUrl, startTime, endTime));
  };

  return (
    <>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Post some work</h1>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="email"
              placeholder="Enter title"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description : </Form.Label>
            <Form.Control
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Enter description here.."
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicImageUrl">
            <Form.Label>Image URL : </Form.Label>
            <Form.Control
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              type="url"
              placeholder="Enter image url here.."
              required
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicFromTime">
              <Form.Label>From Time </Form.Label>
              <Form.Control
                type="text"
                value={fromTime}
                onChange={(event) => setFromTime(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridToTime">
              <Form.Label>To Time </Form.Label>
              <Form.Control
                value={toTime}
                onChange={(event) => setToTime(event.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group className="mt-5">
            <Button
              variant="outline-dark"
              style={{ backgroundColor: "lightblue" }}
              type="submit"
              onClick={postForm}
            >
              Post
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
