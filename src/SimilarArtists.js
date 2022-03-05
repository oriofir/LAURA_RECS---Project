import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SimilarArtists(props) {
  const { artist } = useParams();
  const [similarArtists, setSimilarArtists] = useState(null);

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

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
    <div>
      <h2>Similar Artists to {similarArtists.artist.name}</h2>
    </div>
  );
}

export default SimilarArtists;
