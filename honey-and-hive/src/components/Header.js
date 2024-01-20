import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar structure */}
      <Navbar bg="transparent" variant="light" fixed="top">
        <Container>
          {/* Menu icon (burger menu)*/}
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleMenu}
            className="header-icon"
          />

          <Navbar.Brand href="/" className="logo-font">
            {" "}
            {/* Because the logo is styled, we need to make sure the class here matches App.css */}
            HONEY & HIVE
          </Navbar.Brand>

          {/* Contact link */}
          <Nav className="ms-auto">
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Menu overlay */}
      <div className={`menu-overlay ${isMenuOpen ? "show" : ""}`}>
        <div className="menu-content">
          {/* Menu links */}
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
