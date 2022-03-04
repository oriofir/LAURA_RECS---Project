import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import data from "./data.json";
import { Button } from "react-bootstrap";

const HomeCarousel = () => {
  const [stream, setStream] = useState(data[0].stream);

  const [similarArtists, setSimilarArtists] = useState([]);
  const handleStream = () => {
    setStream(data.stream);
  };

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${data.artist}&api_key=4cbbdf80e334145c9a6ae6b78ec01e37&format=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSimilarArtists(data);
      });
  }, []);
  if (!similarArtists) {
    return null;
  }

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
              }}
              src={element.thumbnail_url}
              alt={element.title}
            />

            <Carousel.Caption className="carouselCaption">
              <p>{element.title}</p>
              <Button variant="dark" onClick={handleStream}>
                Preview
              </Button>{" "}
              <Button variant="dark">Similar Artists</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
