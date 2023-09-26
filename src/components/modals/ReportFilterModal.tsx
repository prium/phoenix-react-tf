import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

interface ReportFilterModalProps {
  show: boolean;
  handleClose: () => void;
}

const ReportFilterModal = ({ show, handleClose }: ReportFilterModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} className="p-0" centered>
      <Modal.Header className="border-200 p-4">
        <h5 className="modal-title text-1000 fs-6 lh-sm">Filter</h5>
        <Button className="p-1" onClick={handleClose}>
          <FontAwesomeIcon icon="times" className="fs-9 text-danger" />
        </Button>
      </Modal.Header>
      <Modal.Body className="pt-4 pb-2 px-4">
        <div className="mb-3">
          <label className="fw-bold mb-2 text-1000">Priority</label>
          <Form.Select>
            <option value="urgent">Urgent</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <label className="fw-bold mb-2 text-1000">Create Date</label>
          <Form.Select>
            <option value="today">Today</option>
            <option value="last-7-days">Last 7 Days</option>
            <option value="last-30-days">Last 30 Days</option>
            <option value="choose-a-time-period">Choose a time period</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <label className="fw-bold mb-2 text-1000">Category</label>
          <Form.Select>
            <option value="sales-reports">Sales Reports</option>
            <option value="HR-eports">HR Reports</option>
            <option value="marketing-reports">Marketing Reports</option>
            <option value="administrative-reports">
              Administrative Reports
            </option>
          </Form.Select>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end align-items-center px-4 pb-4 border-0 pt-3">
        <Button
          variant="phoenix-primary"
          size="sm"
          className="px-4 fs-10 my-0"
          startIcon={
            <FontAwesomeIcon icon="arrows-rotate" className="me-2 fs-10" />
          }
        >
          Reset
        </Button>
        <Button variant="primary" size="sm" className="px-9 fs-9 my-0">
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportFilterModal;
