import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import React from 'react';
import Badge, { BadgeBg } from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import china from 'assets/img/country/china.png';
import usa from 'assets/img/country/usa.png';
import india from 'assets/img/country/india.png';

type Data = {
  country: {
    name: string;
    flag: string; // path
  };
  users: {
    number: string;
    percantage: string;
  };
  status: {
    type: BadgeBg | undefined;
    label: string;
  };
};

const visitorData: Data[] = [
  {
    country: {
      name: 'India',
      flag: india
    },
    users: {
      number: '92,896',
      percantage: '41.6%'
    },
    status: {
      type: 'info',
      label: '15.21%'
    }
  },
  {
    country: {
      name: 'China',
      flag: china
    },
    users: {
      number: '50,496',
      percantage: '32.8%'
    },
    status: {
      type: 'warning',
      label: '05.21%'
    }
  },
  {
    country: {
      name: 'USA',
      flag: usa
    },
    users: {
      number: '45,679',
      percantage: '24.3%'
    },
    status: {
      type: 'primary',
      label: '22.12%'
    }
  }
];

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'country name',
    cell: ({ row: { original } }) => (
      <Link
        className="d-flex align-items-center text-primary py-md-1 py-xxl-0"
        to=""
      >
        <img src={original.country.flag} alt="" width="40" />
        <p className="mb-0 ps-3 fw-bold fs-9">{original.country.name}</p>
      </Link>
    ),
    meta: {
      headerProps: {
        className: ' fs-10'
      }
    }
  },
  {
    accessorKey: 'users',
    cell: ({ row: { original } }) => (
      <h6>
        {original.users.number}
        <span className="text-body-tertiary fw-semibold ms-2">
          {original.users.percantage}
        </span>
      </h6>
    ),
    meta: {
      headerProps: {
        className: ' fs-10'
      }
    }
  },
  {
    accessorKey: 'status',
    cell: ({ row: { original } }) => (
      <Badge className="fs-10" variant="phoenix" bg={original.status.type}>
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        {original.status.label}
      </Badge>
    ),
    meta: {
      headerProps: {
        style: { minWidth: 100, width: '15%' },
        className: 'text-end fs-10'
      },
      cellProps: { className: 'text-end fw-semibold' }
    }
  }
];

export const VisitorsCardTable = () => {
  const table = useAdvanceTable({
    data: visitorData,
    columns,
    pageSize: 5,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-10 mb-0 mt-3'
        }}
        headerClassName="fs-0"
      />
      <AdvanceTableFooter className="py-3" viewAllBtnClass="ms-auto" />
    </AdvanceTableProvider>
  );
};
