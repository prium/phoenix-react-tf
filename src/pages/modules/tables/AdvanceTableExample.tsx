import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Button from 'components/base/Button';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import SearchBox from 'components/common/SearchBox';
import DocPageHeader from 'components/docs/DocPageHeader';
import { TableDocData, tableDocData } from 'data/doc/table';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

const AdvanceTableExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Advance Tables"
        link={{
          text: 'Tanstack table documentation',
          url: 'https://tanstack.com/table/v8'
        }}
      >
        <div>
          {`${process.env.REACT_APP_TITLE || ''}`} React uses{' '}
          <strong>TanStack Table</strong> for advance features of table.{' '}
          <strong>TanStack Table</strong> is a headless UI for building powerful
          tables & datagrids. <strong>TanStack Table's</strong> API and engine
          are highly modular and framework-independent while still prioritizing
          ergonomics.
        </div>
      </DocPageHeader>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Small Table">
          <p className="mb-0">
            Use <code>size="sm"</code> to make tables compact by cutting cell
            padding in half.
          </p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <Example />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Small Table">
          <p className="mb-0">
            Use <code>size="sm"</code> to make tables compact by cutting cell
            padding in half.
          </p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <PaginationExample />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Small Table">
          <p className="mb-0">
            Use <code>size="sm"</code> to make tables compact by cutting cell
            padding in half.
          </p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <SearchExample />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Small Table">
          <p className="mb-0">
            Use <code>size="sm"</code> to make tables compact by cutting cell
            padding in half.
          </p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <FilterByColumnExample />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

const columns: ColumnDef<TableDocData>[] = [
  {
    accessorKey: 'name'
  },
  {
    accessorKey: 'email',
    cell: ({ row: { original } }) => (
      <Link to={`mailto:${original.email}`}>{original.email}</Link>
    )
  },
  {
    accessorKey: 'age'
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
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];

const Example = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

const PaginationExample = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter pagination />
    </AdvanceTableProvider>
  );
};

const SearchExample = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <AdvanceTableProvider {...table}>
      <SearchBox
        placeholder="Search..."
        size="sm"
        onChange={handleSearchInputChange}
        className="mx-auto mb-4"
      />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

const FilterByColumnExample = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Critical',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

export default AdvanceTableExample;
