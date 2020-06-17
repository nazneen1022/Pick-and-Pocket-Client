import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import PostWork from "./Pages/PostWork";
import Pick from "./Pages/Pick";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/Login" component={Login} />
        <Route path="/PostWork" component={PostWork} />
        <Route path="/PickWork" component={Pick} />
      </Switch>
    </div>
  );
}

export default App;
