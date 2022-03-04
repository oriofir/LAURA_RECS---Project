import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import data from "./data.json";
import About from "./About";
import Releases from "./Releases";
import SimilarArtists from "./SimilarArtists";

function App() {
  return (
    <Container>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomeCarousel data={data[0]} />}></Route>
          <Route path="/releases" element={<Releases />}></Route>
          <Route
            path="similarartists/:symbol"
            element={<SimilarArtists />}
          ></Route>
        </Routes>
      </main>
    </Container>
  );
}

export default App;
