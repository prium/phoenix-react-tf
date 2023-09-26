import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';

interface LeadsFilterModalProps {
  show: boolean;
  handleClose: () => void;
}

const LeadsFilterModal = ({ show, handleClose }: LeadsFilterModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} className="p-0" centered>
      <Modal.Header className="border-200 p-4">
        <h5 className="modal-title text-1000 fs-6 lh-sm">Filter</h5>
        <Button className="p-1" onClick={handleClose}>
          <FontAwesomeIcon icon="times" className="fs-9" />
        </Button>
      </Modal.Header>
      <Modal.Body className="pt-4 pb-2 px-4">
        <div className="mb-3">
          <label className="fw-bold mb-2 text-1000">Lead Status</label>
          <Form.Select>
            <option value="new-lead">New Lead</option>
            <option value="cold-lead">Cold Lead</option>
            <option value="won-lead">Won Lead</option>
            <option value="canceled">Canceled</option>
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
          <label className="fw-bold mb-2 text-1000">Designation</label>
          <Form.Select>
            <option value="vp-accounting">VP Accounting</option>
            <option value="ceo">CEO</option>
            <option value="creative-director">Creative Director</option>
            <option value="executive-manager">Executive Manager</option>
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

export default LeadsFilterModal;
