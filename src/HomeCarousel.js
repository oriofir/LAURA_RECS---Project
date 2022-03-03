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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i1.sndcdn.com/artworks-E6cTuMBcBTbnlpCX-iPySHQ-t500x500.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i1.sndcdn.com/artworks-E6cTuMBcBTbnlpCX-iPySHQ-t500x500.jpg"
          alt="Third slide"
        />
        <Carousel.Caption interval={1000}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
