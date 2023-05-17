import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdvanceTable from 'components/base/AdvanceTable';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import { latestReviewsTableData, LatestReviewsTableDataType } from 'data/LatestReviewsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ColumnDef } from '@tanstack/react-table';
import { ChangeEvent } from 'react';
import Rating from 'components/base/Rating';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns: ColumnDef<LatestReviewsTableDataType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <div className="rounded-2 border">
          <img src={productImage} alt="" width={53} />
        </div>
      );
    },
    meta: { cellProps: { className: 'py-0' } },
    enableSorting: false
  },
  {
    accessorKey: 'product',
    header: () => 'Product',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="fw-semi-bold">{`${product.slice(0, 46)}${
          product.length > 46 ? '...' : ''
        }`}</Link>
      );
    },
    enableSorting: true,
    meta: {
      headerProps: { style: { minWidth: 360 }, className: 'py-2' }
    }
  },
  {
    accessorFn: ({ customer: { name } }) => name,
    header: 'CUSTOMER',
    cell: ({ row: { original } }) => {
      const { customer } = original;
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
    meta: {
      headerProps: { style: { minWidth: 200 } }
    }
  },
  {
    accessorKey: 'rating',
    header: 'RATING',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating readonly initialValue={rating} />;
    },
    meta: {
      headerProps: { style: { minWidth: 110 } }
    }
  },
  {
    accessorKey: 'review',
    header: 'REVIEW',
    cell: ({ row: { original } }) => {
      const { review } = original;
      return (
        <p className="fs--1 fw-semi-bold text-1000 mb-0 line-clamp-3">
          {review.slice(0, 134)}
          {review.length > 134 && (
            <>
              {`...`}
              <Link to="#!">See more</Link>
            </>
          )}
        </p>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 350 } }
    }
  },
  {
    accessorFn: ({ status: { title } }) => title,
    header: 'STATUS',
    cell: ({ row: { original } }) => {
      const {
        status: { title, badgeBg, icon }
      } = original;
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
    meta: {
      headerProps: { className: 'ps-5' },
      cellProps: { className: 'ps-5' }
    }
  },
  {
    accessorKey: 'time',
    header: 'TIME',
    cell: ({ row: { original } }) => {
      const { time } = original;
      return (
        <div className="hover-hide">
          <h6 className="text-1000 mb-0">{time}</h6>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-end' },
      cellProps: { className: 'text-end white-space-nowrap' }
    }
  },
  {
    accessorKey: 'action',
    enableSorting: false,
    header: '',
    cell: row => {
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
          <RevealDropdown btnClassName="fs-10">
            <ActionDropdownItems />
          </RevealDropdown>
        </>
      );
    },
    meta: {
      cellProps: { className: 'text-end' }
    }
  }
];

const CustomerRatingsTable = () => {
  const table = useAdvanceTable({
    data: latestReviewsTableData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    selectionColumnWidth: '30px',
    sortable: true
  });

  return (
    <>
      <AdvanceTableProvider {...table}>
        <AdvanceTable
          tableProps={{ className: 'phoenix-table fs-9 mb-0 border-top border-200' }}
          rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
        />
        <AdvanceTableFooter navBtn />
      </AdvanceTableProvider>
    </>
  );
};

export default CustomerRatingsTable;
