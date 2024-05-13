import classNames from 'classnames';
import { SimpleDropdown } from 'components/base/SimpleDropdown';
import FinalcialActivitiesChart from 'components/charts/e-charts/FinalcialActivitiesChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export const FinancialActivitiesCard = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const profitData = [
    [350000, 390000, 410700, 450000, 390000, 410700],
    [245000, 310000, 420000, 480000, 530000, 580000],
    [278450, 513220, 359890, 444567, 201345, 589000]
  ];
  const revenueData = [
    [-810000, -640000, -630000, -590000, -620000, -780000],
    [-482310, -726590, -589120, -674832, -811245, -455678],
    [-432567, -688921, -517389, -759234, -601876, -485112]
  ];
  const expansesData = [
    [-450000, -250000, -200000, -120000, -230000, -270000],
    [-243567, -156789, -398234, -120456, -321890, -465678],
    [-235678, -142345, -398765, -287456, -173890, -451234]
  ];

  const [toggleProfit, setToggleProfit] = useState(false);
  const [toggleRevenue, setToggleRevenue] = useState(false);
  const [toggleExpanses, setToggleExpenses] = useState(false);

  useEffect(() => {
    const data1 = profitData[selectedOption];
    const data2 = revenueData[selectedOption];
    const data3 = expansesData[selectedOption];
    chartRef?.current?.getEchartsInstance().setOption({
      series: [
        {
          data: data1
        },
        {
          data: data2
        },
        {
          data: data3
        }
      ]
    });
  }, [selectedOption]);

  const handleLegend = (value: string) => {
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
          <select
            className="form-select form-select-sm pe-9 w-auto"
            onChange={e => setSelectedOption(parseInt(e.target.value))}
          >
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
              onClick={() => handleLegend('Profit')}
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
              onClick={() => handleLegend('Revenue')}
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
              onClick={() => handleLegend('Expanses')}
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
      <FinalcialActivitiesChart
        ref={chartRef}
        profitData={profitData}
        revenueData={revenueData}
        expansesData={expansesData}
        style={{}}
      />
    </div>
  );
};
