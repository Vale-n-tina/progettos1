import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6}>
          <Row>
            <Col>
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className=" bi bi-twitter footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
