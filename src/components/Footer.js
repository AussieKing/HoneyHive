import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import IconV1 from "../assets/Icon v1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between">
          {/* STUDIO Column */}
          <Col xs={12} md={2} className="footer-column">
            <div className="header-and-first-item">
              <h5>
                <strong>STUDIO</strong>
              </h5>
              <div className="first-item-and-below">
                <p>Based in Brisbane</p>
                <p>Servicing SEQ</p>
                <p>Brisbane</p>
                <p>4000</p>
              </div>
            </div>
          </Col>

          {/* CONTACT Column */}
          <Col xs={12} md={2} className="footer-column">
            <div className="header-and-first-item">
              <h5>
                <strong>CONTACT</strong>
              </h5>
              <div className="first-item-and-below">
                <p><a href="tel:+61427766288">Call Us</a></p>
                <p><a href="mailto:ashley@honeyandhiveinteriors.com">Email Us</a></p>
              </div>
            </div>
          </Col>

          {/* LOGO Column */}
          <Col xs={12} md={2} className="footer-column footer-logo">
            <h1>
              <Link
                to="/home"
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  fontSize: "inherit",
                }}
              >
                H&H
              </Link>
            </h1>
            <img src={IconV1} alt="Icon" className="footer-icon" />
          </Col>

          {/* MENU Column */}
          <Col xs={12} md={2} className="footer-column">
            <div className="header-and-first-item">
              <h5>
                <strong>MENU</strong>
              </h5>
              <div className="first-item-and-below">
                <p>
                  <a href="/home">Home</a>
                </p>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
                <a href="/terms-conditions">Terms & Conditions</a>
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
            </div>
          </Col>

          {/* SOCIAL Column */}
          <Col xs={12} md={2} className="footer-column">
            <div className="header-and-first-item">
              <h5>
                <strong>SOCIAL</strong>
              </h5>
              <div className="first-item-and-below">
                <p>
                  <a href="https://www.instagram.com/honeyandhiveinteriors/">
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center footer-bottom">
            <p>© 2024 Honey and Hive Interiors. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
