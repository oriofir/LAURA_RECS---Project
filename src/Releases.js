import React, { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Releases = ({ releases }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=L.A.U.R.A.&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, []);
  if (!releases) {
    return null;
  }
  return (
    <div>
      <h1>Releases</h1>
      <ul>
        {releases.results.albummatches.album.map((data) => {
          return <li key={data.results.albummatches}>{data.album[0]}</li>;
        })}
      </ul>
    </div>
  );
};

export default Releases;
