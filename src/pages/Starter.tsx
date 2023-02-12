import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';

const Starter = () => {
  return (
    <>
      <Navbar className="navbar-vertical" expand="lg"></Navbar>
      <Navbar className="navbar-top" expand="lg">
        <div className="navbar-collapse justify-content-between">
          <div className="navbr-logo">
            <Navbar.Toggle className="hover-bg-transparent navbar-toggler-humburger-icon">
              <span className="navbar-toggle-icon">
                <span className="toggle-line"></span>
              </span>
            </Navbar.Toggle>
            <Navbar.Brand href="#" className="me-1 me-sm-3">
              <div className="d-flex align-items-center">
                <img src={logo} alt="phoenix" width={27} />
                <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
              </div>
            </Navbar.Brand>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Starter;
