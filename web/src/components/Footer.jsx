import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Navbar className="footernavbar">
          <Nav.Item>
            <Navbar.Text style={{ marginRight: "30px", fontSize: "20px" }}>
              {"\u00A9 2021 tvRepo, LLC"}
            </Navbar.Text>
          </Nav.Item>
          <Nav.Item style={{ marginRight: "20px", fontSize: "20px" }}>
            <Link to="/about">Contact Us</Link>
          </Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
