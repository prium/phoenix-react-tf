import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { LeadDataType } from 'data/crm/leadsTableData';
import { Link } from 'react-router-dom';

export const leadsTableColumns: ColumnDef<LeadDataType>[] = [
  {
    accessorKey: 'customer.name',
    header: 'Name',
    cell: ({ row: { original } }) => {
      const {
        avatar,
        name,
        designation,
        status: { label, type }
      } = original.customer;
      return (
        <div className="d-flex align-items-center">
          <Link to="#!">
            <Avatar src={avatar} size="xl" className="me-3" />
          </Link>
          <div>
            <Link to="#!" className="fs-8 fw-bold">
              {name}
            </Link>
            <div className="d-flex align-items-center">
              <p className="mb-0 text-1000 fw-semi-bold fs-9 me-2">
                {designation}
              </p>
              <Badge variant="phoenix" bg={type}>
                {label}
              </Badge>
            </div>
          </div>
        </div>
      );
    },
    meta: {
      headerProps: { style: { width: '25%' }, className: 'ps-0' },
      cellProps: { className: 'white-space-nowrap ps-0' }
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row: { original } }) => {
      const { email } = original;
      return (
        <Link className="text-1000" to={`mailto:${email}`}>
          {email}
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '15%' },
        className: 'ps-4 pe-5 border-end'
      },
      cellProps: {
        className: 'white-space-nowrap fw-semi-bold ps-4 border-end'
      }
    }
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row: { original } }) => {
      const { phone } = original;
      return (
        <Link className="text-1000" to={`tel:${phone}`}>
          {phone}
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: '180px' },
        className: 'ps-4 pe-5 border-end'
      },
      cellProps: {
        className: 'white-space-nowrap fw-semi-bold ps-4 border-end'
      }
    }
  },
  {
    accessorKey: 'contact',
    header: 'Contact name',
    cell: ({ row: { original } }) => original.contact,
    meta: {
      headerProps: {
        style: { width: '15%' },
        className: 'ps-4 pe-5 border-end'
      },
      cellProps: {
        className: 'white-space-nowrap ps-4 border-end fw-semi-bold text-1000'
      }
    }
  },
  {
    accessorKey: 'company',
    header: 'Company name',
    cell: ({ row: { original } }) => original.company,
    meta: {
      headerProps: {
        style: { width: '15%' },
        className: 'ps-4 pe-5 border-end'
      },
      cellProps: {
        className: 'white-space-nowrap ps-4 border-end fw-semi-bold text-1000'
      }
    }
  },
  {
    accessorKey: 'date',
    header: 'Create date',
    cell: ({ row: { original } }) => original.date,
    meta: {
      headerProps: {
        style: { width: '15%' },
        className: 'ps-4 pe-5'
      },
      cellProps: {
        className: 'white-space-nowrap ps-4 text-700'
      }
    }
  },
  {
    id: 'leadDropdown',
    cell: () => {
      return (
        <RevealDropdownTrigger>
          <RevealDropdown>
            <ActionDropdownItems />
          </RevealDropdown>
        </RevealDropdownTrigger>
      );
    },
    meta: {
      cellProps: {
        className: 'text-end pe-0 ps-4'
      }
    }
  }
];

const LeadsTable = () => {
  return (
    <div className="border-top">
      <AdvanceTable
        tableProps={{ className: 'phoenix-table fs-9' }}
        rowClassName="hover-actions-trigger btn-reveal-trigger"
      />
      <AdvanceTableFooter pagination className="py-4" />
    </div>
  );
};

export default LeadsTable;
