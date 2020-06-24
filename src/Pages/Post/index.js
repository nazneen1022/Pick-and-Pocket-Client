import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import Email from "../Email";
import dummyImage from "../../Images/dummyImage.png";
import "./Post.css";

export default function Post(props) {
  const [display, setDisplay] = useState(false);

  const today = moment(new Date()).format("MM/DD/YYYY");
  const postedDt = moment(props.createdAt).format("MM/DD/YYYY");

  const diffDays = Math.ceil(
    Math.abs(new Date(today) - new Date(postedDt)) / (1000 * 60 * 60 * 24)
  );

  const startDate = moment(props.startTime).format("MM/DD/YYYY");
  const myColor =
    Date.parse(startDate) >= Date.parse(today) ? "darkgreen" : "red";

  return (
    <>
      <div
        className="card flex-wrap myPost"
        style={{
          margin: "20px",
          textAlign: "left",
          width: "100%",
        }}
      >
        <div
          className="card flex-row"
          style={{ backgroundColor: "lightyellow" }}
        >
          <div className="card-header border-0">
            <img
              src={props.imageUrl ? props.imageUrl : dummyImage}
              alt=""
              width="400px"
              height="400px"
            />
          </div>
          <div
            className="card-block"
            style={{ padding: "20px", margin: "20px" }}
          >
            <div>
              <h2>
                <strong className="card-title">{props.title}</strong>
              </h2>
              <small
                style={{ position: "absolute", top: "20px", right: "20px" }}
              >
                {diffDays === 0 ? `Today` : `${diffDays} day(s) ago`}
              </small>
            </div>
            <div className="card-text">
              <p>{props.description}</p>
            </div>
            <div>
              <p>
                <strong>Required on:</strong> {startDate}
              </p>
            </div>
            <div>
              <p style={{ color: myColor, fontSize: "bolder" }}>
                Time: {moment(props.startTime).format("HH:mm")}
                <span>{"                    "}</span>-{" "}
                {moment(props.endTime).format("HH:mm")}
              </p>
            </div>

            <div>
              <Link to="/Location">{props.button1Text}</Link>
            </div>
            <div>
              <p style={{ fontSize: "25px" }}>
                &#9993;
                <button className="email-btn" onClick={() => setDisplay(true)}>
                  {props.button2Text}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer w-100 text-muted">
          Posted on: {moment(props.createdAt).format("YYYY-MM-DD HH:mm")}
        </div>
      </div>
      <div>
        {display ? (
          <Email
            show={display}
            handleClose={() => setDisplay(false)}
            title={props.title}
          ></Email>
        ) : null}
      </div>
    </>
  );
}
