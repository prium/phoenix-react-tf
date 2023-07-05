import Logo from 'components/common/Logo';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SearchBox from 'components/common/SearchBox';
import Button from 'components/base/Button';
import ThemeToggler from 'components/common/ThemeToggler';
import classNames from 'classnames';

const NavItem = ({
  label,
  url,
  isLast
}: {
  label: string;
  url: string;
  isLast?: boolean;
}) => {
  return (
    <Nav.Item
      as="li"
      className={classNames({ 'border-bottom border-bottom-lg-0': !isLast })}
    >
      <Nav.Link href={url} className="lh-1 py-0 fs-9 fw-bold py-3">
        {label}
      </Nav.Link>
    </Nav.Item>
  );
};

const DefaultLandingNavbar = () => {
  return (
    <div className="bg-white sticky-top landing-navbar">
      <Navbar className="px-3 px-lg-7 px-xxl-3 container-small" expand="lg">
        <Navbar.Brand as={Link} to="/" className="text-decoration-none">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <div className="border-bottom d-lg-none mb-2">
            <SearchBox
              placeholder="Search"
              className="w-100"
              inputClassName="rounded-pill my-4"
            />
          </div>
          <Nav className="me-auto mb-2 mb-lg-0" as="ul">
            <NavItem label="Home" url="#home" />
            <NavItem label="Features" url="#home" />
            <NavItem label="Blog" url="#home" />
            <NavItem label="Team" url="#home" isLast />
          </Nav>

          <div className="d-grid d-lg-flex gap-4 align-items-center">
            <ThemeToggler className="d-none d-lg-block" />
            <Button className="p-0 text-700 hover-text-1100 d-none d-lg-inline lh-sm">
              <FeatherIcon icon="search" size={20} />
            </Button>
            <Link
              to="#!"
              className="btn btn-link p-0 text-900 order-1 order-lg-0"
            >
              Sign in
            </Link>
            <Link to="#!" className="btn btn-phoenix-primary order-0">
              Sign up
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default DefaultLandingNavbar;
