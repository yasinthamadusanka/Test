import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-light py-2 mt-2">
    <Container>
      <Row>
        <Col className="text-center">
          <p className="text-white mb-0">
            &copy; 2026 SportShop. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
