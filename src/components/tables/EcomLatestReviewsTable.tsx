import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdvanceTable from 'components/base/AdvanceTable';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import { latestReviewsTableData, LatestReviewsTableDataType } from 'data/LatestReviewsTableData';
import useAdvanceTable, { useAdvanceTablSearch } from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import React from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Column, useAsyncDebounce } from 'react-table';
import Rating from 'react-rating';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

const columns: Column<LatestReviewsTableDataType>[] = [
  {
    accessor: 'productImage',
    Header: '',
    Cell: rowData => {
      const { productImage } = rowData.row.original;
      return (
        <div className="rounded-2 border">
          <img src={productImage} alt="" width={53} />
        </div>
      );
    },
    cellProps: { className: 'py-0' },
    disableSortBy: true
  },
  {
    accessor: 'product',
    Header: 'Product',
    Cell: rowData => {
      const { product } = rowData.row.original;
      return (
        <Link to="#!" className="fw-semi-bold">{`${product.slice(0, 46)}${
          product.length > 46 ? '...' : ''
        }`}</Link>
      );
    },
    headerProps: { style: { minWidth: 360 } }
  },
  {
    accessor: 'customer',
    Header: 'CUSTOMER',
    Cell: rowData => {
      const { customer } = rowData.row.original;
      return (
        <Link to="#!" className="d-flex align-items-center">
          {customer.variant === 'name' ? (
            <Avatar src={customer.avatar} size="l" variant={customer.variant}>
              {customer.name.charAt(0).toUpperCase()}
            </Avatar>
          ) : (
            <Avatar src={customer.avatar} size="l" variant={customer.variant} />
          )}
          <h6 className="mb-0 ms-3 text-900">{customer.name}</h6>
        </Link>
      );
    },
    headerProps: { style: { minWidth: 200 } }
  },
  {
    accessor: 'rating',
    Header: 'RATING',
    headerProps: { style: { minWidth: 110 } },
    Cell: rowData => {
      const { rating } = rowData.row.original;
      return (
        <>
          {/* @ts-ignore */}
          <Rating
            readonly
            className="fs-10"
            initialRating={rating}
            fullSymbol={<FontAwesomeIcon icon="star" className="text-warning" />}
            emptySymbol={<FontAwesomeIcon icon={['far', 'star']} className="text-300" />}
          />
        </>
      );
    }
  },
  {
    accessor: 'review',
    Header: 'REVIEW',
    Cell: rowData => {
      const { review } = rowData.row.original;
      return (
        <p className="fs--1 fw-semi-bold text-1000 mb-0">
          {`${review.slice(0, 134)}${
            review.length > 134 ? `...<Link href='#!'>See more</Link>` : ''
          }`}
        </p>
      );
    },
    headerProps: { style: { minWidth: 350 } }
  },
  {
    // @ts-ignore
    accessor: 'status.title',
    Header: 'STATUS',
    Cell: (rowData: any) => {
      const {
        status: { title, badgeBg, icon }
      } = rowData.row.original;
      return (
        <Badge
          bg={badgeBg}
          variant="phoenix"
          iconPosition="end"
          className="fs-10"
          icon={<FeatherIcon icon={icon} size={12} className="ms-1" />}
        >
          {title}
        </Badge>
      );
    },
    headerProps: { className: 'ps-5' },
    cellProps: { className: 'ps-5' }
  },
  {
    accessor: 'time',
    Header: 'TIME',
    Cell: rowData => {
      const { time } = rowData.row.original;
      return (
        <div className="hover-hide">
          <h6 className="text-1000 mb-0">{time}</h6>
        </div>
      );
    },
    headerProps: { className: 'text-end' },
    cellProps: { className: 'text-end white-space-nowrap' }
  },
  {
    // @ts-ignore
    accessor: 'action',
    Header: '',
    Cell: () => {
      return (
        <>
          <div className="position-relative">
            <div className="hover-actions">
              <Button variant="phoenix-secondary" className="me-1 fs-10" size="sm">
                <FontAwesomeIcon icon="check" />
              </Button>
              <Button variant="phoenix-secondary" className="fs-10" size="sm">
                <FontAwesomeIcon icon="trash" />
              </Button>
            </div>
          </div>

          <Dropdown className="btn-reveal-trigger position-static" align="end">
            <Dropdown.Toggle
              variant="phoenix-secondary"
              size="sm"
              className="dropdown-caret-none notification-dropdown-toggle fs-10"
            >
              <FontAwesomeIcon icon="ellipsis" className="fs-10" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="py-2">
              <Dropdown.Item eventKey="1">View</Dropdown.Item>
              <Dropdown.Item eventKey="2">Export</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4" className="text-danger">
                Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    },
    cellProps: { className: 'text-end' }
  }
];

const EcomLatestReviewsTable = () => {
  const advanceTableProps = useAdvanceTable({
    data: latestReviewsTableData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    selectionColumnWidth: '30px',
    sortable: true
  });

  const handleSearchInputChange = useAsyncDebounce(e => {
    advanceTableProps.setGlobalFilter(e.target.value || undefined);
  }, 200);

  return (
    <>
      <AdvanceTableProvider {...advanceTableProps}>
        <Row className="align-items-end justify-content-between pb-5 g-3">
          <Col xs="auto">
            <h3>Latest reviews</h3>
            <p className="text-700 lh-sm mb-0">Payment received across all channels</p>
          </Col>
          <Col xs={12} md="auto">
            <Row className="g-2 gy-3">
              <Col xs="auto" className="flex-1">
                <SearchBox placeholder="Search..." size="sm" onChange={handleSearchInputChange} />
              </Col>
              <Col xs="auto">
                <Button
                  variant="phoenix-secondary"
                  size="sm"
                  className="bg-white hover-bg-100 me-2"
                >
                  All products
                </Button>
                <Dropdown className="d-inline">
                  <Dropdown.Toggle
                    variant="phoenix-secondary"
                    size="sm"
                    className="bg-white hover-bg-100 dropdown-caret-none"
                  >
                    <FontAwesomeIcon icon="ellipsis-h" className="10" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="mx-n1 px-1">
          <AdvanceTable
            tableProps={{ className: 'phoenix-table fs-9 mb-0 border-top border-200' }}
            rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
          />
          <AdvanceTableFooter />
        </div>
      </AdvanceTableProvider>
    </>
  );
};

export default EcomLatestReviewsTable;
