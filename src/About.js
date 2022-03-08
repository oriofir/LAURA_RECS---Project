import React from "react";
import { Image } from "react-bootstrap";

function About(props) {
  return (
    <div style={{ color: "whitesmoke" }}>
      <h2>About</h2>
      <a
        style={{ width: 100, height: 100, cursor: "pointer" }}
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
            width: 1000,
          }}
        />
      </a>
    </div>
  );
}

export default About;
