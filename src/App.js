import React, { useState, useEffect } from "react";
import HomeCarousel from "./HomeCarousel";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import data from "./data.json";

function App() {
  return (
    <Container>
      <Navigation />
      <main>
        <HomeCarousel data={data[0]} />
      </main>
    </Container>
  );
}

export default App;
