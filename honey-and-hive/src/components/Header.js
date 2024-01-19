import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="transparent" variant="light" fixed="top">
      <Container>
        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="dropdown-toggle">
              <FontAwesomeIcon icon={faBars} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item as={Link} to="/about">About</Dropdown.Item>
              <Dropdown.Item as={Link} to="/services">Services</Dropdown.Item>
              <Dropdown.Item as={Link} to="/projects">Projects</Dropdown.Item>
              <Dropdown.Item as={Link} to="/contact">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        <Navbar.Brand href="/" className="mx-auto">
          HONEY & HIVE
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

