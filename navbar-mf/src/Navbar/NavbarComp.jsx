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
          <Navbar.Brand as={NavLink} to="/">TurnoSmart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/turns">Turnos</Nav.Link>
            <Nav.Link as={NavLink} to="/adminTurns">Admin Turns</Nav.Link>
            <Nav.Link as={NavLink} to="/create">Create</Nav.Link>
            <Nav.Link as={NavLink} to="/edit">Edit</Nav.Link>
            <Nav.Link as={NavLink} to="/delete">Delete</Nav.Link>
            <Nav.Link onClick={logoutFunc}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
};
