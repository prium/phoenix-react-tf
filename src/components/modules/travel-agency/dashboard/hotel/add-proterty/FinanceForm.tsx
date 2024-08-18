import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { ChangeEvent } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { AddPropertyWizardFormData } from 'pages/apps/travel-agency/hotel/admin/AddProperty';
import { Link } from 'react-router-dom';

const FinanceForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange, formData, setFormData } = methods;

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h3 className="mb-6">Finance</h3>
      <h4 className="mb-4">Payment from Phoenix Booking Management</h4>
      <Row className="g-3 mb-3">
        <Col md={6}>
          <FloatingLabel
            className="mb-3 mb-md-0"
            controlId="financeCurrency"
            label="Payment Currency"
          >
            <Form.Control
              type="text"
              name="financeCurrency"
              defaultValue="$ US Dollar"
              onChange={onChange}
              disabled
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel
            controlId="financeCommission"
            label="Commission Percentage"
          >
            <Form.Control
              type="text"
              name="financeCommission"
              defaultValue="Flat 10%"
              onChange={onChange}
              disabled
            />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        controlId="financePaymentMethod"
        onChange={onChange}
        label="Select Payment Method"
      >
        <Form.Select name="financePaymentMethod">
          <option value="1">Electronic Funds Transfer (EFT)</option>
          <option value="2">option 2</option>
          <option value="3">option 3</option>
        </Form.Select>
      </FloatingLabel>
      <Form.Check className="my-4" id="financeInvoiceChecked">
        <Form.Check.Input type="checkbox" />
        <Form.Check.Label className="fw-normal fs-8">
          Invoice to the name and address of property
        </Form.Check.Label>
      </Form.Check>
      <FloatingLabel
        controlId="financeInvoiceEmail"
        label="Invoice Email"
        className="mb-4"
      >
        <Form.Control
          type="text"
          name="financeInvoiceEmail"
          placeholder="Invoice Email"
          onChange={onChange}
        />

        <Link
          to="#!"
          className="position-absolute d-flex align-items-center px-3 fw-bold fs-9 end-0 top-0 mt-3 me-2"
        >
          Verify now
        </Link>
      </FloatingLabel>
      <Form.Check className="mb-3" inline id="financeCreditCard">
        <Form.Check.Input
          type="radio"
          defaultChecked
          name="financePaymentMethod"
          value="CreditCard"
          onChange={handlePaymentMethodChange}
        />
        <Form.Check.Label className="fs-8">Credit Card</Form.Check.Label>
      </Form.Check>
      <Form.Check className="mb-3" inline id="financeBankAccount">
        <Form.Check.Input
          type="radio"
          name="financePaymentMethod"
          value="BankAccount"
          onChange={handlePaymentMethodChange}
        />
        <Form.Check.Label className="fs-8">Bank Account</Form.Check.Label>
      </Form.Check>
      <Form.Check className="mb-3" inline id="financeOnlinePayment">
        <Form.Check.Input
          type="radio"
          name="financePaymentMethod"
          value="online"
          onChange={handlePaymentMethodChange}
        />
        <Form.Check.Label className="fs-8">Online</Form.Check.Label>
      </Form.Check>
      <Row className="g-3 mb-3">
        <Col md={6}>
          <FloatingLabel
            controlId="financeCardSelect"
            onChange={onChange}
            label="Select Card"
          >
            <Form.Select name="financeCardSelect">
              <option value="1">Visa Debit Card</option>
              <option value="2">option 2</option>
              <option value="3">option 3</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="FinanceCardNumber" label="Card Number">
            <Form.Control
              type="number"
              name="FinanceCardNumber"
              placeholder="Phone Number"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        className="mb-3 mb-md-0"
        controlId="FinanceCardHolder"
        label="Card Holder Name"
      >
        <Form.Control
          type="text"
          name="FinanceCardHolder"
          placeholder=""
          onChange={onChange}
        />
      </FloatingLabel>
      <h4 className="mt-6 mb-4">Payment from Guests (On property)</h4>
      <div className="border p-3 mb-3 rounded-2">
        <Form.Check type="switch" className="mb-0" id="IsFinanceCashPayment">
          <Form.Check.Input
            defaultChecked
            name="IsFinanceCashPayment"
          ></Form.Check.Input>
          <Form.Check.Label className="fs-8 fw-bold text-body ms-2">
            Cash Payment
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="border p-3 mb-3 rounded-2">
        <Form.Check type="switch" className="mb-0" id="IsFinanceCardPayment">
          <Form.Check.Input name="IsFinanceCardPayment"></Form.Check.Input>
          <Form.Check.Label className="fs-8 fw-bold text-body ms-2">
            Card Payment
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="border p-3 mb-3 rounded-2">
        <Form.Check type="switch" className="mb-0" id="IsFinanceMFSPayment">
          <Form.Check.Input name="IsFinanceMFSPayment"></Form.Check.Input>
          <Form.Check.Label className="fs-8 fw-bold text-body ms-2">
            MFS Payment
          </Form.Check.Label>
        </Form.Check>
      </div>
    </>
  );
};

export default FinanceForm;
