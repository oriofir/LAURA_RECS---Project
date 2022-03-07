import React, { useState, useEffect } from "react";

function Releases(props) {
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=L.A.U.R.A.&api_key=${process.env.REACT_APP_API_KEY}&format=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setRelases(data);
      });
  }, []);
  if (!releases) {
    return null;
  }
  return <div>Releases</div>;
}

export default Releases;
