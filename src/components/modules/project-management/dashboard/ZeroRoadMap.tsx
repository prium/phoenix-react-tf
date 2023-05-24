import { UilBooks, UilInvoice, UilRefresh, UilUsersAlt } from '@iconscout/react-unicons';
import CheckButton from 'components/base/CheckButton';
import DatePicker from 'components/base/DatePicker';
import ZeroRoadMapChart from 'components/charts/dhtmlx/ZeroRoadMapChart';
import React, { ChangeEvent, useState } from 'react';
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap';

const ZeroRoadMap = () => {
  const [scaleView, setScaleView] = useState('week');

  console.log({ scaleView });

  return (
    <div className="gantt-zero-roadmap">
      <Row className="g-2 flex-between-center mb-3">
        <Col xs={12} sm="auto">
          <div className="d-flex gap-3">
            <Form.Check className="d-flex align-items-end ps-0" id="progress">
              <Form.Check.Label className="mb-0 me-2 lh-1 text-900">Progress</Form.Check.Label>
              <Form.Check type="switch" className="min-h-auto mb-0" />
            </Form.Check>
            <Form.Check className="d-flex align-items-end ps-0" id="links">
              <Form.Check.Label className="mb-0 me-2 lh-1 text-900">Links</Form.Check.Label>
              <Form.Check type="switch" className="min-h-auto mb-0" />
            </Form.Check>
          </div>
        </Col>
        <Col xs={12} sm="auto">
          <ButtonGroup aria-label="Basic example">
            <CheckButton
              label="Week"
              id="week"
              inputProps={{
                name: 'scaleView',
                value: 'week',
                defaultChecked: true
                // checked: scaleView === 'week',
                // onChange(e: ChangeEvent<HTMLInputElement>) {
                //   setScaleView(e.target.value);
                // }
              }}
            />
            <CheckButton
              label="Month"
              id="month"
              inputProps={{
                name: 'scaleView',
                value: 'month'
                // checked: scaleView === 'month',
                // onChange(e: ChangeEvent<HTMLInputElement>) {
                //   setScaleView(e.target.value);
                // }
              }}
            />
            <CheckButton
              label="Year"
              id="year"
              inputProps={{
                name: 'scaleView',
                value: 'year'
                // checked: scaleView === 'year',
                // onChange(e: ChangeEvent<HTMLInputElement>) {
                //   setScaleView(e.target.value);
                // }
              }}
            />
          </ButtonGroup>
        </Col>
        <ZeroRoadMapChart />
      </Row>
    </div>
  );
};

export default ZeroRoadMap;
