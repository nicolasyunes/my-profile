import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
const NavBar= () =>{
return(
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">YN</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Contacto</Nav.Link>
      <Nav.Link href="#pricing">Skills</Nav.Link>
      <Nav.Link href="#pricing">Perfil</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
</>)
}

export default NavBar