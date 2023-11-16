import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

interface DealsAddStageModalProps {
  show: boolean;
  handleClose: () => void;
}

const DealsAddStageModal = ({ show, handleClose }: DealsAddStageModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} centered contentClassName="border">
      <Modal.Header className="px-6 pt-6 pb-5 border-0">
        <h5 className="modal-title text-1000 fs-6 lh-sm">Create New Stage</h5>
        <Button variant="phoenix-secondary" onClick={handleClose} size="sm">
          <FontAwesomeIcon icon={faTimes} className="text-danger" />
        </Button>
      </Modal.Header>
      <Modal.Body className="px-6 py-0 mb-8">
        <Form.Group className="mb-4">
          <Form.Label className="form-label-header mb-2">Deal Name</Form.Label>
          <Form.Control type="text" placeholder="Enter deal name" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label-header mb-2">
            Expected Revenue
          </Form.Label>
          <Row className="g-2">
            <Col xs={8} sm={9}>
              <Form.Control
                type="number"
                placeholder="$ Enter amount"
                className="flex-1 input-spin-none"
              />
            </Col>
            <Col xs={4} sm={3}>
              <Form.Select as="select" className="form-select">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="CNY">CNY</option>
                <option value="CHF">CHF</option>
                <option value="ZAR">ZAR</option>
                <option value="BRL">BRL</option>
                <option value="RUB">RUB</option>
                <option value="INR">INR</option>
                <option value="MXN">MXN</option>
                <option value="NZD">NZD</option>
                <option value="SGD">SGD</option>
                <option value="HKD">HKD</option>
                <option value="KRW">KRW</option>
                <option value="SEK">SEK</option>
                <option value="NOK">NOK</option>
                <option value="TRY">TRY</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end align-items-center border-0 px-6 pb-6">
        <Button
          variant="link"
          className="px-4 m-0 text-danger"
          onClick={handleClose}
        >
          Cencel
        </Button>
        <Button variant="primary" className="px-4 m-0" onClick={handleClose}>
          Create New Stage
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DealsAddStageModal;
