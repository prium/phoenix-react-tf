import React from 'react';
import { Navbar, Dropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Logo from 'components/common/Logo';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Footer from 'components/footers/Footer';

interface TravelAgencyFooterProps {
  className?: string;
}

interface navItems {
  title: string;
  link: string;
  icon?: IconDefinition;
  transform?: string;
}

const navItems: navItems[] = [
  {
    title: 'Become a Host',
    link: '#!'
  },
  {
    title: 'Blog',
    link: '#!'
  },
  {
    title: 'Career',
    link: '#!'
  },

  {
    title: 'Support',
    link: 'mailto:example@gmail.com',
    icon: faEnvelope,
    transform: 'down-1'
  },
  {
    title: '+01 123 581321',
    link: 'tel:+01123581321',
    icon: faWhatsapp
  }
];

const TravelAgencyFooter = ({ className }: TravelAgencyFooterProps) => {
  return (
    <Container fluid="medium">
      <div className={classNames('d-flex flex-between-center mb-3', className)}>
        <Navbar.Brand as={Link} to={'/'} className="flex-1 flex-grow-0">
          <Logo />
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle
            size="sm"
            variant=""
            className="p-0 d-md-none fs-8 dropdown-caret-none"
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ zIndex: 9999 }}>
            <Dropdown.Item href="">Become a Host</Dropdown.Item>
            <Dropdown.Item href="">Blog</Dropdown.Item>
            <Dropdown.Item href="">Career</Dropdown.Item>
            <Dropdown.Item href="">Support</Dropdown.Item>
            <Dropdown.Item href="">+01 123 581321</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ul className="d-none d-md-flex gap-5 list-unstyled mb-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="lh-1 text-body-tertiary fw-semibold fs-9"
              >
                {item.icon && (
                  <FontAwesomeIcon
                    icon={item.icon}
                    transform={item.transform || undefined}
                    className="me-2"
                  />
                )}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer className="px-0" />
    </Container>
  );
};

export default TravelAgencyFooter;
