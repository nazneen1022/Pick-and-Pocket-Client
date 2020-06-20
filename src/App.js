import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";

import { getUserWithStoredToken } from "./store/user/actions";

import { Switch, Route } from "react-router-dom";
import MessageBox from "./Components/MessageBox";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import PostWork from "./Pages/PostWork";
import Pick from "./Pages/Pick";
import MyPosts from "./Pages/MyPosts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/Login" component={Login} />
        <Route path="/PostWork" component={PostWork} />
        <Route path="/PickWork" component={Pick} />
        <Route path="/MyPosts" component={MyPosts} />
      </Switch>
    </div>
  );
}

export default App;
