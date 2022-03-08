import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  return (
    <div>
      <Image
        style={{
          width: 300,
          height: 50,
          display: "flex",
          justifyContent: "center",
        }}
        src="https://i.imgur.com/EULiKVD.jpg"
      />

      <Navbar collapseOnSelect variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/.">
          <Image
            src="https://i.imgur.com/BOFLbgG.jpg"
            title="source: imgur.com"
            className="img-fluid shadow-4"
            style={{
              borderRadius: 35,
              width: 50,
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/releases">
              Releases
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
