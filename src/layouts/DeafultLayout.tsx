import NavbarHorizontal from 'components/layouts/navbar/navbar-horizontal/NavbarHorizontal';
import NavbarSlim from 'components/layouts/navbar/navbar-slim/NavbarSlim';
import NavbarTop from 'components/layouts/navbar/navbar-top/NavbarTop';
import NavbarVertical from 'components/layouts/navbar/navbar-vertical/NavbarVertical';
import { AppContext } from 'providers/AppProvider';
import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const DeafultLayout = () => {
  const { config, setConfig } = useContext(AppContext);

  return (
    <Container fluid className="px-0">
      {config.navbarPosition !== 'horizontal' && <NavbarVertical />}
      {config.navbarPosition === 'horizontal' ? (
        <NavbarHorizontal />
      ) : (
        <>
          {config.navbarTopShape === 'default' && <NavbarTop />}
          {config.navbarTopShape === 'slim' && <NavbarSlim />}
        </>
      )}

      <div className="content">
        <Button
          onClick={() => {
            setConfig({
              navbarTopShape: 'default',
              navbarPosition: 'vertical'
            });
          }}
        >
          Default Topnav
        </Button>
        <Button
          onClick={() => {
            setConfig({
              navbarTopShape: 'slim',
              navbarPosition: 'vertical'
            });
          }}
        >
          Slim Topnav
        </Button>
        <Button
          onClick={() => {
            setConfig({
              navbarPosition: 'horizontal'
            });
          }}
        >
          Horizontal Nav
        </Button>
        <Outlet />
      </div>
    </Container>
  );
};

export default DeafultLayout;
