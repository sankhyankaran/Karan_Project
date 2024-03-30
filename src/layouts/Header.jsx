import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import "../assets/css/Header.css";
import { Image } from "react-bootstrap";
import "../assets/css/button.css";
import ModalButton from "../components/Modals";
import { useState } from "react";


function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="container-fluid">
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to="">
              <Image
                src={logo}
                className="img-fluid"
                alt="Logo"
                style={{ height: "30px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="nav_item">
            <Nav className="">
              <ul className="navbar-nav">
                {/* Add the nav-items in reverse order to move them to the end */}
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Resources
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="#">Blog</Link>
                    </li>
                    <li>
                      <Link to="#">Video</Link>
                    </li>
                    <li>
                      <Link to="#">Infographics</Link>
                    </li>
                    <li>
                      <Link to="#">Case Study</Link>
                    </li>
                    <li>
                      <Link to="#">Industry Reports</Link>
                    </li>
                    <li>
                      <Link to="#">Feature Book</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Company
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Partnership</Link>
                    </li>
                    <li>
                      <Link to="#">How we Work</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Business Models
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Live Demos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Industry
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Services
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="#">Preminum Custom Solutiom</Link>
                    </li>
                    <li>
                      <Link to="#">Blockchain Development</Link>
                    </li>
                    <li>
                      <Link to="#">Mobile App Solution</Link>
                    </li>
                    <li>
                      <Link to="#">Fintech Development</Link>
                    </li>
                    <li>
                      <Link to="#">Enterprise Software Development</Link>
                    </li>
                    <li>
                      <Link to="#">UI/Ux Design-Allurive</Link>
                    </li>
                    <li>
                      <Link to="#">Web Development</Link>
                    </li>
                    <li>
                      <Link to="#">Growth & Marketing</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <span>
                <div className="btn-containers d-flex justify-content-start">
                  <div className="button_news">
                    <button className="pulses" onClick={handleShow}>
                      Get in Touch
                    </button>
                  </div>
                </div>
              </span>
              <ModalButton showModal={showModal} handleClose={() => setShowModal(false)} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
