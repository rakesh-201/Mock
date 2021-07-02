import React, { useState } from "react";
import SignIn from "../assets/signin.svg";
import Input from "../Components/Input";
import { NavLink } from "react-router-dom";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="d-flex justify-content-evenly align-items-center shadow px-5">
        <div>
          <img src={SignIn} className="image m-3" alt="..." />
        </div>
        <div>
          <p className="lead fw-bold">Get In!</p>

          <Input
            iconClass="bi bi-envelop-fill"
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            data={email}
            setData={setEmail}
            type="email"
            placeholder="Email"
            name="email"
          />

          <Input
            iconClass="bi bi-key-fill"
            d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            data={password}
            setData={setPassword}
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
          />
          <NavLink
            to="/home"
            className="btn btn-primary mt-4"
            onClick={() => {
              props.setShowNav(false);
            }}
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signin;
