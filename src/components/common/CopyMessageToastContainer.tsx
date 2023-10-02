import React, { Dispatch, SetStateAction, useState } from 'react';
import { Toast } from 'react-bootstrap';
import { Outlet, useOutletContext } from 'react-router-dom';

type ContextType = { setToastMessage: Dispatch<SetStateAction<string>> };

const CopyMessageToastContainer = () => {
  const [toastMessage, setToastMessage] = useState('');
  return (
    <div>
      CopyMessageToastContainer
      <Outlet context={{ setToastMessage } satisfies ContextType} />
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
        <Toast
          onClose={() => setToastMessage('')}
          show={!!toastMessage}
          className="align-items-center text-white bg-dark border-0 light"
        >
          <div className="d-flex">
            <Toast.Body className="P-3">
              <span className="fw-black">
                Copied: <code>{toastMessage}</code>
              </span>
            </Toast.Body>
          </div>
        </Toast>
      </div>
    </div>
  );
};

export default CopyMessageToastContainer;

export const useCopyMessageToast = () => {
  return useOutletContext<ContextType>();
};
