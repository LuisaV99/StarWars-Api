import React from "react";
import "./navbar.css";
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import Logo from "../../images/logo-sw-.png";
import {Link} from 'react-router-dom';
// import { Collapse } from "react-bootstrap";

function NavbarApp() {
  return (
    <Navbar bg='black' expand='lg'className="p-2">
          <Navbar.Brand href="#home">
          <img
              src={Logo}
              width="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"/>
              {/* Compra Juegos */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Link className="nav-link" style={{color:"white"}} to="/">Inicio</Link>
          <Link className="nav-link" style={{color:"white"}}>Capitulo</Link>
          <Link className="nav-link" style={{color:"white"}}to="/page">Personajes</Link>
          <Link className="nav-link" style={{color:"white"}} to="/page">Planetas</Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;