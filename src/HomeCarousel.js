import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import data from "./data.json";
import { Button } from "react-bootstrap";
import { Router, Route, Link } from "react-router-dom";

const HomeCarousel = () => {
  const [stream, setStream] = useState(data[0].stream);

  const handleStream = () => {
    setStream(stream);
  };

  return (
    <Carousel interval={10000} style={{ minHeight: "90vh" }}>
      {data.map((element, index) => {
        return (
          <Carousel.Item key={index} style={{ maxHeight: "90vh" }}>
            <img
              className="d-block w-100"
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
                borderRadius: 10,
              }}
              src={element.thumbnail_url}
              alt={element.title}
            />

            <Carousel.Caption className="carouselCaption">
              <p>{element.title}</p>
              {/* <Button variant="dark" onClick={handleStream}>
                Preview
              </Button>{" "} */}
              <Link to={`/similarartists/${element.artist}`}>
                <Button variant="dark" key={element.artist}>
                  Similar Artists
                </Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
