import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navbar.css'

class NavBar extends Component {
    render() {

        return (
            <Navbar className="navibar" variant="dark">
                <Container>
                    <Navbar.Brand to="/">CGI</Navbar.Brand>
                    <ul id="Nav_menu">
                        <li class="me-3">
                            <NavLink
                                to="/"
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'teal' }}
                            >
                                Yhteystiedot
                            </NavLink>
                        </li>
                        <li class="me-3">
                            <NavLink
                                to="/supportteams"
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'teal' }}
                            >
                                Muokkaa tukitiimejä
                            </NavLink>
                        </li>
                        <li class="me-3">
                            <NavLink
                                to="/addcc"
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'teal' }}
                            >
                                Lisää yritys
                            </NavLink>
                        </li>
                        <li class="me-3">
                            <NavLink
                                to="/addcp"
                                className="Nav_link"
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'teal' }}
                            >
                                Lisää yhteystieto
                            </NavLink>
                        </li>

                    </ul>
                </Container>
            </Navbar>
        )
    }
}


export default NavBar