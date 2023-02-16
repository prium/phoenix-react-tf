import NavbarTop from 'components/layouts/navbar/navbar-top/NavbarTop';
import NavbarVerical from 'components/layouts/navbar/navbar-vertical/NavbarVerical';
import React, { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const DeafultLayout = () => {
  return (
    <Container fluid className="px-0">
      <NavbarVerical />
      <NavbarTop />
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

export default DeafultLayout;
