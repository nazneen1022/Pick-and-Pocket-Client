import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import moment from "moment";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { submitPost } from "../../store/post/actions";
import dummyImage from "../../Images/dummyImage.png";

export default function PostWork() {
  //const now = moment();
  const today = new Date();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(dummyImage);
  //const [myDate, setDate] = useState(now.format("YYYY-MM-DD"));
  const [myDate, setDate] = useState(today);
  const [fromTime, setFromTime] = useState(today);
  const [toTime, setToTime] = useState();

  const postForm = (event) => {
    event.preventDefault();
    console.log("Nazneen:", myDate, fromTime, toTime);

    const formattedDate = moment(myDate).format("YYYY-MM-DD");
    const startTime = `${moment(myDate).format("YYYY-MM-DD")} ${moment(
      fromTime
    ).format("HH:mm")}`;
    const endTime = `${moment(myDate).format("YYYY-MM-DD")} ${moment(
      toTime
    ).format("HH:mm")}`;
    console.log("Nazneen:", formattedDate, startTime, endTime);
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
              type="text"
              placeholder="Enter title.."
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description : </Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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

          <Form.Group>
            <Col className="mt-2" md={{ span: 4, offset: 2 }}>
              {imageUrl ? (
                <Image src={imageUrl} alt="preview" thumbnail />
              ) : null}
            </Col>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formBasicDate">
              <Form.Label>Date</Form.Label>

              <DatePicker
                selected={myDate}
                onChange={(date) => setDate(date)}
                name="startDate"
                dateFormat="MM/dd/yyyy"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicFromTime">
              <Form.Label>From Time </Form.Label>

              <DatePicker
                selected={fromTime}
                onChange={(date) => setFromTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridToTime">
              <Form.Label>To Time </Form.Label>
              <DatePicker
                selected={toTime}
                onChange={(date) => setToTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
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
