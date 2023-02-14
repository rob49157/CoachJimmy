import React from 'react'
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-light shadow mb-3  navbar-expand-lg "  alt="Max-width 100%" >
    <Container>
      <Nav className="me-auto " >
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/Bike" as={NavLink}>
        Bike
        </Nav.Link>
        <Nav.Link to="/Run" as={NavLink}>
        Run
        </Nav.Link>
        <Nav.Link to="/Swim" as={NavLink}>
        Swim 
        </Nav.Link>
        <Nav.Link to="/WeightTraining" as={NavLink}>
        Weight Training
        </Nav.Link>
        
      
      
      
      </Nav>
     
        
     
    </Container>
  </NavbarBs>
    
 
  

);
  
}

export default Navbar