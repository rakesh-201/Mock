import React from "react";
import Navbar from "../Components/Navbar";
import home from "../assets/home.svg";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="container p-5">
        <div className="d-flex flex-direction-row justify-content-between align-items-center">
          <div className="">
            <h1>Start conversation</h1>
            <p className="lead text-md-start text-center mb-5">
              We help people accomplish their goals!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="d-none d-md-block">
            <img src={home} class="image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
