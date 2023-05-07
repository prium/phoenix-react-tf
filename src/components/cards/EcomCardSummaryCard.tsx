import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { currencyFormat } from 'helpers/utils';
import React from 'react';
import { Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EcomCardSummaryCard = () => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-between-center mb-3">
          <h3 className="mb-0">Summary</h3>
          <Link to="#!" className="btn btn-link p-0">
            Edit cart
          </Link>
        </div>
        <Form.Select className="mb-3">
          <option value="cod">Cash on Delivery</option>
          <option value="card">Card</option>
          <option value="paypal">Paypal</option>
        </Form.Select>
        <div>
          <div className="d-flex justify-content-between">
            <p className="text-900 fw-semi-bold">Items subtotal :</p>
            <p className="text-1100 fw-semi-bold">{currencyFormat(691)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-900 fw-semi-bold">Discount :</p>
            <p className="text-danger fw-semi-bold">-{currencyFormat(59)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-900 fw-semi-bold">Tax :</p>
            <p className="text-1100 fw-semi-bold">{currencyFormat(126.2)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-900 fw-semi-bold">Subtotal :</p>
            <p className="text-1100 fw-semi-bold">{currencyFormat(665)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-900 fw-semi-bold">Shipping Cost :</p>
            <p className="text-1100 fw-semi-bold">{currencyFormat(30)}</p>
          </div>
        </div>
        <InputGroup className="mb-3">
          <FormControl placeholder="Voucher" aria-label="voucher" />
          <Button variant="phoenix-primary" className="px-5">
            Apply
          </Button>
        </InputGroup>
        <div className="d-flex justify-content-between border-y border-dashed py-3 mb-4">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-">{currencyFormat(695.2, { minimumFractionDigits: 2 })}</h4>
        </div>
        <Button
          className="w-100"
          variant="primary"
          endIcon={<FontAwesomeIcon icon="chevron-right" className="ms-1 fs-10" />}
        >
          Proceed to check out
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EcomCardSummaryCard;
