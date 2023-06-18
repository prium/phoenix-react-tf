import Logo from 'components/common/Logo';
import { Col, Dropdown, Nav, Navbar, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import NotificationDropdownMenu from '../nav-items/NotificationDropdownMenu';
import { useAppContext } from 'providers/AppProvider';
import ProfileDropdownMenu from '../nav-items/ProfileDropdownMenu';
import SearchBox from 'components/common/SearchBox';

const DefaultLandingNavbar = () => {
  const {
    config: { theme },
    toggleTheme
  } = useAppContext();
  return (
    <div className="bg-white sticky-top landing-navbar">
      <Navbar className="px-3 px-lg-7 px-xxl-3 container-small" expand="lg">
        <Link to="/" className="text-decoration-none">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto mb-2 mb-lg-0" as="ul">
            <Nav.Item as="li" className="border-bottom border-bottom-lg-0">
              <Nav.Link href="#home" className="lh-1 py-0 fs-9 fw-bold py-3">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="border-bottom border-bottom-lg-0">
              <Nav.Link href="#home" className="lh-1 py-0 fs-9 fw-bold py-3">
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="border-bottom border-bottom-lg-0">
              <Nav.Link href="#home" className="lh-1 py-0 fs-9 fw-bold py-3">
                Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="border-bottom border-bottom-lg-0">
              <Nav.Link href="#home" className="lh-1 py-0 fs-9 fw-bold py-3">
                Team
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav.Item as="li" className="d-flex align-items-center">
            <Nav.Link onClick={() => toggleTheme()} className="py-0">
              <div className="theme-control-toggle">
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id="ThemeColor">
                      {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                    </Tooltip>
                  }
                >
                  <div className="theme-control-toggle-label">
                    <FeatherIcon icon={theme === 'dark' ? 'moon' : 'sun'} size={16} />
                  </div>
                </OverlayTrigger>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default DefaultLandingNavbar;
