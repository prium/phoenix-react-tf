import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import ills4l from 'assets/img/icons/illustrations/4l.png';
import ills3l from 'assets/img/icons/illustrations/3l.png';
import ills2l from 'assets/img/icons/illustrations/2l.png';

type StatType = {
  id: number | string;
  icon: string;
  title: string;
  subTitle: string;
};

const stats: StatType[] = [
  {
    id: 1,
    icon: ills4l,
    title: '57 new orders',
    subTitle: 'Awating processing'
  },
  {
    id: 2,
    icon: ills3l,
    title: '5 orders',
    subTitle: 'On hold'
  },
  {
    id: 3,
    icon: ills2l,
    title: '15 products',
    subTitle: 'Out of stock'
  }
];

const EcomStats = () => {
  return (
    <Row className="align-items-center g-4 border-bottom pb-4 mb-6">
      {stats.map(stat => (
        <Col xs={12} md="auto" key={stat.id}>
          <Stat stat={stat} />
        </Col>
      ))}
    </Row>
  );
};

const Stat = ({ stat }: { stat: StatType }) => {
  return (
    <Stack direction="horizontal" className="align-items-center">
      <img src={stat.icon} alt="" height={46} width={46} />
      <div className="ms-3">
        <h4 className="mb-0">{stat.title}</h4>
        <p className="text-800 fs-9 mb-0">{stat.subTitle}</p>
      </div>
    </Stack>
  );
};

export default EcomStats;
