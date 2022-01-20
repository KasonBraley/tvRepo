import { useContext } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Link from "next/link"

import { ShowContext } from "../context/showContext.jsx"

function Header() {
    let { loggedIn } = useContext(ShowContext)
    return (
        <div className="header">
            <Navbar className="headernavbar">
                <Nav.Item className="navitem">
                    <Link href="/" className="nav-link">
                        <a>Home</a>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/search" className="nav-link">
                        <a>Search</a>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    {loggedIn ? (
                        <Link href="/logout" className="nav-link">
                            <a>Logout</a>
                        </Link>
                    ) : (
                        <Link href="/login" className="nav-link">
                            <a>Login</a>
                        </Link>
                    )}
                </Nav.Item>
                <Nav.Item>
                    <Link href="/shows" className="nav-link">
                        Shows
                    </Link>
                </Nav.Item>
            </Navbar>
        </div>
    )
}

export default Header
