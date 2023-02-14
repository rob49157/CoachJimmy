import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Title() {
  return (
    <>
    
 
  <Navbar bg="danger" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
         
          className="d-inline-block align-top"
        />{' '}
        Coach Jimmy
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>

);
  
}

export default Title