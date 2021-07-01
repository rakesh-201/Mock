import React from "react";
import home from "../assets/home.svg";

const HeroPage = () => {
  return (
    <div className="d-flex flex-direction-row justify-content-center justify-content-md-between align-items-center">
      <div className="">
        <h1>Start conversation</h1>
        <p className="lead text-md-start text-center mb-5">
          We help people accomplish their goals!
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
      <div className="d-none d-md-block">
        <img src={home} className="image" />
      </div>
    </div>
  );
};

export default HeroPage;
