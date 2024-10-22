import Button from 'components/base/Button';
import Logo from 'components/common/Logo';
import ThemeToggler from 'components/common/ThemeToggler';
import React, { useEffect, useRef, useState } from 'react';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { useBreakpoints } from 'providers/BreakpointsProvider';

interface SubMenuItems {
  label: string;
  url: string;
}
interface NavItem {
  label: string;
  url?: string;
  items?: SubMenuItems[];
}
interface dropdownItemsProps {
  label: string;
  items: SubMenuItems[];
}

const navItems: NavItem[] = [
  {
    label: 'Hotel',
    items: [
      {
        label: 'Homepage',
        url: '/apps/travel-agency/hotel/customer/homepage'
      },
      {
        label: 'Hotel details',
        url: '/apps/travel-agency/hotel/customer/hotel-compare/'
      },
      {
        label: 'Hotel compare',
        url: '/apps/travel-agency/hotel/customer/hotel-compare/'
      },
      {
        label: 'Checkout',
        url: '/apps/travel-agency/hotel/checkout/'
      },
      {
        label: 'Payment',
        url: '/apps/travel-agency/hotel/payment/'
      }
    ]
  },
  {
    label: 'Flight',
    items: [
      {
        label: 'Homepage',
        url: '/apps/travel-agency/flight/homepage'
      },
      {
        label: 'Booking',
        url: '/apps/travel-agency/flight/homepage'
      },
      {
        label: 'Payment',
        url: '/apps/travel-agency/flight/homepage'
      }
    ]
  },
  {
    label: 'Trip',
    items: [
      {
        label: 'Homepage',
        url: '/apps/travel-agency/flight/homepage'
      },
      {
        label: 'Trip Details',
        url: '/apps/travel-agency/flight/homepage'
      },
      {
        label: 'Checkout',
        url: '/apps/travel-agency/flight/homepage'
      }
    ]
  },
  {
    label: 'Event',
    url: '#!'
  },
  {
    label: 'Package',
    url: '#!'
  }
];

const NavDropdownItems = ({ label, items }: dropdownItemsProps) => {
  const [show, setShow] = useState(false);
  const { breakpoints } = useBreakpoints();
  const { pathname } = useLocation();

  const handleMouseEnter = () => {
    if (breakpoints.up('lg')) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (breakpoints.up('lg')) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      setShow(false);
    }
  }, [pathname]);

  return (
    <Dropdown
      as="li"
      className="nav-item dropdown-hoverable"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      autoClose="outside"
      onToggle={() => setShow(!show)}
      show={show}
    >
      <Dropdown.Toggle as={Link} className="nav-link fs-8 fw-bold " to="#!">
        {label}
      </Dropdown.Toggle>
      <Dropdown.Menu className="navbar-dropdown-caret mt-lg-3">
        {/* @ts-ignore */}
        {items.map((dropdownItem, index) => (
          <Dropdown.Item as={Link} to={dropdownItem.url} key={index}>
            {dropdownItem.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const NavbarMain = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const toggleShadowClass = () => {
      if (window.scrollY > 300) {
        containerRef.current?.classList.add('navbar-shadow');
      } else {
        containerRef.current?.classList.remove('navbar-shadow');
      }
    };

    document.addEventListener('scroll', () => toggleShadowClass());

    return () => document.removeEventListener('scroll', toggleShadowClass);
  }, []);
  return (
    <div className="bg-body sticky-top" ref={containerRef}>
      <Navbar expand="lg" className="navbar-landing container-medium">
        <Navbar.Brand
          as={Link}
          to="/"
          className="flex-1 flex-lg-grow-0 me-lg-8 me-xl-13"
        >
          <Logo />
        </Navbar.Brand>
        <div className="d-flex align-items-center gap-2 gap-sm-3 gap-md-4 my-2 order-lg-1">
          <ThemeToggler />
          <Button
            to="#!"
            as={Link}
            variant="link"
            className="text-body-tertiary p-0"
          >
            <FeatherIcon icon="map-pin" size={18} />
          </Button>
          <Button
            to="#!"
            as={Link}
            variant="link"
            className="text-body-tertiary p-0"
          >
            <FeatherIcon icon="bell" size={20} />
          </Button>
          <Button
            to="#!"
            as={Link}
            variant="link"
            className="text-body-tertiary p-0"
          >
            <FeatherIcon icon="log-in" size={20} />
          </Button>
          <Button
            to="#!"
            as={Link}
            variant="link"
            className="text-body-tertiary p-0 me-2 me-lg-0"
          >
            <FeatherIcon icon="user" size={20} />
          </Button>
        </div>

        <Navbar.Toggle className="fs-8 ps-1 ps-sm-3 pe-0 border-0">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav as="ul" className="me-auto mt-3 mt-lg-0 travel-nav-top">
            {navItems.map((item, index) => (
              <>
                {item.items ? (
                  <NavDropdownItems label={item.label} items={item.items} />
                ) : (
                  <Nav.Item
                    as="li"
                    key={index}
                    className={classNames({
                      'border-bottom border-translucent border-bottom-lg-0':
                        index !== navItems.length - 1
                    })}
                  >
                    <Nav.Link as={Link} to="#!" className="fw-bold">
                      {item.label}
                    </Nav.Link>
                  </Nav.Item>
                )}
              </>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
