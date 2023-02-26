import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { AppContext } from 'providers/AppProvider';
import React, { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import NavigationType from './NavigationType';
import HorizontalNavbarShape from './HorizontalNavbarShape';
import ColorScheme from './ColorScheme';
import VerticalNavbarAppearance from './VerticalNavbarAppearance';
import TopNavbarAppearance from './TopNavbarAppearance';
import RTLMode from './RTLMode';

const SettingsPanel = () => {
  const {
    config: { showSettingPanel },
    setConfig,
    configDispatch
  } = useContext(AppContext);

  const handleClose = () => {
    setConfig({
      showSettingPanel: !showSettingPanel
    });
  };
  const handleResetToDefault = () => {
    configDispatch({
      type: 'RESET'
    });
  };

  return (
    <Offcanvas
      className="settings-panel border-0"
      show={showSettingPanel}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Header className="align-items-start border-bottom flex-column">
        <div className="pt-1 w-100 mb-6 d-flex justify-content-between align-items-start">
          <div>
            <h5 className="mb-2 me-2 lh-sm">
              <FontAwesomeIcon icon="palette" className="me-2 fs-0" />
              Theme Customizer
            </h5>
            <p className="mb-0 fs--1">Explore different styles according to your preferences</p>
          </div>
          <button className="btn p-1 fw-bolder">
            <FontAwesomeIcon icon="times" className="fs-0" />
          </button>
        </div>
        <Button variant="phoenix-secondary" className="w-100" onClick={handleResetToDefault}>
          <FontAwesomeIcon icon="arrows-rotate" className="me-2 fs--2" />
          Reset to default
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-card">
        <ColorScheme />
        <RTLMode />
        <NavigationType />
        <VerticalNavbarAppearance />
        <HorizontalNavbarShape />
        <TopNavbarAppearance className="mb-5" />
        <Button
          as="a"
          href="https://themes.getbootstrap.com/product/phoenix-admin-dashboard-webapp-template/"
          className="w-100 mb-3"
        >
          Purchase template
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SettingsPanel;
