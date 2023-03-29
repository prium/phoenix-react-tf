import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdvanceTable from 'components/base/AdvanceTable';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import { latestReviewsTableData, LatestReviewsTableDataType } from 'data/LatestReviewsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import React from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const columns = [
  {
    accessor: 'productImage',
    Header: '',
    Cell: (rowData: any) => {
      const { productImage } = rowData.row.original;
      return (
        <div className="rounded-2 border">
          <img src={productImage} alt="" width={53} />
        </div>
      );
    }
  },
  {
    accessor: 'product',
    Header: 'Product',
    Cell: (rowData: any) => {
      const { product } = rowData.row.original;
      return <Link to="#!">{`${product.slice(0, 46)}${product.length > 46 ? '...' : ''}`}</Link>;
    }
  },
  {
    accessor: 'customer',
    Header: 'CUSTOMER',
    Cell: (rowData: any) => {
      const { customer } = rowData.row.original;
      return (
        <Link to="#!" className="d-flex align-items-center">
          {customer.variant === 'name' ? (
            <Avatar src={customer.avatar} size="l" variant={customer.variant}>
              {customer.name.charAt(0)}
            </Avatar>
          ) : (
            <Avatar src={customer.avatar} size="l" variant={customer.variant} />
          )}
          <h6 className="mb-0 ms-3 text-900">{customer.name}</h6>
        </Link>
      );
    }
  },
  {
    accessor: 'rating',
    Header: 'RATING'
  },
  {
    accessor: 'review',
    Header: 'REVIEW'
  },
  {
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
    }
  },
  {
    accessor: 'time',
    Header: 'TIME',
    Cell: (rowData: any) => {
      const { time } = rowData.row.original;
      return (
        <div className="hover-hide">
          <h6 className="text-1000 mb-0">{time}</h6>
        </div>
      );
    }
  }
];

const EcomLatestReviewsTable = () => {
  const advanceTableProps = useAdvanceTable({
    data: latestReviewsTableData,
    columns,
    // pagination: true,
    // perPage: 10,
    selection: true,
    selectionColumnWidth: '30px',
    sortable: true
  });

  return (
    <>
      <Row className="align-items-end justify-content-between pb-5 g-3">
        <Col xs="auto">
          <h3>Latest reviews</h3>
          <p className="text-700 lh-sm mb-0">Payment received across all channels</p>
        </Col>
        <Col xs={12} md="auto">
          <Row className="g-2 gy-3">
            <Col xs="auto" className="flex-1">
              <SearchBox placeholder="Search..." size="sm" />
            </Col>
            <Col xs="auto">
              <Button variant="phoenix-secondary" size="sm" className="bg-white hover-bg-100 me-2">
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
      <AdvanceTableProvider {...advanceTableProps}>
        <AdvanceTable />
      </AdvanceTableProvider>
    </>
  );
};

export default EcomLatestReviewsTable;
