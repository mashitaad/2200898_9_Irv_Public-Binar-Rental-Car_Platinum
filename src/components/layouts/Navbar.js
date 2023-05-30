import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import { ButtonAuth } from "../ui/ButtonAuth";

export default function NavbarLayout({
  linkWhyUs,
  linkTestimonial,
  linkOurService,
  linkFaq,
}) {
  //   const dispatch = useDispatch()
  const navigate = useNavigate();

  //   fake data
  const auth = {
    token: false,
  };

  const user = {
    email: "fakeemail",
  };
  const handdleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  const handleClick = (link) => {
    if (link.current) {
      link.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          fixed="top"
          expand={expand}
          className={
            colorChange ? "bg-light pt-3 trans-02" : "bg-transparent trans-02"
          }
        >
          <Container fluid>
            <Navbar.Brand href="/" className="logobrand">
              <img src={logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "50%" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="justify-content-end">
                <Nav className="ml-auto navlist">
                  <Nav.Link
                    href="#"
                    onClick={() => handleClick(linkOurService)}
                  >
                    Our Service
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => handleClick(linkWhyUs)}>
                    Why Us
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    onClick={() => handleClick(linkTestimonial)}
                  >
                    Testimonial
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => handleClick(linkFaq)}>
                    FAQ
                  </Nav.Link>

                  {auth.token ? (
                    <NavDropdown
                      title={user.email}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item href="/user/profile">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/user/profile/setting">
                        Setting
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action/3.4"
                        onClick={() => handdleLogout()}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Nav.Link href="/signup">
                      <ButtonAuth text="Register" />
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
