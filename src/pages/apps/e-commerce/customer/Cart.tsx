import Section from 'components/base/Section';
import EcomCardSummaryCard from 'components/cards/EcomCardSummaryCard';
import EcomCartTable from 'components/tables/EcomCartTable';
import { cartItems } from 'data/e-commerce/products';
import React from 'react';
import { Breadcrumb, Col, Row } from 'react-bootstrap';

const Cart = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <Breadcrumb className="mb-2">
          <Breadcrumb.Item href="#!">Page 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#!">Page 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#!" active>
            Default
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="mb-6">Cart</h2>
        <Row className="g-5">
          <Col xs={12} lg={8}>
            <EcomCartTable products={cartItems} />
          </Col>
          <Col xs={12} lg={4}>
            <EcomCardSummaryCard />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Cart;
