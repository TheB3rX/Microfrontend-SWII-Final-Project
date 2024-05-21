import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

export const NavbarComp = ({logoutFunc}) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/turns">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/piripiti">Features</Nav.Link>
            <Nav.Link onClick={logoutFunc}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
};
