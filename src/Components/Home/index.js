import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HomeApp from "./HomeApp";

import { selectToken, selectUser } from "../../store/user/selectors";

export default function Home() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  return (
    <>
      <Jumbotron>
        <p>
          {token ? (
            <em>Welcome: {`${user.firstName}, ${user.lastName}`}</em>
          ) : null}
        </p>
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
        <Link to={`/Signup`}>
          <Button
            variant="light"
            style={{ borderRadius: "20px", backgroundColor: "white" }}
          >{`Start Earning Now`}</Button>
        </Link>
      </Jumbotron>
      <br />
      <br />
      <h2>{`How it works?`}</h2>
      <h5>{`Four easy steps to get paid.`}</h5>
      <Container>
        <HomeApp />
      </Container>
    </>
  );
}
