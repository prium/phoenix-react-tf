import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import Badge from 'components/base/Badge';
import { CustomerOrder, customerOrders } from 'data/e-commerce';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { DealsReport, dealsReportData } from 'data/crm/reportsData';
import Avatar from 'components/base/Avatar';

const columns: ColumnDef<DealsReport>[] = [
  {
    accessorKey: 'dealName',
    header: 'Deal Name',
    cell: ({ row: { original } }) => (
      <Link to="#!" className="fw-bold text-primary">
        {original.dealName}
      </Link>
    ),
    meta: {
      headerProps: {
        style: { minWidth: 120 },
        className: 'pe-5'
      },
      cellProps: { className: 'py-2' }
    }
  },
  {
    id: 'deal_owner',
    accessorFn: ({ dealOwner }) => dealOwner.name,
    header: 'Deal Owner',
    cell: ({ row: { original } }) => {
      const { name, avatar, profileLink } = original.dealOwner;
      return (
        <Link
          to={profileLink}
          className=" d-flex align-items-center text-900 text-hover-1000"
        >
          <Avatar src={avatar} size="m" />
          <p className="mb-0 ms-3 text-1100 fw-semi-bold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { minWidth: 120 },
        className: 'pe-5'
      },
      cellProps: { className: 'py-2' }
    }
  },
  {
    accessorKey: 'accountName',
    header: 'Account Name',
    meta: {
      headerProps: {
        style: { minWidth: 120 },
        className: 'pe-5'
      },
      cellProps: { className: 'py-2' }
    }
  },

  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '15%' }, className: 'text-end' },
      cellProps: { className: 'text-end py-2' }
    }
  }
];

const DealsReportTable = () => {
  const table = useAdvanceTable({
    data: dealsReportData,
    columns,
    pageSize: 10,
    selection: true,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable
            tableProps={{ size: 'sm', className: 'phoenix-table fs-9' }}
          />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default DealsReportTable;
