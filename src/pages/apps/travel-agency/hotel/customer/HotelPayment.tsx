import React from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import TopNav from 'pages/apps/travel-agency/landing/TopNav';
import NavbarMain from 'components/navbars/travel-agency/NavbarMain';
import TravelFooter from 'components/footers/TravelFooter';
import Footer from 'components/footers/Footer';

import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col, Form } from 'react-bootstrap';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import visaCardImage from 'assets/img/logos/visa.png';
import discoverImage from 'assets/img/logos/discover.png';
import masterCardImage from 'assets/img/logos/mastercard.png';
import americanExpressImage from 'assets/img/logos/american_express.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';

const HotelPayment = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });

  const start_year = 1990;
  const end_year = new Date().getFullYear();

  return (
    <>
      <TopNav />
      <NavbarMain />
      <section className="pt-6 pb-9">
        <Container fluid="medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
          <h2 className="mb-5">Payment</h2>
          <Row className="justify-content-between">
            <Col lg={7} xl={6}>
              <Form onSubmit={e => e.preventDefault()}>
                <Link
                  to="/apps/travel-agency/hotel/customer/checkout"
                  className="btn btn-phoenix-primary"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="me-2"
                    transform="shrink-3"
                  />
                  Go back
                </Link>
                <hr className="mt-5 mb-7" />
                <h3 className="mb-5">Enter your address</h3>
                <Row className="g-3 mb-5">
                  <Col sm={3}>
                    <label
                      htmlFor="country"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Country
                    </label>
                    <Form.Select id="country">
                      <option value="1">India</option>
                      <option value="2">USA</option>
                      <option value="3">UAE</option>
                    </Form.Select>
                  </Col>
                  <Col sm={5} lg={4}>
                    <label
                      htmlFor="phone-number"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Phone number
                    </label>
                    <Form.Control
                      type="number"
                      id="phone-number"
                      placeholder="Enter phone number"
                      className="input-spin-none"
                    />
                  </Col>
                </Row>
                <Row className="g-3">
                  <Col sm={8} lg={7}>
                    <label
                      htmlFor="email"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Email address
                    </label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      id="email"
                    />
                  </Col>
                </Row>
                <h3 className="mt-7 mb-5">Payment Method</h3>
                <Row className="gx-xxl-6 mb-5">
                  <Col md="auto">
                    <div className="d-flex">
                      <Form.Check>
                        <Form.Check.Input
                          type="radio"
                          name="paymentMethod"
                          id="creditCard"
                          defaultChecked
                        />
                        <Form.Check.Label
                          className="fs-8 text-body me-3"
                          htmlFor="creditCard"
                        >
                          Credit card
                        </Form.Check.Label>
                      </Form.Check>
                      <img
                        src={visaCardImage}
                        alt=""
                        className="h-100 me-2 ms-4 ms-md-0"
                      />
                      <img src={discoverImage} alt="" className="h-100 me-2" />
                      <img
                        src={masterCardImage}
                        alt=""
                        className="h-100 me-2"
                      />
                      <img
                        src={americanExpressImage}
                        alt=""
                        className="h-100"
                      />
                    </div>
                  </Col>
                  <Col md="auto">
                    <Form.Check>
                      <Form.Check.Input
                        type="radio"
                        name="paymentMethod"
                        id="paypal"
                      />
                      <Form.Check.Label
                        className="fs-8 text-body"
                        htmlFor="paypal"
                      >
                        Paypal
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                  <Col md="auto">
                    <Form.Check>
                      <Form.Check.Input
                        type="radio"
                        name="paymentMethod"
                        id="coupon"
                      />
                      <Form.Check.Label
                        className="fs-8 text-body"
                        htmlFor="coupon"
                      >
                        Coupon
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                </Row>
                <Row className="gx-3 gy-4">
                  <Col md={6}>
                    <label
                      htmlFor="selectCard"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Select card
                    </label>
                    <Form.Select
                      className="text-body-emphasis"
                      id="selectCard"
                      defaultValue=""
                    >
                      <option value="">Select a card</option>
                      <option value="visa">Visa</option>
                      <option value="discover">Discover</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="american-express">American Express</option>
                    </Form.Select>
                  </Col>
                  <Col md={6}>
                    <label
                      htmlFor="inputCardNumber"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Card number
                    </label>
                    <Form.Control
                      type="number"
                      placeholder="Enter card number"
                      aria-label="Card number"
                      id="inputCardNumber"
                      className="input-spin-none"
                    />
                  </Col>
                  <Col xs={12}>
                    <label
                      htmlFor="inputName"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Full name
                    </label>
                    <Form.Control
                      type="text"
                      name="inputName"
                      placeholder="Ansolo Lazinatov"
                      id="inputName"
                      aria-label="Full name"
                    />
                  </Col>
                  <Col md={6}>
                    <label className="fw-bold text-body-highlight mb-1">
                      Expires on
                    </label>
                    <div className="d-flex">
                      <Form.Select
                        className="text-body-emphasis me-3"
                        defaultValue=""
                      >
                        <option value="">Month</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                      </Form.Select>
                      <Form.Select
                        className="text-body-emphasis"
                        defaultValue=""
                      >
                        <option value="">Year</option>
                        {Array.from({ length: end_year - start_year + 1 }).map(
                          (_, index) => {
                            const year = start_year + index;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          }
                        )}
                      </Form.Select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <label
                      htmlFor="inputCardCVC"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      CVC
                    </label>
                    <Form.Control
                      type="number"
                      name="CVC"
                      id="inputCardCVC"
                      placeholder="Enter a valid CVC"
                      aria-label="CVC"
                      className="input-spin-none"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Check>
                      <Form.Check.Input type="checkbox" id="gridCheck" />
                      <Form.Check.Label
                        className="text-body-emphasis fs-8"
                        htmlFor="gridCheck"
                      >
                        Save Card Details
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                </Row>
                <hr className="mt-6 mb-5" />
                <Link
                  to="/apps/travel-agency/hotel/customer/checkout"
                  className="btn btn-phoenix-primary me-3"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="me-2"
                    transform="shrink-3"
                  />
                  Go back
                </Link>
                <Button variant="primary" className="px-sm-15">
                  Confirm booking
                </Button>
              </Form>
            </Col>
            <Col lg={5} xl={4}>
              <HotelDetailsSummaryCard
                isInfoShow={true}
                className="mt-5 mt-lg-0"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <TravelFooter />
      <Footer />
    </>
  );
};

export default HotelPayment;
