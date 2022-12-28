import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./NavBar.css";
const NavBar = () => {
  const { logOutUser, user } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <img
            src="https://i.ibb.co/XSTmZPp/Next-To-Do-white-removebg-preview.png"
            width="200"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        {/*  */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-white">
            <Link to="/addTask" className="text-white m-1">
              Add Task
            </Link>
            <Link to="/my-task" className="text-white m-1">
              My Task
            </Link>
            <Link to="completed-task" className="text-white m-1">
              Completed Task
            </Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link to="sign-in" className="text-white m-1">
              SignIn
            </Link>
            <Link to="register" className="text-white m-1">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
