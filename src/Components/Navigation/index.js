import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, Popover, Overlay } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { selectToken } from "../../store/user/selectors";

import logo from "../../Images/logo.png";
import "./Bell.css";

export default function Navigation(props) {
  const target = useRef(null);
  const [show, setShow] = useState(false);
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const postsCount = props.newpost.length;
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

  function display() {
    setShow(!show);
    document.getElementById("notification").classList.remove("show-count");
  }

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
      {/* 
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <div id="notification" className="notification"></div>
      </OverlayTrigger> */}
      <div
        ref={target}
        id="notification"
        className="notification"
        onClick={() => display()}
      ></div>
      <Overlay target={target.current} show={show} placement="bottom">
        <Popover id="popover-basic">
          {postsCount ? (
            props.newpost.map((post) => {
              return (
                <div key={post.id}>
                  <Popover.Title as="h3">{post.title}</Popover.Title>
                  <Popover.Content>
                    {post.description.slice(0, 20) + "..."}
                  </Popover.Content>
                </div>
              );
            })
          ) : (
            <Popover.Title as="h3">{` No new notifications!! `}</Popover.Title>
          )}
        </Popover>
      </Overlay>

      {loginLogoutControls}
    </Navbar>
  );
}
