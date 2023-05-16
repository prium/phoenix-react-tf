import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderDetailsTable from 'components/tables/OrderDetailsTable';
import React from 'react';
import { Breadcrumb, Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import DetailsLabel from 'components/common/DetailsLabel';

const OrderDetails = () => {
  return (
    <div>
      <Breadcrumb className="mb-2">
        <Breadcrumb.Item href="#!">Page 1</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Page 2</Breadcrumb.Item>
        <Breadcrumb.Item href="#!" active>
          Default
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-9">
        <h2>
          Order <span>#349</span>
        </h2>
        <div className="d-flex flex-wrap flex-between-center mb-1 gap-2">
          <p className="text-800 lh-sm mb-0">
            Customer ID :{' '}
            <Link className="fw-bold" to="#!">
              {' '}
              2364847
            </Link>
          </p>
          <div className="d-flex gap-5">
            <Button
              variant="link"
              className="p-0 text-900 text-decoration-none"
              startIcon={<FontAwesomeIcon icon="print" className="me-2" />}
            >
              Print
            </Button>
            <Button
              variant="link"
              className="p-0 text-900 text-decoration-none"
              startIcon={<FontAwesomeIcon icon="undo" className="me-2" />}
            >
              Refund
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="" className="p-0 dropdown-caret-none text-decoration-none">
                More action
                <FontAwesomeIcon icon="chevron-down" className="ms-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Row className="g-5 gy-7">
          <Col xs={12} xl={8} xxl={9}>
            <div className="mb-7">
              <OrderDetailsTable />
            </div>
            <Row className="gx-4 gy-6 g-xl-7 justify-content-sm-center justify-content-xl-start">
              <Col xs={12} sm="auto">
                <h4 className="mb-5">Billing details</h4>
                <Row className="g-4 flex-sm-column">
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="user" label="Customer" />
                    <Link className="fs-9 ms-4" to="#!">
                      Shatinon Mekalan
                    </Link>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="mail" label="Email" />
                    <Link className="fs-9 ms-4" to="mailto:shatinon@jeemail.com">
                      shatinon@jeemail.com
                    </Link>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="phone" label="Phone" />
                    <Link className="fs-9 ms-4" to="tel:+1234567890">
                      +1234567890
                    </Link>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="home" label="Address" />
                    <div className="ms-4">
                      <p className="text-800 mb-0 fs-9">Shatinon Mekalan</p>
                      <p className="text-800 mb-0 fs-9">
                        Vancouver, British Columbia,
                        <br className="d-none d-sm-block" />
                        Canada
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} sm="auto">
                <h4 className="mb-5">Shipping details</h4>
                <Row className="g-4 flex-sm-column">
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="mail" label="Email" />
                    <Link className="fs-9 ms-4" to="mailto:shatinon@jeemail.com">
                      shatinon@jeemail.com
                    </Link>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="phone" label="Phone" />
                    <Link className="fs-9 ms-4" to="tel:+1234567890">
                      +1234567890
                    </Link>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="calendar" label="Shipping Date" />
                    <p className="mb-0 text-800 fs-9 ms-4">12 Nov, 2021</p>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="home" label="Address" />
                    <div className="ms-4">
                      <p className="text-800 mb-0 fs-9">Shatinon Mekalan</p>
                      <p className="text-800 mb-0 fs-9">
                        Vancouver, British Columbia,
                        <br className="d-none d-sm-block" />
                        Canada
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} sm="auto">
                <h4 className="mb-5">Other details</h4>
                <Row className="g-4 flex-sm-column">
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="shopping-bag" label="Gift order" />
                    <p className="mb-0 text-800 fs-9 ms-4">Yes</p>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="package" label="Wraping" />
                    <p className="mb-0 text-800 fs-9 ms-4">Magic wrapper</p>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="file-text" label="Recipient" />
                    <p className="mb-0 text-800 fs-9 ms-4">Recipient</p>
                  </Col>
                  <Col xs={6} sm={12}>
                    <DetailsLabel icon="mail" label="Gift Meassge" />
                    <div className="ms-4">
                      <p className="text-800 fs-9 mb-0">
                        Happy Birthday Shiniga <br />
                        Lots of Love Buga Buga!!
                      </p>
                      <p className="mb-0 text-800 fs-9">
                        Yours, <br />
                        Mekalan
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={4} xxl={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderDetails;
