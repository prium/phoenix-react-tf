import classNames from 'classnames';
import { SimpleDropdown } from 'components/base/SimpleDropdown';
import FinalcialActivitiesChart from 'components/charts/e-charts/FinalcialActivitiesChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import React, { MouseEvent, useRef, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export const FinancialActivitiesCard = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [toggleProfit, setToggleProfit] = useState(false);
  const [toggleRevenue, setToggleRevenue] = useState(false);
  const [toggleExpanses, setToggleExpenses] = useState(false);

  const handleLegend = (value: string, event: MouseEvent<HTMLElement>) => {
    value == 'Profit' && setToggleProfit(!toggleProfit);
    value == 'Revenue' && setToggleRevenue(!toggleRevenue);
    value == 'Expanses' && setToggleExpenses(!toggleExpanses);
    chartRef?.current?.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name: value
    });
  };

  return (
    <div className="mt-5 mt-xl-0 mt-xxl-5 mb-5 mb-xxl-0">
      <Row className="flex-between-end gy-3 gx-2">
        <Col xs="auto">
          <h3 className="text-body-highlight">Financial activities</h3>
          <p className="mb-0 text-body-tertiary"> Yearly Balance</p>
        </Col>
        <Col
          xs={12}
          sm="auto"
          className="ms-auto order-1 order-sm-0 order-md-1 order-lg-0 order-xxl-1"
        >
          <select className="form-select form-select-sm pe-9 w-auto">
            <option value="0">Hotel</option>
            <option value="1">Flight</option>
            <option value="2">Trip</option>
          </select>
        </Col>
        <Col xs="auto" className="order-md-1 order-lg-0 order-xxl-1">
          <SimpleDropdown />
        </Col>
        <Col
          xs={12}
          md="auto"
          lg="12"
          xxl="auto"
          className="mx-auto order-1 order-sm-0"
        >
          <div className="d-flex justify-content-center gap-6 gap-xxl-4">
            <Button
              variant="link"
              id="profile"
              onClick={e => handleLegend('Profit', e)}
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-semibold text-decoration-none',
                {
                  'opacity-50': toggleProfit
                }
              )}
            >
              <span
                className="bg-primary-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-body-secondary"> Profit </span>
            </Button>
            <Button
              variant="link"
              id="revenue"
              onClick={e => handleLegend('Revenue', e)}
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-semibold text-decoration-none',
                {
                  'opacity-50': toggleRevenue
                }
              )}
            >
              <span
                className="bg-success-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-body-secondary"> Revenue </span>
            </Button>
            <Button
              variant="link"
              id="expanses"
              onClick={e => handleLegend('Expanses', e)}
              className={classNames(
                'd-flex align-items-center p-0 shadow-none fw-semibold text-decoration-none',
                {
                  'opacity-50': toggleExpanses
                }
              )}
            >
              <span
                className="bg-info-light me-2"
                style={{ width: 16, height: 6, borderRadius: 1 }}
                data-bs-theme="light"
              />
              <span className="text-body-secondary"> Expanses </span>
            </Button>
          </div>
        </Col>
      </Row>
      <FinalcialActivitiesChart ref={chartRef} style={{}} />
    </div>
  );
};
