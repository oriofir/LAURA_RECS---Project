import React, { useState, useEffect } from "react";

function SimilarArtists(props) {
  const [similarArtists, setSimilarArtists] = useState([]);

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${data.artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

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
      <h2>Similar Artists</h2>
    </div>
  );
}

export default SimilarArtists;
