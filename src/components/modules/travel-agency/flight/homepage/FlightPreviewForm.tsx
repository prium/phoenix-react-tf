import { faCouch, faTag, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { currencyFormat } from 'helpers/utils';
import { Col, Row } from 'react-bootstrap';

interface FormDataProps {
  flightFareType: boolean;
  priceRange: number[];
  flightClass: string;
  departTime: string;
  returnTime: string;
}

interface FlightPreviewFormProps {
  formData: FormDataProps;
}

const FlightPreviewForm = ({ formData }: FlightPreviewFormProps) => {
  return (
    <div className="bg-body-highlight p-3 p-sm-4 rounded-2 mb-4">
      <Row className="g-3">
        <Col xl={5}>
          <Row className="g-2">
            <Col md={5} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faTicket}
                  className="text-body me-2"
                  transform="up-1"
                />
                <p className="text-body text-nowrap mb-0">
                  {formData.flightFareType ? '' : 'Non-'} Refundable
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faTag}
                  className="text-body me-2"
                  transform="up-1"
                />
                <p className="text-body mb-0">
                  {currencyFormat(formData.priceRange[0])} -{' '}
                  {currencyFormat(formData.priceRange[1])}
                </p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCouch}
                  className="text-body me-2"
                  transform="up-1"
                />
                <p className="text-body mb-0 text-capitalize">
                  {formData.flightClass}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={7}>
          <Row className="g-2 text-xl-end">
            <Col md={6} className="ms-lg-auto mb-3 mb-md-0">
              <p className="mb-0">
                <span className="text-body-emphasis fw-bold">
                  Onward depart time:
                </span>
                <span className="text-body"> {formData.departTime}</span>
              </p>
            </Col>
            <Col md={6}>
              <p className="mb-0">
                <span className="text-body-emphasis fw-bold">
                  Onward return time:
                </span>
                <span className="text-body"> {formData.returnTime}</span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FlightPreviewForm;
