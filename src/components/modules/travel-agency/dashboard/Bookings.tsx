import BookingsChart from 'components/charts/e-charts/BookingsChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import React, { useEffect, useRef, useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const Bookings = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const fullfilledData = [
    [3500, 2500, 2600, 3400, 2300, 3200, 2800, 2800],
    [2736, 3874, 4192, 1948, 3567, 4821, 2315, 3986],
    [2789, 3895, 2147, 4658, 1723, 3210, 4386, 1974]
  ];

  const cencelledData = [
    [-1500, -2700, -1100, -1400, -1600, -1400, -1100, -2700],
    [-3874, -2631, -4422, -1765, -3198, -4910, -2087, -4675],
    [-2789, -3895, -2147, -4658, -1723, -3210, -4386, -1974]
  ];

  useEffect(() => {
    const data1 = fullfilledData[selectedOption];
    const data2 = cencelledData[selectedOption];
    chartRef?.current?.getEchartsInstance().setOption({
      series: [
        {
          data: data1
        },
        {
          data: data2
        }
      ]
    });
  }, [selectedOption]);
  return (
    <Card className="h-100">
      <Card.Header className="pb-3 d-sm-flex d-xl-block d-xxl-flex justify-content-between align-items-start">
        <div>
          <h3 className="text-body-highlight">Bookings</h3>
          <p className="mb-0">Completed and canceled bookings</p>
        </div>
        <Form.Select
          size="sm"
          className="pe-9 w-auto mt-3 mt-sm-0 mt-xl-3 mt-xxl-0"
          value={selectedOption}
          onChange={e => setSelectedOption(parseInt(e.target.value))}
        >
          <option value={0}>Hotel</option>
          <option value={1}>Flight</option>
          <option value={2}>Trip</option>
        </Form.Select>
      </Card.Header>
      <Card.Body>
        <BookingsChart
          ref={chartRef}
          fullfilledData={fullfilledData}
          cencelledData={cencelledData}
          style={{ height: '100%', minHeight: 322, width: '100%' }}
        />
      </Card.Body>
    </Card>
  );
};

export default Bookings;
