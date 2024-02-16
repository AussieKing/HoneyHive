import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import menuIcon from '../assets/logo-single.png'; // Import your custom menu icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Directly set the menu to be closed
  };

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar structure */}
      <Navbar
        variant="light"
        fixed="top"
        className={navbarScrolled ? "navbar scrolled" : "navbar"}
      >
        <Container>
          {/* Menu icon (custom PNG image)*/}
          <img
            src={menuIcon}
            alt="Menu"
            onClick={toggleMenu}
            className="header-icon"
          />

          <Navbar.Brand href="/" className="logo-font">
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
        <FontAwesomeIcon
          icon={faTimes} // Using the 'times' icon as a close icon
          onClick={closeMenu} // Using the closeMenu function on click
          className="close-icon" // Assign a class for styling
        />
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