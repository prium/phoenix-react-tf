import { AddPropertyWizardFormData } from 'pages/apps/travel-agency/hotel/admin/AddProperty';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { ChangeEvent, useState } from 'react';
import { Col, FloatingLabel, Form, Row, Tab } from 'react-bootstrap';
import WeeklyPricingCard from './WeeklyPricingCard';
import ExtraBed from './ExtraBed';

const Pricing = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const [selectedTab, setSelectedTab] = useState('allDayPricing');

  const handleTabChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setSelectedTab(e.target.value);
  };
  return (
    <>
      <h3 className="mb-6">Pricing</h3>
      <h4 className="mb-2">Base price per night</h4>
      <p className="mb-5 text-body-tertiary">
        Get a great value stay with us, starting at our base price per night.
      </p>
      <Tab.Container activeKey={selectedTab}>
        <Form.Group className="mb-2">
          <Form.Check
            type="radio"
            label="Across all days"
            id="allDayPricing"
            value="allDayPricing"
            name="dayWeekPricing"
            inline
            checked={selectedTab === 'allDayPricing'}
            onChange={handleTabChange}
          />
          <Form.Check
            inline
            type="radio"
            id="weeklyPricing"
            value="weeklyPricing"
            label="By day of week"
            name="dayWeekPricing"
            checked={selectedTab === 'weeklyPricing'}
            onChange={handleTabChange}
          />
        </Form.Group>
        <Tab.Content>
          <Tab.Pane eventKey="allDayPricing">
            <Row className="gx-2 w-sm-60">
              <Col xs={8}>
                <FloatingLabel controlId="roomPrice" label="Room Price">
                  <Form.Control type="text" placeholder="" />
                </FloatingLabel>
              </Col>
              <Col xs={4}>
                <FloatingLabel controlId="currency" label="Currency">
                  <Form.Select onChange={onChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BDT">BDT</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="weeklyPricing">
            <WeeklyPricingCard />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <>
        <h5 className="mb-2 mt-5 lh-1 text-body-highlight fw-bold">
          How many people are included in the base rate?
        </h5>
        <FloatingLabel controlId="peopleSelect" label="Select">
          <Form.Select>
            <option value="1">05 People</option>
            <option value="2">10 People</option>
            <option value="3">15 People</option>
          </Form.Select>
        </FloatingLabel>
      </>
      <ExtraBed />
    </>
  );
};

export default Pricing;
