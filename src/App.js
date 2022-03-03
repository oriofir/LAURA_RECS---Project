import React, { useState, useEffect } from "react";
import HomeCarousel from "./HomeCarousel";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <Navigation />
      <main>
        <HomeCarousel />
      </main>
    </Container>
  );
}

export default App;
