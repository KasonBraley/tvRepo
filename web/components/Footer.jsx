import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Link from "next/link"

function Footer() {
    return (
        <div className="footer">
            <Navbar className="footernavbar">
                <Nav.Item style={{ marginRight: "20px", fontSize: "20px" }}>
                    <Link href="/" className="nav-link">
                        <a>GitHub</a>
                    </Link>
                </Nav.Item>
            </Navbar>
        </div>
    )
}

export default Footer
