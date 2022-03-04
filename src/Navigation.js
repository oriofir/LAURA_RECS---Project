import React from "react";
import Releases from "./Releases";
import About from "./About";
import "./index.css";

function Navigation(props) {
  return (
    <div>
      <Releases />
      <About />
    </div>
  );
}

export default Navigation;
