import Logo from 'components/common/Logo';
import { Col, Dropdown, Nav, Navbar, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import NotificationDropdownMenu from '../nav-items/NotificationDropdownMenu';
import { useAppContext } from 'providers/AppProvider';
import ProfileDropdownMenu from '../nav-items/ProfileDropdownMenu';
import SearchBox from 'components/common/SearchBox';

const EcommerceTopbar = () => {
  const {
    config: { theme },
    toggleTheme
  } = useAppContext();
  return (
    <div className="container-small">
      <div className="ecommerce-topbar">
        <Navbar className="px-0">
          <Row className="gx-0 gy-2 w-100 flex-between-center">
            <Col xs="auto">
              <Link to="/" className="text-dcoration-none">
                <Logo />
              </Link>
            </Col>
            <Col xs="auto" className="order-md-1">
              <Nav as="ul" className="navbar-nav-icons flex-row me-n2">
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

                <Nav.Item as="li">
                  <Nav.Link className="px-2 icon-indicator icon-indicator-primary">
                    <FeatherIcon icon="shopping-cart" size={20} />
                    <span className="icon-indicator-number">3</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Dropdown autoClose="outside">
                    <Dropdown.Toggle
                      as={Link}
                      to="#!"
                      className="dropdown-caret-none nav-link icon-indicator icon-indicator-sm icon-indicator-danger"
                      variant=""
                    >
                      <FeatherIcon icon="bell" size={20} />
                    </Dropdown.Toggle>
                    <NotificationDropdownMenu />
                  </Dropdown>
                </Nav.Item>

                <Nav.Item as="li">
                  <Dropdown autoClose="outside">
                    <Dropdown.Toggle
                      as={Link}
                      to="#!"
                      className="dropdown-caret-none nav-link lh-1"
                      variant=""
                    >
                      <FeatherIcon icon="user" size={20} />
                    </Dropdown.Toggle>
                    <ProfileDropdownMenu />
                  </Dropdown>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={12} md={6}>
              <SearchBox
                placeholder="Search..."
                className="ecommerce-search-box w-100"
                inputClassName="rounded-pill"
                size="sm"
                // style={{ width: '25rem' }}
              />
            </Col>
          </Row>
        </Navbar>
      </div>
    </div>
  );
};

export default EcommerceTopbar;
