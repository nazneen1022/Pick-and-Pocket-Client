import React, { useState } from "react";
import moment from "moment";

import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

import Email from "../../Pages/Email";
import dummyImage from "../../Images/dummyImage.png";
import "./Post.css";

export default function Post(props) {
  const [display, setDisplay] = useState(false);

  const today = moment(new Date()).format("MM/DD/YYYY");
  const postedDt = moment(props.createdAt).format("MM/DD/YYYY");

  //console.log("getdate:", today, moment(props.createdAt).format("MM/DD/YYYY"));
  const diffDays = Math.ceil(
    Math.abs(new Date(today) - new Date(postedDt)) / (1000 * 60 * 60 * 24)
  );
  //console.log("diffDays:", diffDays);
  const startDate = moment(props.startTime).format("MM/DD/YYYY");
  const myColor =
    Date.parse(startDate) >= Date.parse(today) ? "darkgreen" : "red";

  return (
    <div>
      <ListGroup horizontal="md" className="myPost my-4">
        <ListGroup.Item style={{ backgroundColor: "lightyellow" }}>
          <Image
            src={props.imageUrl ? props.imageUrl : dummyImage}
            alt=""
            width="200px"
            height="200px"
          />
        </ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: "lightyellow" }}>
          <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
              <h3>
                {" "}
                <strong>{props.title}</strong>
              </h3>
              <small>{diffDays} day(s) ago</small>
            </div>
            <br />
            {props.description}
            <br />
            <br />
            <div>
              <p>
                <strong>Required on:</strong> {startDate}
              </p>
              <div style={{ color: myColor }}>
                Time: {moment(props.startTime).format("HH:mm")}
                <span>{"                    "}</span>-{" "}
                {moment(props.endTime).format("HH:mm")}
              </div>
              <br />
              <p style={{ fontSize: "12px" }}>
                <span role="img" aria-label="calendar">
                  🗓
                </span>
                Posted on: {moment(props.createdAt).format("YYYY-MM-DD HH:mm")}
              </p>
              <div>
                <p>{`If you are available to take this and want to contact requester, click the button to send an email`}</p>
                <button className="button button1">{props.button1Text}</button>
                <button
                  className="button button1"
                  onClick={() => setDisplay(true)}
                >
                  {props.button2Text}
                </button>
              </div>
              {display ? (
                <Email
                  show={display}
                  handleClose={() => setDisplay(false)}
                ></Email>
              ) : null}
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
