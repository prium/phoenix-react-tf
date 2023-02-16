import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Collapse, Nav, Navbar } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Page, routes } from 'sitemap';
import { cleanText } from 'helpers/utils';

const NavItem = ({ page }: { page: Page }) => {
  return (
    <div className="nav-item-wrapper">
      <Nav.Link href="#!" className="dropdown-indicator label-1">
        <div className="d-flex align-items-center">
          <span className="nav-link-icon">
            <FeatherIcon icon={page.icon} size={16} />
          </span>
          <span className="nav-link-text-wrapper">
            <span className="nav-link-text">{page.name}</span>
          </span>
        </div>
      </Nav.Link>
    </div>
  );
};

const CollapsableNavItem = ({ page }: { page: Page }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item-wrapper">
      <Nav.Link onClick={() => setOpen(!open)} className="dropdown-indicator label-1">
        <div className="d-flex align-items-center">
          <div className="dropdown-indicator-icon">
            <FontAwesomeIcon icon="caret-right" />
          </div>
          <span className="nav-link-icon">
            <FeatherIcon icon={page.icon} size={16} />
          </span>
          <span className="nav-link-text">{cleanText(page.name)}</span>
        </div>
      </Nav.Link>
      <div className="parent-wrapper label-1">
        <Collapse in={open} className="nav parent">
          <div>
            {page.pages?.map(item => (
              <Nav.Item>
                <Nav.Link>
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text">{cleanText(item.name)}</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

const NavbarVerical = () => {
  console.log({ routes });

  return (
    <Navbar className="navbar-vertical" expand="lg">
      <Navbar.Collapse id="navbarVerticalCollapse">
        <div className="navbar-vertical-content">
          <Nav className="flex-column" as="ul" id="navbarVerticalNav">
            {routes.map(route => (
              <Nav.Item>
                <p className="navbar-vertical-label">{cleanText(route.label)}</p>
                {route.pages.map(page =>
                  page.pages ? <CollapsableNavItem page={page} /> : <NavItem page={page} />
                )}
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarVerical;
