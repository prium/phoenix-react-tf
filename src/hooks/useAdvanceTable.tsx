import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { LatestReviewsTableDataType } from 'data/LatestReviewsTableData';
import React, { PropsWithChildren } from 'react';
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';

interface UseAdvanceTableProps {
  columns: any[];
  data: any[];
  selection?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  perPage?: number;
  selectionColumnWidth?: number | string;
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
  const advanceTableProps = useTable<LatestReviewsTableDataType>(
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
            // @ts-ignore
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
