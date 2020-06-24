import React from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { selectToken } from "../../store/user/selectors";

import logo from "../../Images/logo.png";

export default function Navigation() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ fontFamily: `"Comic Sans MS", cursive, sans-serif` }}
    >
      <Navbar.Brand href="/" style={{ fontSize: "30px" }}>
        <img
          alt="logo"
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-center"
        />
        {` Pick and Pocket `}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav style={{ width: "100%" }} fill>
          {token ? (
            <>
              <NavbarItem path="/PickWork" linkText="Pick" />
              <NavbarItem path="/MyPosts" linkText="My Posts" />
              <NavbarItem path="/PostWork" linkText="Post New" />
              <NavbarItem path="/GiveFeedback" linkText="Give Feedback" />
            </>
          ) : null}
        </Nav>
      </Navbar.Collapse>

      {loginLogoutControls}
    </Navbar>
  );
}
