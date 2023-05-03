import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import Portal from 'components/base/Portal';
import Section from 'components/base/Section';
import React, { useState } from 'react';
import { Button, Col, Offcanvas } from 'react-bootstrap';
import {
  Icon,
  UilChartPie,
  UilCube,
  UilDocumentLayoutRight,
  UilFilesLandscapesAlt,
  UilPuzzlePiece,
  UilTimes
} from '@iconscout/react-unicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterItemsCollapse from 'components/modules/e-commerce/products-filter/FilterItemsCollapse';

const ProductsFilter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="position-relative">
      <PhoenixOffcanvas
        open={show}
        onHide={handleClose}
        style={{ width: 300 }}
        className="p-5"
        // backdrop={false}
        // className="phoenix-offcanvas phoenix-offcanvas-fixed"
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Filters</h3>
          <button className="btn p-0">
            <UilTimes size={16} />
          </button>
        </div>
        <FilterItemsCollapse />
      </PhoenixOffcanvas>
      <Section className="pt-5 pb-9">
        <Col lg={3} xxl={2} id="asd">
          <Button variant="primary" onClick={handleShow}>
            Launch
          </Button>
        </Col>
        <Col lg={9} xxl={10}></Col>
      </Section>
    </div>
  );
};

export default ProductsFilter;
