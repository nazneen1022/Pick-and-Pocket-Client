import React from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { selectToken } from "../../store/user/selectors";
//import logo from "../../Images/Make-Money-in-Your-Free-Time.png";

export default function Navigation() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h2>{`Pick & Pocket`}</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }} fill>
            {token ? (
              <>
                <NavbarItem path="/PickWork" linkText="Pick" />
                <NavbarItem path="/PostWork" linkText="Post New" />
                <NavbarItem path="/GiveFeedback" linkText="Give Feedback" />
              </>
            ) : null}
          </Nav>
        </Navbar.Collapse>
        {loginLogoutControls}
      </Navbar>
    </>
  );
}
