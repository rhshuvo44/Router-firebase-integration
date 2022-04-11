import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import './Header';

const Header = () => {
  const {user,logOut}=useFirebase()
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Router firebase Intergration</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/orders">Orders</Link>
              <Link className="nav-link" to="/register">Register</Link>
              
                <span className="mx-3 mt-2">{user?.displayName && user.displayName}</span>
              
              {
              user?.uid ? <button className="nav-link" onClick={logOut}>LogOut</button> : <Link className="nav-link" to="/login">LogIn</Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
