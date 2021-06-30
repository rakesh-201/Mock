import React from "react";
import HeroPage from "../Components/HeroPage";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="container p-5">
        <HeroPage />
      </section>
    </div>
  );
};

export default Home;
