import React from "react";
import { Image } from "react-bootstrap";

function About(props) {
  return (
    <div style={{ color: "whitesmoke" }}>
      <h2
        style={{ display: "flex", justifyContent: "center", paddingBottom: 15 }}
      >
        About L.A.U.R.A. Recs
      </h2>
      <p>
        L.A.U.R.A. (Los Angeles Underground Rave Association) is a label/party
        series highlighting the always evolving and ever diverse Los Angeles
        electronic scene.{" "}
      </p>
      <a
        style={{
          width: 500,
          cursor: "pointer",
          justifyContent: "center",
        }}
        onClick={() => {
          window.open("https://www.instagram.com/l.a.u.r.a._recs/");
        }}
      >
        <Image
          src="https://i.imgur.com/5giVyes.jpg"
          title="source: imgur.com"
          className="img-fluid shadow-4"
          style={{
            borderRadius: 35,
            width: 500,
            display: "flex",
            flexDirection: "column",
          }}
        />
      </a>
    </div>
  );
}

export default About;
