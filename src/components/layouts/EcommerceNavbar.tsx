// @ts-nocheck
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from 'data/e-commerce';
import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Dropdown, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

type NavItem = {
  id: number;
  label: string;
  url: string;
};

const initNavItems: NavItem[] = [
  {
    id: 1,
    label: 'Home',
    url: '#!'
  },
  {
    id: 2,
    label: 'Stores',
    url: '#!'
  },
  {
    id: 3,
    label: 'Products',
    url: '#!'
  },
  {
    id: 4,
    label: 'Wishlist',
    url: '#!'
  },
  {
    id: 5,
    label: 'Shipping Info',
    url: '#!'
  },
  {
    id: 6,
    label: 'Be a vendor',
    url: '#!'
  },
  {
    id: 7,
    label: 'Track order',
    url: '#!'
  },
  {
    id: 8,
    label: 'Checkout',
    url: '#!'
  }
];

const EcommerceNavbar = () => {
  const [navItems, setNavItems] = useState(initNavItems);
  const [dropdownItems, setDropdownItems] = useState([]);

  const containerRef = useRef(null);
  const otherElsRef = useRef(null);
  const navbarRef = useRef(null);
  const dropdownBtnRef = useRef(null);
  const navItemsRef = useRef([]);
  console.log(dropdownItems[0]);

  console.log({ navItems, dropdownItems });

  useEffect(() => {
    window.addEventListener('resize', (e: any) => {
      // const navItemsTotalWidth = navItemsRef.current.reduce((acc, val) => val.clientWidth + acc, 0);
      const otherElsWidth = otherElsRef.current.clientWidth;
      const dropdownWidth = dropdownBtnRef.current.clientWidth;
      const containerWidth = containerRef.current.clientWidth;
      const navbarWidth = navbarRef.current.clientWidth;

      if (navbarWidth + otherElsWidth > containerWidth) {
        setNavItems(items => items.filter((item, index) => index !== items.length - 1));
      } else {
        console.log('sadas');

        if (dropdownItems.length > 0) {
          console.log(dropdownItems.length);

          setNavItems(items => [...items, dropdownItems[0]]);
        }
      }
      // console.log({ navItems, dropdownItems });
    });
  }, []);

  useEffect(() => {
    const items = initNavItems.filter(
      navItem => !navItems.map(navItem => navItem.id).includes(navItem.id)
    );
    setDropdownItems(items);
  }, [navItems]);
  return (
    <Navbar className="ecommerce-navbar bg-white justify-content-between py-0">
      <div className="container-small">
        <div className="d-flex flex-between-center flex-nowrap w-100" ref={containerRef}>
          <Dropdown ref={otherElsRef}>
            <Dropdown.Toggle
              variant=""
              className="text-900 ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none"
            >
              <FontAwesomeIcon icon="bars" className="me-2" />
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu className="border py-0 category-dropdown-menu ms-2">
              <Card className="border-0" style={{ maxHeight: 657 }}>
                <Card.Body className="p-6 pb-3">
                  <Row className="gx-7 gy-5 mb-5">
                    {categories.map(category => (
                      <Col xs={12} sm={6} md={4} key={category.title}>
                        <div className="d-flex align-items-center mb-3">
                          <FeatherIcon
                            icon={category.icon}
                            className="text-primary me-2"
                            style={{ strokeWidth: 3 }}
                            size={16}
                          />
                          <h6 className="text-1000 mb-0 text-nowrap">{category.title}</h6>
                        </div>
                        <div className="ms-n2">
                          {category.sections.map(section => (
                            <Link
                              key={section.label}
                              to={section.url}
                              className="text-black d-block mb-1 text-decoration-none hover-bg-100 px-2 py-1 rounded-2"
                            >
                              {section.label}
                            </Link>
                          ))}
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div className="text-center border-top pt-3">
                    <Link className="fw-bold" to="#!">
                      See all Categories
                      <FontAwesomeIcon icon="angle-right" className="ms-1" />
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Dropdown.Menu>
          </Dropdown>
          <Nav as="ul" className="justify-content-end align-items-center gap-5" ref={navbarRef}>
            {navItems.map((item, index) => (
              <Nav.Item
                className="gap-3"
                key={item.id}
                ref={el => (navItemsRef.current[index] = el)}
              >
                <Nav.Link key={item.id} as={Link} to={item.url} className="px-0">
                  {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="gap-3" ref={dropdownBtnRef}>
              <Nav.Link as={Link} to="#!" className="px-0">
                More
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};

export default EcommerceNavbar;
