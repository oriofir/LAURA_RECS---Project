import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import data from "./data.json";

const HomeCarousel = () => {
  return (
    <Carousel style={{ minHeight: "90vh" }}>
      {data.map((element, index) => {
        return (
          <Carousel.Item key={index} style={{ maxHeight: "90vh" }}>
            <img
              className="d-block w-100"
              style={{
                height: "90vh",
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              src={element.thumbnail_url}
              alt={data.title}
            />
            <Carousel.Caption>
              <p>{data.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
