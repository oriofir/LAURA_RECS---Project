import React from "react";
import { Carousel } from "react-bootstrap";

function Home(props) {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i1.sndcdn.com/artworks-E6cTuMBcBTbnlpCX-iPySHQ-t500x500.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <iframe
            width="100%"
            height="400"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1207900078&show_artwork=true"
          ></iframe>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
