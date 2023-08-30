import { useAppContext } from 'providers/AppProvider';
import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarToggleButton = () => {
  const {
    config: { openNavbarVertical },
    setConfig
  } = useAppContext();

  const toggleOpenNavbarVertical = () => {
    setConfig({
      openNavbarVertical: !openNavbarVertical
    });
  };

  useEffect(() => {
    return () => {
      setConfig({
        openNavbarVertical: false
      });
    };
  }, []);

  return (
    <Navbar.Toggle
      className="hover-bg-transparent navbar-toggler-humburger-icon"
      onClick={toggleOpenNavbarVertical}
    >
      <span className="navbar-toggle-icon">
        <span className="toggle-line" />
      </span>
    </Navbar.Toggle>
  );
};

export default NavbarToggleButton;
