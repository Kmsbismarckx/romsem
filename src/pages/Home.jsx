import React from "react";
import Main from "../components/main/Main";
import About from "../components/about/About";

const Home = () => {
  return (
    <div>
      <Main className="main" />
      <About className="about" />
    </div>
  );
};

export default Home;
