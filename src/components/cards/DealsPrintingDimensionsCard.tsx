import classNames from 'classnames';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

interface Stat {
  id: number;
  title: string;
  value: string;
  icon: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    title: 'Deal Amount',
    value: '$12,000.00',
    icon: 'dollar-sign',
    color: 'success'
  },
  {
    id: 2,
    title: 'Deal Code',
    value: 'PHO1234',
    icon: 'code',
    color: 'info'
  },
  {
    id: 3,
    title: 'Deal Type',
    value: 'New Business',
    icon: 'layout',
    color: 'primary'
  }
];

const DealsPrintingDimensionsCard = () => {
  return (
    <Card className="mb-5">
      <Card.Body>
        <Row className="g-4 g-xl-1 g-xxl-3 justify-content-between">
          {stats.map((stat, index) => (
            <Col key={stat.id} sm="auto">
              <div
                className={classNames(
                  'd-sm-block d-inline-flex d-md-flex flex-xl-column flex-xxl-row align-items-center align-items-xl-start align-items-xxl-center',
                  { 'border-start-sm ps-sm-5': index !== 0 }
                )}
              >
                <div
                  className={`d-flex bg-${stat.color}-100 rounded flex-center me-3 mb-sm-3 mb-md-0 mb-xl-3 mb-xxl-0`}
                  style={{ width: '32px', height: '32px' }}
                >
                  <FeatherIcon
                    icon={stat.icon}
                    className={`text-${stat.color}-600 dark__text-${stat.color}-300`}
                  />
                </div>
                <div>
                  <p className="fw-bold mb-1">{stat.title}</p>
                  <h4 className="fw-bolder text-nowrap">{stat.value}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DealsPrintingDimensionsCard;
