import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import HomeIn from "./Screens/HomeIn";
import Navbar from "./Components/Navbar";

const App = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="App">
      <Router>
        {showNav && <Navbar />}
        <Route exact path="/" component={Home} />
        <Route
          path="/signin"
          render={() => <Signin setShowNav={setShowNav} />}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={HomeIn} />
      </Router>
    </div>
  );
};

export default App;
