import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';

import Badge, { BadgeBg } from 'components/base/Badge';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import { useMemo } from 'react';

type Project = {
  id: number;
  name: string;
  start: string;
  task: number;
  status: {
    label: string;
    type: BadgeBg;
  };
};

const projects: Project[] = [
  {
    id: 1,
    name: 'Making the Butterflies shoot each other dead',
    start: 'Dec 12, 2018',
    task: 287,
    status: {
      label: 'completed',
      type: 'success'
    }
  },
  {
    id: 2,
    name: 'Project Doughnut Dungeon',
    start: 'Jan 9, 2019',
    task: 125,
    status: {
      label: 'inactive',
      type: 'warning'
    }
  },
  {
    id: 3,
    name: 'The Chewing Gum Attack',
    start: 'Sep 4, 2019',
    task: 72,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 4,
    name: 'Execution of Micky the foul mouse',
    start: 'Nov 1, 2019',
    task: 91,
    status: {
      label: 'critical',
      type: 'danger'
    }
  },
  {
    id: 5,
    name: 'Harnessing stupidity from Jerry',
    start: 'Dec 28, 2019',
    task: 134,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 6,
    name: 'Water resistant mosquito killer gun',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  },
  {
    id: 7,
    name: 'Olga Dies Dreaming by Xóchitl González',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  }
];

const projectListTableColumns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Project Name',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link to="#!" className="text-decoration-none fw-bold fs-8">
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: { className: 'white-space-nowrap py-4' }
    }
  },

  {
    header: 'Start date',
    accessorKey: 'start',
    meta: {
      cellProps: { className: 'ps-3 fs-9 text-900 white-space-nowrap py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    accessorKey: 'task',
    header: 'Task',
    meta: {
      cellProps: { className: 'ps-3 text-900 py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    id: 'status',
    header: 'Status',
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge variant="phoenix" bg={status.type}>
          {status.label}
        </Badge>
      );
    },
    meta: {
      cellProps: { className: 'ps-8 py-4' },
      headerProps: { className: 'ps-8' }
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
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end' }
    }
  }
];

const Test = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: projectListTableColumns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const { getColumn, getPrePaginationRowModel } = table;

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }: any) => status.label === label
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
      <FilterTab tabItems={tabItems} className="mb-3" />
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

export default Test;
