import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HowItWorks from "./HowItWorks";
import { selectToken, selectUser } from "../../store/user/selectors";
import "./Home.css";

export default function Home() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const userLoggedIn =
    token && (user.firstName !== null || !user.lastName !== null);

  const linkTo = token ? "/PickWork" : "/Login";

  return (
    <>
      <div className="myBody">
        <div className="myDiv">Hallo!! </div>
        <div className="myDiv">
          <span>{userLoggedIn ? `    ${user.firstName}   ` : "Friend"}</span>
        </div>
      </div>
      <Jumbotron
        className="homeJumbotron"
        style={{ backgroundColor: "rgb(248, 236, 236)" }}
      >
        <h1>
          <strong>{`PICK SHORT-TIME WORK, POCKET REAL MONEY`}</strong>
        </h1>
        <h4>
          <strong>
            {`Make extra money through small services & extended help you can do in your free time.`}
          </strong>
        </h4>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Link to={linkTo}>
            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: "purple",
              }}
            >{`Pickup some work`}</Button>
          </Link>
          <Link to={token ? "/PostWork" : "/Login"}>
            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: "purple",
              }}
            >{`Post New Work`}</Button>
          </Link>
        </div>
      </Jumbotron>
      <br />
      <br />
      <div
        style={{
          textAlign: "center",
          fontFamily: `"Comic Sans MS", cursive, sans-serif`,
        }}
      >
        <h2>{`How it works?`}</h2>
        <h4>{`Four easy steps to get paid.`}</h4>
        <Container>
          <HowItWorks />
        </Container>
      </div>
    </>
  );
}
