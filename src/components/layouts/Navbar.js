/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png';
import { useNavigate } from 'react-router-dom';
import './styles/navbar.css';
import { ButtonAuth } from '../ui/ButtonAuth';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import personImage from '../../assets/person/default.webp';
import { CgProfile } from 'react-icons/cg';
import { FaShoppingCart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

export default function NavbarLayout({ linkWhyUs, linkTestimonial, linkOurService, linkFaq }) {
  const [cookies] = useCookies(['token']);
  const [user, setUser] = useState('');
  const token = cookies.token;

  const navigate = useNavigate();

  const splitEmail = (email) => {
    const atIndex = email.indexOf('@');

    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      return username;
    } else {
      throw new Error('Email tidak valid');
    }
  };

  useEffect(() => {
    if (token) {
      const tokenDecode = jwtDecode(token);
      setUser(splitEmail(tokenDecode.email));
    }
  }, []);

  const handdleLogout = () => {
    Cookies.remove('token', { path: '/' });
    navigate('/signin');
  };
  const handleClick = (link) => {
    if (link.current) {
      link.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          fixed="top"
          expand={expand}
          className={colorChange ? 'bg-light pt-3 trans-02 pb-3' : 'bg-transparent trans-02'}>
          <Container fluid>
            <Navbar.Brand href="/" className="logobrand">
              <img src={logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: '50%' }}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>BCR</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="justify-content-end">
                <Nav className="ml-auto navlist">
                  <Nav.Link href="#testcoy" onClick={() => handleClick(linkOurService)}>
                    Our Service
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => handleClick(linkWhyUs)}>
                    Why Us
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => handleClick(linkTestimonial)}>
                    Testimonial
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => handleClick(linkFaq)}>
                    FAQ
                  </Nav.Link>

                  {user ? (
                    <>
                      <div className="image-person-nav">
                        <img
                          src={personImage}
                          style={{
                            width: '25px',
                            height: '25px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <NavDropdown title={user} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/user/profile">
                          <CgProfile /> Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/order/status">
                          {' '}
                          <FaShoppingCart /> Pesanan Saya
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" onClick={() => handdleLogout()}>
                          <FiLogOut /> Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </>
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
