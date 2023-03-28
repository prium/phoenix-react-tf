import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Stats from './Stats';
import TotalSells from './total-sells/TotalSells';
import EcomTotalOrdersCard from 'components/cards/EcomTotalOrdersCard';
import EcomNewCustomersCard from 'components/cards/EcomNewCustomersCard';
import EcomTopCouponsCard from 'components/cards/EcomTopCouponsCard';
import EcomPayingVsNonPayingCard from 'components/cards/EcomPayingVsNonPayingCard';
import EcomLatestReviewsTable from 'components/tables/EcomLatestReviewsTable';

const Ecommerce = () => {
  return (
    <>
      <div className="pb-5">
        <Row className="g-4">
          <Col xs={12} xxl={6}>
            <div className="mb-8">
              <h2 className="mb-2">Ecommerce Dashboard</h2>
              <h5 className="text-700 fw-semi-bold">
                Here’s what’s going on at your business right now
              </h5>
            </div>
            <Stats />
            <TotalSells />
          </Col>
          <Col xs={12} xxl={6}>
            <Row className="g-3">
              <Col xs={12} md={6}>
                <EcomTotalOrdersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomNewCustomersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomTopCouponsCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomPayingVsNonPayingCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white pt-7 border-y border-300">
        <EcomLatestReviewsTable />
      </div>
    </>
  );
};

export default Ecommerce;
