import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = function () {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link className="fw-bold nav-link" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold nav-link" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="fw-bold nav-link" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold nav-link" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-bold nav-link" href="#">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
