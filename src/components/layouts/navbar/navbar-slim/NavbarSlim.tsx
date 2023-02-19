import React, { useContext, useEffect } from 'react';
import { AppContext } from 'providers/AppProvider';
import { Navbar } from 'react-bootstrap';
import NavItemsSlim from './NavItemsSlim';

const NavbarSlim = () => {
  const { config, setConfig } = useContext(AppContext);

  useEffect(() => {
    setConfig({
      bodyClass: 'nav-slim'
    });
  }, []);
  return (
    <Navbar variant="" className="navbar-top navbar-slim" expand="lg">
      <div className="collapse navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <Navbar.Toggle className="hover-bg-transparent navbar-toggler-humburger-icon">
            <span className="navbar-toggle-icon">
              <span className="toggle-line"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Brand href="/">
            phoenix <span className="text-1000 d-none d-sm-inline">slim</span>
          </Navbar.Brand>
        </div>
        <NavItemsSlim />
      </div>
    </Navbar>
  );
};

export default NavbarSlim;
