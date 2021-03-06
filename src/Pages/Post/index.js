import React, { useState } from "react";
import moment from "moment";
import { Card, Row, Col, Button } from "react-bootstrap";
import Email from "../Email";
import dummyImage from "../../Images/dummyImage.jpg";
import "./Post.css";

function truncateString(str, num) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + "...";
}

export default function Post(props) {
  const [display, setDisplay] = useState(false);
  const [moreText, setMoreText] = useState(false);

  const today = moment(new Date()).format("MM/DD/YYYY");
  const postedDt = moment(props.createdAt).format("MM/DD/YYYY");

  const diffDays = Math.ceil(
    Math.abs(new Date(today) - new Date(postedDt)) / (1000 * 60 * 60 * 24)
  );

  const startDate = moment(props.startTime).format("MM/DD/YYYY");

  return (
    <>
      <Card.Body>
        <Row>
          <Col xs={3}>
            <img
              src={props.imageUrl ? props.imageUrl : dummyImage}
              alt="postImage"
              width="220px"
              height="220px"
            />
          </Col>
          <Col xs={9}>
            <Card.Title>
              <Row>
                <Col>{props.title} </Col>
                <Col style={{ textAlign: "right", fontSize: "14px" }}>
                  {`Posted :
                  ${diffDays === 0 ? ` Today` : ` ${diffDays} day(s) ago`}
                    by ${props.user.firstName}`}
                </Col>
              </Row>
            </Card.Title>

            <Card.Text>
              {moreText
                ? props.description
                : truncateString(props.description, 200)}
            </Card.Text>
            <div style={{ textAlign: "right" }}>
              {props.description.length > 200 && (
                <button
                  className="readMore"
                  onClick={() => setMoreText(!moreText)}
                >
                  Read {!moreText ? "more" : "less"}...
                </button>
              )}
            </div>

            <div style={{ color: "#000080" }}>
              <em>Required on : </em>
              {startDate}
              {` ${moment(props.startTime).format("HH:mm")}
                - ${moment(props.endTime).format("HH:mm")}`}
              <br />
              <br />
              <Button>{props.button1Text}</Button>
              <Button onClick={() => setDisplay(true)}>
                {props.button2Text}
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>

      <div>
        {display && (
          <Email
            show={display}
            handleClose={() => setDisplay(false)}
            title={props.title}
          ></Email>
        )}
      </div>
    </>
  );
}
