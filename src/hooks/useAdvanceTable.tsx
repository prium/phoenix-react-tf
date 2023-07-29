import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { PropsWithChildren } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Table,
  Row,
  ColumnDef
} from '@tanstack/react-table';
interface UseAdvanceTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  selection?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  selectionColumnWidth?: number | string;
}

type Ahs<T> = {
  id: string;
  accessorKey: T;
};

const selectionColumn: Ahs<> = {
  id: 'select',
  accessorKey: ''
};

const useAdvanceTable = <K,>({ title }: UseAdvanceTableProps<T>) => {
  const asdf = selectionColumn<K>;
};

// const selectionColumn: Ahs<number> = {
//   id: 'select',
//   accessorKey: ''
//   // header: ({ table }) => (
//   //   <IndeterminateCheckbox
//   //     {...{
//   //       checked: table.getIsAllRowsSelected(),
//   //       indeterminate: table.getIsSomeRowsSelected(),
//   //       onChange: table.getToggleAllRowsSelectedHandler()
//   //     }}
//   //   />
//   // ),
//   // cell: ({ row }) => (
//   //   <IndeterminateCheckbox
//   //     {...{
//   //       checked: row.getIsSelected(),
//   //       disabled: !row.getCanSelect(),
//   //       indeterminate: row.getIsSomeSelected(),
//   //       onChange: row.getToggleSelectedHandler()
//   //     }}
//   //   />
//   // )
// };

// const useAdvanceTable = <T,>({
//   columns,
//   data,
//   selection,
//   sortable,
//   pagination,
//   pageSize
// }: PropsWithChildren<UseAdvanceTableProps<T>>) => {
//   const table = useReactTable<T>({
//     data,
//     columns: selection
//       ? [selectionColumn as ColumnDef<T>, ...columns]
//       : columns,
//     enableSorting: sortable,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     initialState: {
//       pagination: { pageSize: pagination ? pageSize : data.length }
//     }
//   });

//   return table;
// };

export default useAdvanceTable;
