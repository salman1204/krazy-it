import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" style={{padding:"0 0 0 50px"}}>
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto" style={{padding:"0 50px 0 0"}}>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="#">Portfolio</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  );
};

export default Header;
