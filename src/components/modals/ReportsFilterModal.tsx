import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Form, Modal } from 'react-bootstrap';

interface ReportsFilterModalProps {
  show: boolean;
  onHide: () => void;
}

const ReportsFilterModal = ({ show, onHide }: ReportsFilterModalProps) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header className="p-4">
        <h5 className="modal-title text-1000 fs-6 lh-sm">Filter</h5>
        <Button className="p-1 text-900" onClick={onHide}>
          <FontAwesomeIcon icon="times" className="fs-9" />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-4 pb-3">
        <Form id="addEventForm" autoComplete="off">
          <Form.Group className="mb-3">
            <h5 className="mb-2 lh-lg">Lead Status</h5>
            <Form.Select id="leadStatus">
              <option value="newLead" selected>
                New Lead
              </option>
              <option value="coldLead">Cold Lead</option>
              <option value="wonLead">Won Lead</option>
              <option value="canceled">Canceled</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <h5 className="mb-2 lh-lg">Create Date</h5>
            <Form.Select id="createDate">
              <option value="today" selected>
                Today
              </option>
              <option value="last7Days">Last 7 Days</option>
              <option value="last30Days">Last 30 Days</option>
              <option value="chooseATimePeriod">Choose a time period</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <h5 className="mb-2 lh-lg">Designation</h5>
            <Form.Select id="designation">
              <option value="VPAccounting" selected>
                VP Accounting
              </option>
              <option value="ceo">CEO</option>
              <option value="creativeDirector">Creative Director</option>
              <option value="accountant">Accountant</option>
              <option value="executiveManager">Executive Manager</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0 p-4">
        <Button
          variant="phoenix-primary"
          size="sm"
          className="fs-10 px-4"
          startIcon={<FontAwesomeIcon icon="arrows-rotate" className="me-2" />}
        >
          Reset
        </Button>
        <Button variant="primary" size="sm" className="px-9 fs-10">
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportsFilterModal;
