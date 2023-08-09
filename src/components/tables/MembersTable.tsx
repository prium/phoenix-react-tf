import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import { Member } from 'data/members';

export const membersTablecolumns: ColumnDef<Member>[] = [
  {
    accessorKey: 'name',
    header: 'Customer',
    cell: ({ row: { original } }) => {
      const { name, avatar } = original;
      return (
        <Link to="#!" className="d-flex align-items-center">
          <Avatar src={avatar} size="m" />
          <p className="mb-0 ms-3 text-1100 fw-semi-bold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: '200' },
        className: 'pe-5'
      },
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
      headerProps: {
        style: { width: '15%', minWidth: '200' },
        className: 'pe-5'
      },
      cellProps: { className: 'pe-5' }
    }
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile Number',
    meta: {
      headerProps: {
        style: { width: '20%', minWidth: '200' },
        className: ''
      },
      cellProps: { className: 'fw-bold text-1100' }
    }
  },
  {
    accessorKey: 'city',
    header: 'City',
    meta: {
      headerProps: { style: { width: '10%' }, className: 'ps-7' },
      cellProps: { className: 'ps-7 text-1000 white-space-nowrap' }
    }
  },
  {
    accessorKey: 'lastActive',
    header: 'Last Active',
    meta: {
      headerProps: {
        style: { width: '21%', minWidth: '200' },
        className: 'text-end'
      },
      cellProps: { className: 'text-700 text-end' }
    }
  },
  {
    accessorKey: 'joined',
    header: 'Joined',
    meta: {
      headerProps: {
        style: { width: '19%', minWidth: '200' },
        className: 'text-end'
      },
      cellProps: { className: 'text-700 text-end' }
    }
  }
];

const MembersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default MembersTable;
