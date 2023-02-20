import NavbarSlim from 'components/layouts/navbar/navbar-slim/NavbarSlim';
import NavbarTop from 'components/layouts/navbar/navbar-top/NavbarTop';
import NavbarVertical from 'components/layouts/navbar/navbar-vertical/NavbarVertical';
import { AppContext } from 'providers/AppProvider';
import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const DeafultLayout = () => {
  const { config, setConfig } = useContext(AppContext);

  console.log({ config });

  return (
    <Container fluid className="px-0">
      <NavbarVertical />
      {config.navbarTopShape === 'default' && <NavbarTop />}
      {config.navbarTopShape === 'slim' && <NavbarSlim />}

      <div className="content">
        <Button
          onClick={() => {
            if (config.navbarTopShape === 'default') {
              setConfig({
                navbarTopShape: 'slim'
              });
            } else {
              setConfig({
                navbarTopShape: 'default'
              });
            }
          }}
        >
          {' '}
          Toggle topnav
        </Button>
        <Outlet />
      </div>
    </Container>
  );
};

export default DeafultLayout;
