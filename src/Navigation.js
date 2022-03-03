import React from "react";
import Releases from "./Releases";
import About from "./About";

function Navigation(props) {
  return (
    <div>
      <Releases />
      <About />
    </div>
  );
}

export default Navigation;
