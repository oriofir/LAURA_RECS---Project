import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar collapseOnSelect variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/.">
          <Image
            style={{
              width: 200,
              height: 50,
              display: "flex",
              justifyContent: "center",
              borderRadius: 10,
            }}
            src="https://i.imgur.com/EULiKVD.jpg"
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
