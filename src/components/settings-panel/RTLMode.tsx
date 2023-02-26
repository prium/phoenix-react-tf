import React from 'react';
import { Form } from 'react-bootstrap';

const RTLMode = () => {
  return (
    <div className="border rounded-3 p-4 setting-panel-item bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="setting-panel-item-title mb-1">RTL </h5>
        {/* <div className="form-check form-switch mb-0">
          <input className="form-check-input" type="checkbox" data-theme-control="phoenixIsRTL" />
        </div> */}
        <Form.Check type="switch" id="custom-switch" />
      </div>
      <p className="mb-0 text-700">Change text direction</p>
    </div>
  );
};

export default RTLMode;
