import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, Popover, OverlayTrigger } from "react-bootstrap";
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
    //console.log("props.newpost:", props.newpost);
    if (props.newpost && props.newpost.length > 0) {
      //const count = Number($bell.getAttribute("data-count")) || 0;

      //$bell.setAttribute("data-count", count + 1);
      $bell.setAttribute("data-count", props.newpost.length);
      $bell.classList.add("show-count");
      $bell.classList.add("notify");
    }
    $bell.addEventListener("animationend", function (event) {
      $bell.classList.remove("notify");
    });
  }, [props.newpost]);

  const popover = (
    <Popover id="popover-basic">
      {props.newpost.map((post) => {
        return (
          <div key={post.id}>
            <Popover.Title as="h3">{post.title}</Popover.Title>
            <Popover.Content>
              {post.description.slice(0, 30) + "..."}
            </Popover.Content>
          </div>
        );
      })}
    </Popover>
  );

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
        {` Pick & Pocket `}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav style={{ width: "100%" }} fill>
          {token && (
            <>
              <NavbarItem path="/PickWork" linkText="Pick" />
              <NavbarItem path="/MyPosts" linkText="My Profile" />
            </>
          )}
        </Nav>
      </Navbar.Collapse>

      <div ref={useRef(null)}>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div id="notification" className="notification"></div>
        </OverlayTrigger>
      </div>
      {loginLogoutControls}
    </Navbar>
  );
}
