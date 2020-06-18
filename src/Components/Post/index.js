import React, { useState } from "react";
import moment from "moment";

import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

import "./Post.css";
import Email from "../../Pages/Email";

export default function Post(props) {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <ListGroup horizontal="md" className="my-2">
        <ListGroup.Item>
          <Image
            src={
              props.imageUrl
                ? props.imageUrl
                : "https://i.ya-webdesign.com/images/default-image-png-4.png"
            }
            alt=""
            width="200px"
            height="200px"
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <h3>{props.title}</h3>{" "}
          <div style={{ textAlign: "left" }}>
            {props.description}
            <br />
            <br />
            <span role="img" aria-label="time">
              ⏰{" "}
            </span>{" "}
            {moment(props.startTime).format("YYYY-MM-DD HH:mm")}
            {"       "}
            <span role="img" aria-label="time">
              ⏰{" "}
            </span>{" "}
            {moment(props.endTime).format("YYYY-MM-DD HH:mm")}
            <br />
            <br />
            <p style={{ fontSize: "12px" }}>
              <span role="img" aria-label="calendar">
                🗓
              </span>
              {"    "}
              Posted on: {moment(props.createdAt).format("YYYY-MM-DD HH:mm")}
            </p>
            <button className="button button1" onClick={() => setDisplay(true)}>
              Notify me
            </button>
            {display ? (
              <Email
                show={display}
                handleClose={() => setDisplay(false)}
              ></Email>
            ) : null}
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
