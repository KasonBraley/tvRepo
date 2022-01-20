import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <div className="header">
            <Navbar className="headernavbar">
                <Nav.Item className="navitem">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/search" className="nav-link">
                        Search
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    {props.loggedIn ? (
                        <Link to="/logout" className="nav-link">
                            Logout
                        </Link>
                    ) : (
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    )}
                </Nav.Item>
                <Nav.Item>
                    <Link to="/shows" className="nav-link">
                        Shows
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about" className="nav-link">
                        About Us
                    </Link>
                </Nav.Item>
            </Navbar>
        </div>
    )
}

export default Header
