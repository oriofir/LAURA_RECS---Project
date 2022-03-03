import React, { useState, useEffect } from "react";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
