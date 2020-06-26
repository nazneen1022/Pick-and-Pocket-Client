import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { selectToken } from "../../store/user/selectors";

import logo from "../../Images/logo.png";
import "./Bell.css";

export default function Navigation(props) {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  useEffect(() => {
    const $bell = document.getElementById("notification");
    console.log("props.newpost:", props.newpost);
    if (props.newpost) {
      const count = Number($bell.getAttribute("data-count")) || 0;

      $bell.setAttribute("data-count", count + 1);
      $bell.classList.add("show-count");
      $bell.classList.add("notify");
    }
    $bell.addEventListener("animationend", function (event) {
      $bell.classList.remove("notify");
    });
  }, [props.newpost]);

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
              {/* <NavbarItem path="/GiveFeedback" linkText="Give Feedback" /> */}
            </>
          ) : null}
        </Nav>
      </Navbar.Collapse>
      <div id="notification" className="notification"></div>
      {loginLogoutControls}
    </Navbar>
  );
}
