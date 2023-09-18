import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LeadDeal, leadDealsTableData } from 'data/crm/leadsData';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns: ColumnDef<LeadDeal>[] = [
  {
    header: 'deal name',
    accessorKey: 'name',
    cell: ({ row: { original } }) => (
      <Link to="#!" className="fw-semi-bold">
        {original.name}
      </Link>
    ),
    meta: {
      cellProps: { className: 'py-0' },
      headerProps: { style: { width: '7%' } }
    }
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row: { original } }) => currencyFormat(original.amount),
    meta: {
      headerProps: { style: { minWidth: 250, width: '30%' } },
      cellProps: { className: 'pe-11' }
    }
  },
  {
    accessorKey: 'stage',
    header: 'Stage',
    meta: {
      headerProps: { style: { width: '16%' } },
      cellProps: { className: 'white-space-nowrap' }
    }
  },
  {
    accessorKey: 'probability',
    header: 'Probability',
    meta: {
      headerProps: { style: { width: '10%' } },
      cellProps: { className: 'text-700 fw-semi-bold' }
    }
  },
  {
    accessorKey: 'closing_date',
    header: () => 'Closing date',
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end fw-semi-bold' }
    }
  },
  {
    accessorKey: 'type',
    header: () => 'Type',
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end fw-semi-bold' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdown btnClassName="fs-10">
        <ActionDropdownItems />
      </RevealDropdown>
    ),
    meta: {
      headerProps: { style: { width: '35%' } }
    }
  }
];

const LeadDealsTable = () => {
  const table = useAdvanceTable({
    data: leadDealsTableData,
    columns,
    pageSize: 5,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y">
          <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default LeadDealsTable;
