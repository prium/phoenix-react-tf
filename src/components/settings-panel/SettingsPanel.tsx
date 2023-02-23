import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { AppContext } from 'providers/AppProvider';
import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { Col, Form, Offcanvas, Row } from 'react-bootstrap';
import defaultLight from 'assets/img/generic/default-light.png';
import defaultDark from 'assets/img/generic/default-dark.png';
import RadioItem from './RadioItem';

const SettingsPanel = () => {
  const {
    config: { theme, showSettingPanel },
    setConfig
  } = useContext(AppContext);

  const handleClose = () => {
    setConfig({
      showSettingPanel: !showSettingPanel
    });
  };

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: 'dark' | 'light' } = e.target;
    setConfig({
      theme: value
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
        <Button variant="phoenix-secondary" className="w-100">
          <FontAwesomeIcon icon="arrows-rotate" className="me-2 fs--2" />
          Reset to default
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-card">
        <div className="setting-panel-item mt-0">
          <h5 className="setting-panel-item-title">Color Scheme</h5>
          <Row className="gx-2">
            <Col xs={6}>
              <RadioItem
                label="Light"
                name="theme"
                value="light"
                thumb={defaultLight}
                defaultChecked={theme === 'light'}
                handleChange={handleThemeChange}
              />
            </Col>
            <Col xs={6}>
              <RadioItem
                label="Dark"
                name="theme"
                value="dark"
                thumb={defaultDark}
                defaultChecked={theme === 'dark'}
                handleChange={handleThemeChange}
              />
            </Col>
          </Row>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SettingsPanel;
