import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function SimilarArtists(props) {
  const { artist } = useParams();
  const [similarArtists, setSimilarArtists] = useState(null);

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        /* console.log(res); */
        setSimilarArtists(res);
      });
  }, []);
  if (!similarArtists) {
    return null;
  }

  function openExternalUrl() {
    window.open(
      `https://www.last.fm/music/${similarArtists.artist.similar[0]}`
    );
  }

  return (
    <>
      <h2 style={{ color: "black" }}>
        Similar Artists to {similarArtists.artist.name}
      </h2>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card
              key={similarArtists.artist}
              style={{ width: "18rem", color: "black" }}
            >
              <Card.Img variant="top" src={similarArtists.artist.similar[0]} />
              <Card.Body>
                <Card.Title>{similarArtists.artist.similar[0]}</Card.Title>
                <Card.Text>{similarArtists.artist.tags[0]}</Card.Text>
              </Card.Body>
              <Button
                style={{ backgroundColor: "black" }}
                size="lg"
                onClick={openExternalUrl}
              >
                Last FM
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default SimilarArtists;
