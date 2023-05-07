import { useState } from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import Button from './Button';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

interface AdvanceTableFooterProps {
  className?: string;
  pagination?: boolean;
  navBtn?: boolean;
}

const AdvanceTableFooter = ({ className, pagination, navBtn }: AdvanceTableFooterProps) => {
  const {
    setPageSize,
    previousPage,
    nextPage,
    getCanNextPage,
    getCanPreviousPage,
    getState,
    getPrePaginationRowModel,
    getPaginationRowModel,
    getPageCount,
    setPageIndex
  } = useAdvanceTableContext();

  const {
    pagination: { pageSize, pageIndex }
  } = getState();

  const [perPage] = useState(pageSize);
  const [isAllVisible, setIsAllVisible] = useState(false);

  return (
    <Row className={classNames(className, 'align-items-center py-1')}>
      <Col className="d-flex fs-9">
        <p className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900">
          {pageSize * pageIndex + 1} to {pageSize * pageIndex + getPaginationRowModel().rows.length}
          <span className="text-600"> items of </span>
          {getPrePaginationRowModel().rows.length}
        </p>
        <Button
          variant="link"
          className="p-0 fw-semi-bold"
          endIcon={<FontAwesomeIcon icon="angle-right" className="ms-1 fs-9" />}
          onClick={() => {
            setIsAllVisible(!isAllVisible);
            setPageSize(isAllVisible ? perPage : getPrePaginationRowModel().rows.length);
          }}
        >
          View {isAllVisible ? 'less' : 'all'}
        </Button>
      </Col>
      {navBtn && (
        <Col xs="auto" className="d-flex gap-2">
          <Button
            variant="link"
            startIcon={<FontAwesomeIcon icon="chevron-left" className="me-2" />}
            className={classNames('px-1', {
              disabled: !getCanPreviousPage()
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
              disabled: !getCanNextPage()
            })}
            onClick={() => {
              nextPage();
            }}
          >
            Next
          </Button>
        </Col>
      )}
      {pagination && (
        <Col xs="auto">
          <Pagination className="mb-0 justify-content-center">
            <Pagination.Prev disabled={!getCanPreviousPage()}>
              <FontAwesomeIcon icon="chevron-left" />
            </Pagination.Prev>
            {Array.from(Array(getPageCount()).keys()).map(page => (
              <Pagination.Item
                key={page}
                active={pageIndex === page}
                onClick={() => setPageIndex(page)}
              >
                {page + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next disabled={!getCanNextPage()}>
              <FontAwesomeIcon icon="chevron-right" />
            </Pagination.Next>
          </Pagination>
        </Col>
      )}
    </Row>
  );
};

export default AdvanceTableFooter;
