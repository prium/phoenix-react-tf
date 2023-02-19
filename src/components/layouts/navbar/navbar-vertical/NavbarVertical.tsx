import { Button, Nav, Navbar } from 'react-bootstrap';
import { routes } from 'sitemap';
import { cleanText } from 'helpers/utils';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import { UilArrowFromRight, UilLeftArrowToLeft } from '@iconscout/react-unicons';

const NavbarVerical = () => {
  return (
    <Navbar className="navbar-vertical" expand="lg" variant="">
      <Navbar.Collapse id="navbarVerticalCollapse">
        <div className="navbar-vertical-content">
          <Nav className="flex-column" as="ul" id="navbarVerticalNav">
            {routes.map(route => (
              <Nav.Item key={route.label}>
                {!route.labelDisabled && (
                  <p className="navbar-vertical-label">{cleanText(route.label)}</p>
                )}
                <NavbarVerticalMenu level={1} routes={route.pages} />
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </Navbar.Collapse>
      <div className="navbar-vertical-footer">
        <Button
          variant=""
          className="navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"
        >
          <UilLeftArrowToLeft size={16} className="navbar-vertical-collapse-icon mb-1" />
          <UilArrowFromRight size={16} className="navbar-vertical-collapsed-icon mb-1" />
          <span className="navbar-vertical-footer-text ms-2">Collapsed View</span>
        </Button>
      </div>
    </Navbar>
  );
};

export default NavbarVerical;
