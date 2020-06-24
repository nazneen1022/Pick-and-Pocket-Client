import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
import { useDispatch } from "react-redux";

import { getUserWithStoredToken } from "./store/user/actions";

import { Switch, Route } from "react-router-dom";
import MessageBox from "./Components/MessageBox";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import PostWork from "./Pages/PostWork";
import Pick from "./Pages/Pick";
import MyPosts from "./Pages/MyPosts";
import MapContainer from "./Pages/MapContainer";
import { Jumbotron } from "react-bootstrap";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  //const [dt, setDt] = useState("");
  const [post, setPost] = useState();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserWithStoredToken());
  // }, [dispatch]);

  // establish socket connection
  useEffect(() => {
    setSocket(io("http://localhost:4000"));
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  // subscribe to the socket event
  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setSocketConnected(socket.connected);
      //subscribeToDateEvent();
      subscribeToNewPost();
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });
    // socket.on("getDate", (data) => {
    //   setDt(data);
    // });
    socket.on("getPost", (data) => {
      setPost(data);
    });
  }, [socket]);

  // manage socket connection
  const handleSocketConnection = () => {
    if (socketConnected) socket.disconnect();
    else {
      socket.connect();
    }
  };

  // subscribe to socket date event
  // const subscribeToDateEvent = (interval = 1000) => {
  //   socket.emit("subscribeToDateEvent", interval);
  // };
  const subscribeToNewPost = (interval = 1000) => {
    socket.emit("subscribeToNewPost", interval);
  };

  return (
    <>
      <Navigation />
      <Jumbotron>
        <div>
          <b>New post notification subscription status : </b>{" "}
          {socketConnected ? "Subscribed" : "Unsubscribed"}
          {"  "}
          <input
            type="button"
            style={{
              color: "white",
              borderRadius: "2px",
              backgroundColor: "Red",
            }}
            value={socketConnected ? "Unsubscribe" : "Subscribe"}
            onClick={handleSocketConnection}
          />
          {socketConnected && post && post.title ? (
            <div style={{ marginTop: 20 }}>
              <b>There is a new post titled : </b>
              {post.title}
            </div>
          ) : null}
        </div>
      </Jumbotron>
      <MessageBox />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/Login" component={Login} />
        <Route path="/PostWork" component={PostWork} />
        <Route path="/PickWork" component={Pick} />
        <Route path="/MyPosts" component={MyPosts} />
        <Route path="/Location" component={MapContainer} />
      </Switch>
    </>
  );
}

export default App;
