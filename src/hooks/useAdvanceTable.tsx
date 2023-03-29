import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import React, { PropsWithChildren } from 'react';
import {
  ColumnInstance,
  TableInstance,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table';

interface UseAdvanceTableProps {
  columns: any[];
  data: any[];
  selection?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  perPage?: number;
  selectionColumnWidth?: number | string;
}

interface AdnavceTableInstance extends TableInstance {
  headers: {
    headerProps: any;
  }[] &
    ColumnInstance[];
}

const useAdvanceTable = ({
  columns,
  data,
  selection,
  sortable,
  pagination,
  perPage,
  selectionColumnWidth
}: PropsWithChildren<UseAdvanceTableProps>) => {
  console.log({ selectionColumnWidth });

  const advanceTableProps = useTable(
    {
      columns,
      data,
      disableSortBy: !sortable,
      initialState: { pageSize: pagination ? perPage : data.length }
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      if (selection) {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            // headerProps: {
            //   style: {
            //     width: selectionColumnWidth
            //   }
            // },
            // cellProps: {
            //   style: {
            //     width: selectionColumnWidth
            //   }
            // },
            maxWidth: 500,
            minWidth: 140,
            width: 200,
            Cell: ({ row }) => (
              // <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              // </div>
            )
          },
          ...columns
        ]);
      }
    }
  );

  return advanceTableProps;
};

export default useAdvanceTable;
