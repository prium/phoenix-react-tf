import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DealDetailsCallTable from 'components/tables/DealDetailsCallTable';
import { Col, Form, Row } from 'react-bootstrap';

const DealDetailsCall = () => {
  return (
    <>
      <Row className="align-items-center gx-4 gy-3 flex-wrap mb-3">
        <Col xs="auto" className="flex-1">
          <h2 className="mb-0">Call</h2>
        </Col>
        <Col xs="auto">
          <div className="d-flex gap-3 gap-sm-4">
            <Form.Check
              type="radio"
              label="All Call"
              name="callType"
              id="all-call"
              defaultChecked
              className="mb-0"
            />
            <Form.Check
              type="radio"
              label="Incoming Call"
              name="callType"
              id="incoming-call"
              className="mb-0"
            />
            <Form.Check
              type="radio"
              label="OutgoingCall"
              name="callType"
              id="outgoing-call"
              className="mb-0"
            />
          </div>
        </Col>
        <Col xs="auto">
          <Button
            variant="primary"
            startIcon={<FontAwesomeIcon icon="plus" className="me-2" />}
          >
            Add Call
          </Button>
        </Col>
      </Row>
      <DealDetailsCallTable />
    </>
  );
};

export default DealDetailsCall;
