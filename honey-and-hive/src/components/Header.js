import React from "react";
import { Navbar } from "react-bootstrap"; // importing the Navbar component from react-bootstrap

const Header = ({ title }) => {
  // below we are using the Navbar component from react-bootstrap, and passing in the title prop
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="logo-font">
        HONEY & HIVE
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
