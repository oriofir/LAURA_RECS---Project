import React, { useState, useEffect } from "react";

function Releases() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=L.A.U.R.A.&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
      });
  }, []);
  if (!item) {
    return null;
  }

  function handClick() {
    window.open(`https://laurarecs.bandcamp.com/album/`);
  }
  return (
    <div
      style={{
        color: "whitesmoke",
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ display: "flex", justifyContent: "center" }}>Releases</h1>
      <div>Artist - Album </div>
      <ul>
        {item.results.albummatches.album.map((object, idx) => {
          return (
            <li
              style={{
                cursor: "pointer",
                listStyle: "none",
                lineHeight: "2em",
                letterSpacing: 2,
              }}
              onClick={handClick}
              key={idx}
            >
              {object.artist} - {object.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Releases;
