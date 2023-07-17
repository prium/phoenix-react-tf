import Button from 'components/base/Button';
import SettingsProfileCard from 'components/cards/SettingsProfileCard';
import SettingsChangePassword from 'components/forms/SettingsChangePassword';
import SettingsCompanyInfo from 'components/forms/SettingsCompanyInfo';
import SettingsPersonalInformation from 'components/forms/SettingsPersonalInformation';
import SettingsSocial from 'components/forms/SettingsSocial';
import SettingsSideBar from 'components/modules/social/SettingsSideBar';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Settings = () => {
  return (
    <div className="mb-9">
      <Row className="g-6">
        <Col xs={12} xl={4}>
          <SettingsProfileCard />
          <SettingsSideBar />
        </Col>
        <Col xs={12} xl={8}>
          <div className="border-bottom border-300 mb-4">
            <SettingsPersonalInformation />
            <Row className="gx-3 mb-6 gy-6 gy-sm-3">
              <Col xs={12} sm={6}>
                <SettingsCompanyInfo />
              </Col>
              <Col xs={12} sm={6}>
                <SettingsChangePassword />
              </Col>
            </Row>
            <SettingsSocial />
            <div className="text-end mb-6">
              <Button variant="phoenix-secondary" className="me-2">
                Cancel Changes
              </Button>
              <Button variant="phoenix-primary">Save Information</Button>
            </div>
          </div>
          <Row className="gy-5">
            <Col xs={12} md={6}>
              <h4 className="text-black">Transfer Ownership</h4>
              <p className="text-700">
                Transfer this account to another person or to a company
                repository.
              </p>
              <Button variant="phoenix-warning">Transfer</Button>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="text-black">Account Deletion</h4>
              <p className="text-700">
                Transfer this account to another person or to a company
                repository.
              </p>
              <Button variant="phoenix-danger">Delete account</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
