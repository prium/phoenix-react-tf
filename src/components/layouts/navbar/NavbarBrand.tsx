import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarBrand = () => {
  return (
    <Navbar.Brand href="#!" className="me-1 me-sm-3">
      <div className="d-flex align-items-center">
        {/* <img src={logo} alt="phoenix" width={27} /> */}
        <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
      </div>
    </Navbar.Brand>
  );
};

export default NavbarBrand;
