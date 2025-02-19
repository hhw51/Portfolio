import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {[
              { to: "/", icon: <AiOutlineHome />, text: "Home" },
              { to: "/about", icon: <AiOutlineUser />, text: "About" },
              { to: "/project", icon: <AiOutlineFundProjectionScreen />, text: "Projects" },
              { to: "/resume", icon: <CgFileDocument />, text: "Resume" },
            ].map((item, index) => (
              <Nav.Item key={index} className="nav-item-wrapper">
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => updateExpanded(false)}
                  className="nav-link-hover"
                >
                  {React.cloneElement(item.icon, { className: "nav-icon" })}
                  <span className="nav-text">{item.text}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/hhw51/"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork className="fork-icon" />
                <AiFillStar className="star-icon" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
