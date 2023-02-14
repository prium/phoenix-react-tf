import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import NavbarTop from 'components/layouts/navbar/navbar-top/NavbarTop';

const Starter = () => {
  return (
    <Container fluid className="px-0">
      <Navbar className="navbar-vertical" expand="lg"></Navbar>
      <NavbarTop />
    </Container>
  );
};

export default Starter;
