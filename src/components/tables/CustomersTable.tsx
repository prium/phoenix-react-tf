import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { Customer } from 'data/e-commerce/customers';
import Avatar from 'components/base/Avatar';

export const customersTablecolumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: 'Customer',
    cell: ({ row: { original } }) => {
      const { name, avatar } = original;
      return (
        <Link to="#!" className="d-flex align-items-center">
          <Avatar src={avatar} size="m" />
          <p className="mb-0 ms-3 text-1100 fw-bold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: { style: { width: '10%' }, className: 'pe-5' },
      cellProps: { className: 'py-0 pe-5 white-space-nowrap' }
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row: { original } }) => {
      const { email } = original;
      return (
        <Link to={`mailto:${email}`} className="fw-semi-bold">
          {email}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { width: '20%' }, className: 'pe-5' },
      cellProps: { className: 'pe-5' }
    }
  },
  {
    accessorKey: 'totalOrders',
    header: 'Orders',
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'fw-semi-bold text-1000 text-end' }
    }
  },
  {
    accessorKey: 'totalSpent',
    header: 'Total spent',
    cell: ({ row: { original } }) => currencyFormat(original.totalSpent),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end ps-3' },
      cellProps: { className: 'fw-bold text-1100 ps-3 text-end' }
    }
  },
  {
    accessorKey: 'city',
    header: 'City',
    meta: {
      headerProps: { style: { width: '25%' }, className: 'ps-7' },
      cellProps: { className: 'ps-7 text-1000 white-space-nowrap' }
    }
  },
  {
    accessorKey: 'lastSeen',
    header: 'Last seen',
    meta: {
      headerProps: { style: { width: '15%' }, className: 'text-end' },
      cellProps: { className: 'text-700 text-end' }
    }
  },
  {
    accessorKey: 'lastOrder',
    header: 'Last order',
    meta: {
      headerProps: { style: { width: '10%', minWidth: 150 }, className: 'text-end' },
      cellProps: { className: 'text-700 text-end' }
    }
  }
];

const CustomersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default CustomersTable;
