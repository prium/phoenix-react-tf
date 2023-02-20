import React, { useContext, useEffect } from 'react';
import { AppContext } from 'providers/AppProvider';
import { Navbar } from 'react-bootstrap';
import NavItemsSlim from './NavItemsSlim';

const NavbarSlim = () => {
  const {
    config: { openNavbarVertical },
    setConfig
  } = useContext(AppContext);

  const toggleOpenNavbarVertical = () => {
    setConfig({
      openNavbarVertical: !openNavbarVertical
    });
  };

  useEffect(() => {
    document.body.classList.add('nav-slim');
    return () => {
      document.body.classList.remove('nav-slim');
    };
  }, []);

  return (
    <Navbar variant="" className="navbar-top navbar-slim" expand>
      <div className="collapse navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <Navbar.Toggle
            className="hover-bg-transparent navbar-toggler-humburger-icon"
            onClick={toggleOpenNavbarVertical}
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line" />
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
