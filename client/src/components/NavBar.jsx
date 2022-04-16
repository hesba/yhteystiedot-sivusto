import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return ( 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Yhteystiedot</Nav.Link>
            <Nav.Link href="#features">Muut</Nav.Link>
            <Nav.Link href="#pricing">Hallinta</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar