import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    // below we are using the Navbar component from react-bootstrap
    // the mt-auto class is used to push the footer to the bottom of the page
    // the py-3 class is used to add padding to the top and bottom of the footer
    // the bg-light class is used to add a light gray background color to the footer
    return (
        <footer className="mt-auto py-3 bg-light">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>© 2024 Interior Designs. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}  

export default Footer;