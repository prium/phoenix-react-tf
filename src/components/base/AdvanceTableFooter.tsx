import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from './Button';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const AdvanceTableFooter = () => {
  const { page, state, setPageSize, previousPage, nextPage, canNextPage, canPreviousPage, rows } =
    useAdvanceTableContext();
  const { pageIndex, pageSize } = state;

  const [perPage] = useState(pageSize);
  const [isAllVisible, setIsAllVisible] = useState(false);

  return (
    <Row className="align-items-center py-1">
      <Col className="d-flex fs-9">
        <p className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900">
          {pageSize * pageIndex + 1} to {pageSize * pageIndex + page.length}
          <span className="text-600"> items of </span>
          {rows.length}
        </p>
        <Button
          variant="link"
          className="p-0 fw-semi-bold"
          endIcon={<FontAwesomeIcon icon="angle-right" className="ms-1 fs-9" />}
          onClick={() => {
            setIsAllVisible(!isAllVisible);
            setPageSize(isAllVisible ? perPage : rows.length);
          }}
        >
          View {isAllVisible ? 'less' : 'all'}
        </Button>
      </Col>
      <Col xs="auto" className="d-flex gap-2">
        <Button
          variant="link"
          startIcon={<FontAwesomeIcon icon="chevron-left" className="me-2" />}
          className={classNames('px-1', {
            disabled: !canPreviousPage
          })}
          onClick={() => {
            previousPage();
          }}
        >
          Previous
        </Button>
        <Button
          variant="link"
          endIcon={<FontAwesomeIcon icon="chevron-right" className="ms-2" />}
          className={classNames('px-1', {
            disabled: !canNextPage
          })}
          onClick={() => {
            nextPage();
          }}
        >
          Next
        </Button>
      </Col>
    </Row>
  );
};

export default AdvanceTableFooter;
