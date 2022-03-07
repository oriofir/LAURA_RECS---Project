import React, { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function Releases() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=L.A.U.R.A.&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItem(res);
      });
  }, []);
  if (!item) {
    return null;
  }
  return (
    <div style={{ color: "whitesmoke" }}>
      <h1>Releases</h1>
      <ul>
        {item.results.albummatches.album.map((object, idx) => {
          return (
            <li key={idx}>
              Album: {object.artist} - {object.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Releases;
