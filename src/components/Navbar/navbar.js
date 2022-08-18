import React from "react";
import "./navbar.css";
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import Logo from "../../images/logo-sw-.png";
import {NavLink} from 'react-router-dom';
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
          <NavLink className='nav-link' style={{color: "white"}}  to="/">Inicio</NavLink>
          <NavLink className='nav-link' style={{color: "white"}} to="/Personajes">Personajes</NavLink>
          <NavLink className='nav-link' style={{color: "white"}} to="/Planetas">Planetas</NavLink>
          </Nav>
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;