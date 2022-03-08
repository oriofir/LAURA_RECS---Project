import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button, Container, Spinner } from "react-bootstrap";

function SimilarArtists(props) {
  const { artist } = useParams();
  const [similarArtists, setSimilarArtists] = useState(null);
  const [error, setError] = useState("");

  const handleError = () => {
    setError(true);
  };

  const getDetail = () => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error === "Not Found") {
          setError(res.error);
        }
        setSimilarArtists(res);
        // console.log(res);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getDetail();
    handleError();
  }, []);

  if (!similarArtists) {
    return (
      <Container
        className="d-flex  justify-content-center align-items-center align-content-center"
        style={{ minHeight: "90vh" }}
      >
        <span style={{ paddingRight: "1em", color: "whitesmoke" }}>
          Not Found{"  "}
        </span>
      </Container>
    );
  }

  return (
    <>
      <h2 style={{ color: "whitesmoke", marginBottom: 30 }}>
        Similar Artists to {similarArtists.artist.name}
      </h2>
      <Row xs={2} md={2} className="g-4">
        {similarArtists.artist.similar.artist.map((object, idx) => {
          return (
            <Col key={idx}>
              <Card style={{ width: "15rem", height: "100%", color: "black" }}>
                <Card.Img
                  style={{ width: "5rem" }}
                  variant="top"
                  src={object.image[0]["#text"]}
                />
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
