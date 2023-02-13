import React from 'react';
import { Card, Container, Dropdown, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';
import { Link } from 'react-router-dom';
import SearchBox from 'components/common/SearchBox';
import avatar57 from 'assets/img/team/40x40/57.webp';
import Avatar from 'components/base/Avatar';
import NavItems from 'components/navbar/navbar-top/NavItems';

const Starter = () => {
  return (
    <Container fluid className="px-0">
      <Navbar className="navbar-vertical" expand="lg"></Navbar>
      <Navbar className="navbar-top" id="navbar-fe" expand="lg">
        <div className="navbar-collapse justify-content-between">
          <div className="navbr-logo">
            <Navbar.Toggle className="hover-bg-transparent navbar-toggler-humburger-icon">
              <span className="navbar-toggle-icon">
                <span className="toggle-line"></span>
              </span>
            </Navbar.Toggle>
            {/* <Navbar.Brand href="#!" className="me-1 me-sm-3 fs--1"> */}
            <Link to="/" className="text-decoration-none" me-1 me-sm-3>
              <div className="d-flex align-items-center">
                <img src={logo} alt="phoenix" width={27} />
                <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
              </div>
            </Link>

            {/* </Navbar.Brand> */}
          </div>
          <SearchBox
            placeholder="Search..."
            className="navbar-top-search-box d-none d-lg-block"
            inputClassName="rounded-pill"
            size="sm"
          />
          <NavItems />
        </div>
      </Navbar>
    </Container>
  );
};

export default Starter;
