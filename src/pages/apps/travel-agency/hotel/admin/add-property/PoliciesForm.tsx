import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { ChangeEvent } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { AddPropertyWizardFormData } from './AddProperty';
import DatePicker from 'components/base/DatePicker';
import PriceTierForm from './PriceTierForm';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
interface SwitchForm {
  id: string;
  name: string;
  label: string;
  defaultChecked?: boolean;
  className?: string;
}

const SwitchForm = ({
  id,
  name,
  label,
  defaultChecked,
  className = ''
}: SwitchForm) => {
  return (
    <div className={`border p-3 rounded-2 ${className}`}>
      <Form.Check type="switch" className="mb-0" id={id}>
        <Form.Check.Input
          defaultChecked={defaultChecked}
          name={name}
        ></Form.Check.Input>
        <Form.Check.Label className="fs-8 fw-bold text-body ms-2">
          {label}
        </Form.Check.Label>
      </Form.Check>
    </div>
  );
};

const PoliciesForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange, formData, setFormData } = methods;
  const handleFormCheckChnage = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h3 className="mb-6">Policies</h3>
      <Form.Check className="mb-3 me-5" inline id="policiesCheckInLimited">
        <Form.Check.Input
          type="radio"
          defaultChecked
          name="policiesCheckIn"
          value="Limited check-in"
          onChange={handleFormCheckChnage}
        />
        <Form.Check.Label className="fs-8">Limited Check-in</Form.Check.Label>
      </Form.Check>
      <Form.Check className="mb-3" inline id="policiesCheckIn24Hr">
        <Form.Check.Input
          type="radio"
          name="policiesCheckIn"
          value="24hr Check-in"
          onChange={handleFormCheckChnage}
        />
        <Form.Check.Label className="fs-8">24hr Check-in</Form.Check.Label>
      </Form.Check>
      <Row className="g-3 mb-3 align-items-center">
        <Col xs={12} sm={6} md="auto" className="flex-md-grow-1">
          <DatePicker
            render={(_, ref) => {
              return (
                <Form.Floating>
                  <Form.Control
                    type="text"
                    placeholder="H:i"
                    ref={ref}
                    id="policiesCheckInStarts"
                    className="ps-3"
                    defaultValue="12:00"
                    onChange={onChange}
                  />
                  <label htmlFor="policiesCheckInStarts">Check-In Starts</label>
                </Form.Floating>
              );
            }}
            hideIcon={true}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: 'H:i'
            }}
          />
        </Col>
        <Col xs={12} sm={6} md="auto" className="flex-md-grow-1">
          <DatePicker
            render={(_, ref) => {
              return (
                <Form.Floating>
                  <Form.Control
                    type="text"
                    placeholder="H:i"
                    ref={ref}
                    id="policiesCheckInEnds"
                    className="ps-3"
                    defaultValue="12:00"
                  />
                  <label htmlFor="policiesCheckInEnds">Check-In Ends</label>
                </Form.Floating>
              );
            }}
            hideIcon={true}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: 'H:i'
            }}
          />
        </Col>
        <Col xs={12} md="auto">
          <Form.Check id="policiesLateCheckIn" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              defaultChecked
              name="policiesLateCheckIn"
            />
            <Form.Check.Label className="fw-normal fs-8">
              Late Check-in
            </Form.Check.Label>
          </Form.Check>
        </Col>
      </Row>
      <SwitchForm
        id="policyAgeRegistration"
        name="policyAgeRegistration"
        label="Age Registration"
        className="mb-3"
      />
      <SwitchForm
        id="policyDepositCheckIn"
        name="policyDepositCheckIn"
        label="Deposit at Check-in"
        className="mb-3"
      />
      <SwitchForm
        id="policyDocumentCheckIn"
        name="policyDocumentCheckIn"
        label="Documentation at Check-in"
        className="mb-3"
      />
      <h4 className="mb-4 mt-6">Checkout Policy</h4>
      <DatePicker
        render={(_, ref) => {
          return (
            <Form.Floating className="mb-3">
              <Form.Control
                type="text"
                placeholder="H:i"
                ref={ref}
                id="policiesFlexibleCheckout"
                className="ps-3"
                defaultValue="12:00"
                onChange={onChange}
              />
              <label htmlFor="policiesFlexibleCheckout">Check-In Starts</label>
            </Form.Floating>
          );
        }}
        hideIcon={true}
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i'
        }}
      />
      <PriceTierForm id="policyFexibleCheckout" name="policyFexibleCheckout" />
      <h4 className="mb-4 mt-6">Cancellation Policy </h4>
      <Form.Check className="mb-3 me-5" inline id="nonRefundable">
        <Form.Check.Input
          type="radio"
          defaultChecked
          name="refundPolicy"
          value="nonRefundable"
          onChange={handleFormCheckChnage}
        />
        <Form.Check.Label className="fs-8">Non Refundable</Form.Check.Label>
      </Form.Check>
      <Form.Check className="mb-3" inline id="optionalRefund">
        <Form.Check.Input
          type="radio"
          name="refundPolicy"
          value="optional Refund"
          onChange={handleFormCheckChnage}
        />
        <Form.Check.Label className="fs-8">Optional Refund</Form.Check.Label>
      </Form.Check>
      <SwitchForm
        id="policyFullRefund"
        name="fullRefund"
        label="Full Refund"
        className="mb-3"
      />
      <SwitchForm
        id="policyPertialRefund"
        name="PertialRefund"
        label="Pertial Refund"
        className="mb-3"
      />
      <h4 className="mb-4 mt-6">Pet Policy </h4>
      <Form.Check className="mb-3 me-5" inline id="PolicyNotAllowed">
        <Form.Check.Input
          type="radio"
          defaultChecked
          name="petPolicy"
          value="Not Allowed"
          onChange={handleFormCheckChnage}
        />
        <Form.Check.Label className="fs-8">Not Allowed</Form.Check.Label>
      </Form.Check>
      <Form.Check className="mb-3" inline id="PolicyAllowed">
        <Form.Check.Input
          type="radio"
          name="petPolicy"
          value="Allowed"
          onChange={handleFormCheckChnage}
        />
        <Form.Check.Label className="fs-8">Allowed</Form.Check.Label>
      </Form.Check>
      <SwitchForm
        id="policyPetZones"
        name="policyPetZones"
        label="Pet Restricted Zones"
        className="mb-3"
      />
      <SwitchForm
        id="policyAdditionalCharges"
        name="policyAdditionalCharges"
        label="Additional Charges"
        className="mb-3"
      />
      <h4 className="mb-4 mt-6">Child Policy</h4>
      <h5 className="mb-2 text-body">Age Segment 1</h5>
      <Row className="align-items-center g-3">
        <Col xs={6} sm="auto">
          <Form.Floating>
            <Form.Control
              type="number"
              id="policiesAgeSegment1Form"
              className="age-segment-input"
              disabled
              value={0}
            />
            <label htmlFor="policiesFlexibleCheckout">From (Yrs)</label>
          </Form.Floating>
        </Col>
        <Col
          xs={{ order: 1, span: 12 }}
          sm={{ order: 0, span: 'auto' }}
          className="flex-1"
        >
          <Form.Range />
        </Col>
        <Col xs={6} sm="auto">
          <Form.Floating>
            <Form.Control
              type="number"
              id="policiesAgeSegment1To"
              className="age-segment-input"
              value={0}
            />
            <label htmlFor="policiesFlexibleCheckout">To (Yrs)</label>
          </Form.Floating>
        </Col>
      </Row>
      <h5 className="mb-2 mt-4 text-body">Age Segment 2</h5>
      <Row className="align-items-center g-3">
        <Col xs={6} sm="auto">
          <Form.Floating>
            <Form.Control
              type="number"
              id="policiesAgeSegment2Form"
              className="age-segment-input"
              disabled
              value={8}
            />
            <label htmlFor="policiesFlexibleCheckout">From (Yrs)</label>
          </Form.Floating>
        </Col>
        <Col
          xs={{ order: 1, span: 12 }}
          sm={{ order: 0, span: 'auto' }}
          className="flex-1"
        >
          <Form.Range />
        </Col>
        <Col xs={6} sm="auto">
          <Form.Floating>
            <Form.Control
              type="number"
              id="policiesAgeSegment2To"
              className="age-segment-input"
              value={0}
            />
            <label htmlFor="policiesFlexibleCheckout">To (Yrs)</label>
          </Form.Floating>
        </Col>
      </Row>
      <h5 className="mb-2 mt-4 text-body">Age Segment 3</h5>
      <Row className="align-items-center g-3">
        <Col xs={6} sm="auto">
          <Form.Floating>
            <Form.Control
              type="number"
              id="policiesAgeSegment3Form"
              className="age-segment-input"
              value={13}
            />
            <label htmlFor="policiesFlexibleCheckout">From (Yrs)</label>
          </Form.Floating>
        </Col>
        <Col
          xs={{ order: 1, span: 12 }}
          sm={{ order: 0, span: 'auto' }}
          className="flex-1"
        >
          <Form.Range />
        </Col>
        <Col xs={6} sm="auto">
          <Form.Floating>
            <Form.Control
              type="number"
              id="policiesAgeSegment3To"
              className="age-segment-input"
              value={0}
            />
            <label htmlFor="policiesFlexibleCheckout">To (Yrs)</label>
          </Form.Floating>
        </Col>
      </Row>
      <Button variant="link" className="p-0 mt-3 fs-8">
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Add Segment
      </Button>
      <SwitchForm
        id="policiesDocRequirment"
        name="policiesDocRequirment"
        label="Documentation Requirement"
        className="mt-3"
      />
      <h4 className="mb-4 mt-6">Included Taxes in your rate</h4>
      <PriceTierForm id="policyVat" name="Vat" />
      <PriceTierForm id="policyGst" name="Gst" />
      <PriceTierForm id="policyHotelTax" name="Hotel tax" />
      <PriceTierForm id="policyCityTax" name="City / District tax" />
      <PriceTierForm id="policyTouristTax" name="Tourist tax" />
      <h4 className="mb-4 mt-6">Your Documentations</h4>
      <FloatingLabel
        className="mb-3"
        controlId="policyPropertyRegNo"
        label="Property Registration No. (OPTIONAL)"
      >
        <Form.Control
          type="text"
          name="policyPropertyRegNo"
          placeholder=""
          onChange={onChange}
        />
      </FloatingLabel>
      <FloatingLabel
        className="mb-3"
        controlId="policyBusinessRegNo"
        label="Business Registration No."
      >
        <Form.Control
          type="text"
          name="policyBusinessRegNo"
          placeholder=""
          onChange={onChange}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="policyTaxpayerNo"
        label="Taxpayer Indentification No."
      >
        <Form.Control
          type="text"
          name="policyTaxpayerNo"
          placeholder=""
          onChange={onChange}
        />
      </FloatingLabel>
    </>
  );
};

export default PoliciesForm;
