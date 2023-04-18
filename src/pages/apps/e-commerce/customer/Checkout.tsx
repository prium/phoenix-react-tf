import Button from 'components/base/Button';
import Section from 'components/base/Section';
import { Breadcrumb, Col, Form, Row } from 'react-bootstrap';
import EcomAddressTable from 'components/tables/EcomAddressTable';
import { shippingDetailsAddress } from 'data/ecommerce';
import DeliveryType from 'components/modules/e-commerce/checkout/DeliveryType';
import { PaymentMethod } from 'components/modules/e-commerce/checkout/PaymentMethod';
import { currencyFormat } from 'helpers/utils';
import CheckoutSummaryCard from 'components/modules/e-commerce/checkout/CheckoutSummaryCard';

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
              <DeliveryType />
              <hr className="my-6" />
              <PaymentMethod />
              <Row className="g-2 mb-5 mb-lg-0">
                <Col md={8} lg={9}>
                  <Button variant="primary" type="submit" className="w-100">
                    Pay {currencyFormat(695.2)}
                  </Button>
                </Col>
                <Col md={4} lg={3}>
                  <Button variant="phoenix-secondary" type="submit" className="w-100 text-nowrap">
                    Save Order and Exit
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col xs={5} xl={4}>
            <CheckoutSummaryCard />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Checkout;
