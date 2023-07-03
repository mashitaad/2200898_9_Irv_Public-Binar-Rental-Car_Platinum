/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function NavBarPayment(props) {
  const [cookies] = useCookies(['token']);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const token = cookies.token;
  const decoded = jwtDecode(token);
  const handdleLogout = () => {
    Cookies.remove('token', { path: '/' });
    navigate('/signin');
  };
  const splitEmail = (email) => {
    const atIndex = email.indexOf('@');

    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      return username;
    } else {
      throw new Error('Email tidak valid');
    }
  };

  return (
    <>
      <nav className="navbar nav-ant">
        <div className="container-fluid ant-container">
          <div className="col-md-6">
            <div className="ant-brand">
              <img src={''} alt="brand" className="brand-cat img-fluid" />
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center ml-5 nav-customer">
            <div className="nav-admin-search">
              <form
                className="d-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  props.onSubmit(search);
                }}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>

            <div className="user-profile-admin">
              <NavDropdown title={splitEmail(decoded.email)} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/user/profile/setting">setting</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={() => handdleLogout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
          <div className="d-flex ant-main-head align-items-center justify-content-between">
            <button className="btn ant-collapse" type="button">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBarPayment.defaultProps = {
  onSubmit: () => ''
};
