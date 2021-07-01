import React from "react";
import SignUp from "../assets/signup.svg";
import Input from "../Components/Input";

const Signup = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-grow py-5">
      <div className="d-flex justify-content-evenly align-items-center shadow px-5">
        <div>
          <img src={SignUp} className="image m-3" alt="..." />
        </div>
        <div>
          <p className="lead fw-bold">Join Us!</p>
          <Input />
          <Input />
          <Input />
          <Input />
          <button className="btn btn-primary mt-4">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
