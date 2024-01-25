import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={2} className="footer-column">
            <h5><strong>STUDIO</strong></h5>
            <p>
              <span className="footer-line">Based in Brisbane,</span>
            </p>
            <p>
              <span className="footer-line">Main Warehouse</span>
            </p>
            <p>
              <span className="footer-line">123 Main Street,</span>
            </p>
            <p>
              <span className="footer-line">Brisbane, 4000</span>
            </p>
          </Col>
          <Col xs={12} md={2} className="footer-column">
            <h5><strong>CONTACT</strong></h5>
            <p>
              <span className="footer-line">hello@myemail.com.au</span>
            </p>
            <p>
              <span className="footer-line">0400 000 000</span>
            </p>
          </Col>

          <Col xs={12} md={2} className="footer-column footer-logo">
            <h1>H&H</h1>
          </Col>
          <Col xs={12} md={2} className="footer-column">
            <h5><strong>MENU</strong></h5>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/terms-conditions">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </Col>
          <Col xs={12} md={2} className="footer-column">
            <h5><strong>SOCIAL</strong></h5>
            <a href="https://www.instagram.com/honeyandhiveinteriors/">Instagram</a>
            <a href="https://facebook.com/">Facebook</a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center footer-bottom">
            <p>© 2024 Interior Designs. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
