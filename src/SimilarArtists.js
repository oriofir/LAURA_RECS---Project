import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

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
  if (!similarArtists) {
    return null;
  }
  return (
    <div>
      <h2 style={{ color: "black" }}>
        Similar Artists to {similarArtists.artist.name}
      </h2>
      <Card style={{ width: "18rem", color: "black" }}>
        <Card.Body>
          <Card.Title>{similarArtists.artist.similar[0]}</Card.Title>
          <Card.Text>{similarArtists.artist.tags[0]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SimilarArtists;
