import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import HomeIn from "./Screens/HomeIn";
import Navbar from "./Components/Navbar";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={HomeIn} />
      </Router>
    </div>
  );
};

export default App;
