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
        console.log(res);
        setSimilarArtists(res);
      });
  }, []);

  function openExternalUrl() {}
  if (!similarArtists) {
    return null;
  }
  return (
    <>
      <h2 style={{ color: "whitesmoke" }}>
        Similar Artists to {similarArtists.artist.name}
      </h2>
      <Row xs={1} md={2} className="g-4">
        {similarArtists.artist.similar.artist.map((object, idx) => {
          return (
            <Col key={idx}>
              <Card style={{ width: "18rem", color: "black" }}>
                <Card.Img variant="top" src={object.image[0]["#text"]} />
                <Card.Body>
                  <Card.Title>{object.name}</Card.Title>
                  <Card.Text>
                    {similarArtists.artist.tags.tag[0].name}
                  </Card.Text>
                </Card.Body>
                <Button
                  style={{ backgroundColor: "black" }}
                  size="lg"
                  onClick={() => {
                    window.open(`https://www.last.fm/music/${object.name}`);
                  }}
                >
                  Last FM Profile
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default SimilarArtists;
