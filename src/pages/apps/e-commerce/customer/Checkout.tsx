import Button from 'components/base/Button';
import Section from 'components/base/Section';
import React from 'react';
import { Breadcrumb, Col, Form, Row, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import EcomAddressTable from 'components/tables/EcomAddressTable';
import { shippingDetailsAddress } from 'data/ecommerce';

const Checkout = () => {
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
        <h2 className="mb-5">Check out</h2>
        <Row className="justify-content-between">
          <Col lg={7}>
            <form>
              <div className="d-flex align-items-end mb-4">
                <h3 className="mb-0 me-3">Shipping Details</h3>
                <Button variant="link" className="p-0" type="button">
                  Edit
                </Button>
              </div>
              <EcomAddressTable data={shippingDetailsAddress} />
              <hr className="my-6" />
              <h3>Billing Details</h3>
              <Form.Check type="checkbox" id="sameAsShipping" className="mb-4">
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label className="fs-8 fw-normal">
                  Same as shipping address
                </Form.Check.Label>
              </Form.Check>
              <EcomAddressTable data={shippingDetailsAddress} />
              <hr className="my-6" />
              <h3 className="mb-5">Delivery Type</h3>
              <Row className="gy-6">
                <Col xs={12} md={6}>
                  <div>
                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <Form.Check type="radio" id="free_shipping" className="mb-0">
                        <Form.Check.Input type="radio" />
                        <Form.Check.Label className="fs-8 text-900">Free Shipping</Form.Check.Label>
                      </Form.Check>
                      <span className="d-inline-block text-1100 fw-bold ms-2">$0.00</span>
                    </div>
                    <div className="ps-4">
                      <h6 className="text-700 mb-2">Est. delivery:Jun 21 – Jul 20</h6>
                      <h6 className="text-info lh-base mb-0">Get Free Shipped products in Time!</h6>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div>
                    <div className="d-flex flex-wrap align-items-center mb-3">
                      <Form.Check type="radio" id="free_shipping" className="mb-0">
                        <Form.Check.Input type="radio" />
                        <Form.Check.Label className="fs-8 text-900">
                          Two days Shipping
                        </Form.Check.Label>
                      </Form.Check>
                      <span className="d-inline-block text-1100 fw-bold ms-2">$20.00</span>
                    </div>
                    <div className="ps-4">
                      <h6 className="text-700 mb-2">Est. delivery:Jun 21 – Jul 20</h6>
                      <h6 className="text-info lh-base mb-0">
                        Everything faster with minimum shipping fee.
                      </h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
          <Col xs={5} xl={4}>
            <h1>jhhj</h1>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Checkout;
