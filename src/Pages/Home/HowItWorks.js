import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import signUp from "../../Images/sign-up.jpg";
import findWork from "../../Images/find-work.jpg";
import getItDone from "../../Images/get-it-done.jpg";
import getPaid from "../../Images/get-paid.jpg";

export default function HowItWorks() {
  return (
    <Row>
      <Card style={{ width: "15rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={signUp}
          alt="signupImg"
          width="300px"
          height="300px"
        />
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>1. SIGN UP</Card.Title>
          <Card.Text>Register directly to this app</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={findWork}
          alt="getPaidImg"
          width="300px"
          height="300px"
        />
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>2. PICK UP WORKS</Card.Title>
          <Card.Text>
            Short-time works are diverse and readily available.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={getItDone}
          alt="getItDoneImg"
          width="300px"
          height="300px"
        />
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>3. COMPLETE WORKS</Card.Title>
          <Card.Text>Finish it. It makes you happy by helping others</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={getPaid}
          alt="findWorkImg"
          width="300px"
          height="300px"
        />
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>4. GET PAID</Card.Title>
          <Card.Text>Instant payment through payment gateway</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}
