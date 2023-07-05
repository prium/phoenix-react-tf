import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { PropsWithChildren } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Table,
  Row
} from '@tanstack/react-table';
interface UseAdvanceTableProps {
  columns: any[];
  data: any[];
  selection?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  selectionColumnWidth?: number | string;
}

const selectionColumn = {
  id: 'select',
  header: ({ table }: { table: Table<{}> }) => (
    <IndeterminateCheckbox
      {...{
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler()
      }}
    />
  ),
  cell: ({ row }: { row: Row<{}> }) => (
    <IndeterminateCheckbox
      {...{
        checked: row.getIsSelected(),
        disabled: !row.getCanSelect(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler()
      }}
    />
  )
};

const useAdvanceTable = ({
  columns,
  data,
  selection,
  sortable,
  pagination,
  pageSize
}: PropsWithChildren<UseAdvanceTableProps>) => {
  const table = useReactTable({
    data,
    columns: selection ? [selectionColumn, ...columns] : columns,
    enableSorting: sortable,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: pagination ? pageSize : data.length }
    }
  });

  return table;
};

export default useAdvanceTable;
