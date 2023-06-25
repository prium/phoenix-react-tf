import Button from 'components/base/Button';
import { Pricing } from 'data/landing/pricingData';
import React from 'react';
import { Col } from 'react-bootstrap';

interface PricingItemProps {
  pricing: Pricing;
}

const PricingItem = ({ pricing }: PricingItemProps) => {
  return (
    <Col className="px-5">
      <div className="text-center pt-5">
        <img src={pricing.icon} width={48} height={48} alt="" />
        <h3 className="fw-semi-bold my-4">{pricing.category}</h3>
      </div>
      <div className="text-center">
        <h1 className="fw-semi-bold text-primary">
          $<span className="fw-bolder">{pricing.price}</span>
          <span className="text-black fs-7 ms-1 fw-bolder">USD</span>
        </h1>
        <Button className={`btn btn-lg mb-6 w-100`}>Buy</Button>
      </div>
    </Col>
  );
};

export default PricingItem;
