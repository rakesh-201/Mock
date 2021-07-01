import React from "react";
import SignIn from "../assets/signin.svg";
import Input from "../Components/Input";

const Signin = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-grow py-5">
      <div className="d-flex justify-content-evenly align-items-center shadow px-5">
        <div>
          <img src={SignIn} className="image m-3" alt="..." />
        </div>
        <div>
          <p className="lead fw-bold">Get In!</p>
          <Input />
          <Input />
          <button className="btn btn-primary mt-4">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
