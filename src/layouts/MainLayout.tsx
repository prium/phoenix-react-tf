import Footer from 'components/layouts/Footer';
import NavbarTopHorizontal from 'components/layouts/navbar/navbar-horizontal/NavbarTopHorizontal';
import NavbarTopDefault from 'components/layouts/navbar/navbar-top/NavbarTopDefault';
import NavbarVertical from 'components/layouts/navbar/navbar-vertical/NavbarVertical';
import { useAppContext } from 'providers/AppProvider';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const {
    config: { navbarPosition, theme }
  } = useAppContext();
  const [outletkey, setOutletkey] = useState<number | null>(null);

  useEffect(() => {
    setOutletkey(Math.random());
  }, [theme]);

  return (
    <Container fluid className="px-0">
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && <NavbarVertical />}
      {navbarPosition === 'vertical' && <NavbarTopDefault />}
      {(navbarPosition === 'horizontal' || navbarPosition === 'combo') && <NavbarTopHorizontal />}

      <div className="content">
        <Outlet key={outletkey} />
        <Footer className="position-absolute" />
      </div>
    </Container>
  );
};

export default MainLayout;
