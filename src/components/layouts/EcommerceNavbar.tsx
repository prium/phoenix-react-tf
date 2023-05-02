import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from 'data/e-commerce';
import React from 'react';
import { Card, Col, Dropdown, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

type NavItem = {
  id: number;
  label: string;
  url: string;
};

const navItems: NavItem[] = [
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
  return (
    <Navbar className="ecommerce-navbar bg-white justify-content-between py-0">
      <div className="container-small d-flex flex-between-center">
        <Dropdown>
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
        <Nav as="ul" className="justify-content-end align-items-center gap-5">
          {navItems.map(item => (
            <Nav.Item className="gap-3" key={item.id}>
              <Nav.Link key={item.id} as={Link} to={item.url} className="px-0">
                {item.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </Navbar>
  );
};

export default EcommerceNavbar;
