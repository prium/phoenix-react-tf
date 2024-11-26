import React, { Dispatch, SetStateAction } from 'react';
import { Offcanvas } from 'react-bootstrap';
import TripHomepageFilterOffcanvasContent from './TripHomepageFilterOffcanvasContent';

interface TripHomepageFilterOffcanvasProps {
  isOpen: boolean;
  setIsOffCanvasOpen: Dispatch<SetStateAction<boolean>>;
}

const TripHomepageFilterOffcanvas = ({
  isOpen,
  setIsOffCanvasOpen,
  ...props
}: TripHomepageFilterOffcanvasProps) => {
  return (
    <Offcanvas
      show={isOpen}
      onHide={() => setIsOffCanvasOpen(false)}
      placement="end"
      {...props}
    >
      <Offcanvas.Header className="p-4 bg-body-highlight" closeButton>
        <h5 className="mb-0 text-body-highlight">Filter</h5>
      </Offcanvas.Header>
      <Offcanvas.Body className="scrollbar p-0">
        <TripHomepageFilterOffcanvasContent />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TripHomepageFilterOffcanvas;
