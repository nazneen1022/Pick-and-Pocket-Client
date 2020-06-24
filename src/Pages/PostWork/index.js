import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

//import io from "socket.io-client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Form from "react-bootstrap/Form";
//import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { submitPost } from "../../store/post/actions";

import logo from "../../Images/logo.png";

export default function PostWork() {
  //const [validated, setValidated] = useState(false);

  const today = new Date();

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(logo);

  const [myDate, setDate] = useState(today);
  const [fromTime, setFromTime] = useState(today);
  const [toTime, setToTime] = useState();

  const postForm = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    console.log("form.checkValidity():", form.checkValidity());

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      //setValidated(true);

      const startTime = `${moment(myDate).format("YYYY-MM-DD")} ${moment(
        fromTime
      ).format("HH:mm")}`;
      const endTime = `${moment(myDate).format("YYYY-MM-DD")} ${moment(
        toTime
      ).format("HH:mm")}`;

      dispatch(submitPost(title, description, imageUrl, startTime, endTime));
    }
  };

  return (
    <div style={{ alignItems: "center", margin: "0px 25% 0px 25%" }}>
      <Form onSubmit={postForm}>
        <h1 className="mt-5 mb-5">Post some work</h1>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Title : </Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter title.."
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter title
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom02">
          <Form.Label>Description : </Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter description here.."
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter some description
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom03">
          <Form.Label>Image URL : </Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="url"
            placeholder="Enter image url here.."
          />

          <Form.Text className="text-muted">
            {`You can give some image url for your post for an easy eye catch of the seekers or will be defaulted with site logo`}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Col className="mt-2" md={{ span: 4, offset: 2 }}>
            {imageUrl ? <Image src={imageUrl} alt="preview" thumbnail /> : null}
          </Col>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom04">
            <Form.Label>Date</Form.Label>

            <DatePicker
              selected={myDate}
              onChange={(date) => setDate(date)}
              name="startDate"
              dateFormat="MM/dd/yyyy"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom05">
            <Form.Label>From Time </Form.Label>

            <DatePicker
              selected={fromTime}
              onChange={(date) => setFromTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom06">
            <Form.Label>To Time </Form.Label>

            <DatePicker
              selected={toTime}
              onChange={(date) => setToTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Group className="mt-5">
          <Button type="submit"> Submit Post </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
