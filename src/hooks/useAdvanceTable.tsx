import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { LatestReviewsTableDataType } from 'data/LatestReviewsTableData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import React, { PropsWithChildren, useState } from 'react';
import {
  useAsyncDebounce,
  useFilters,
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
  pageSize?: number;
  selectionColumnWidth?: number | string;
}

const useAdvanceTable = ({
  columns,
  data,
  selection,
  sortable,
  pagination,
  pageSize,
  selectionColumnWidth
}: PropsWithChildren<UseAdvanceTableProps>) => {
  const advanceTableProps = useTable<LatestReviewsTableDataType>(
    {
      columns,
      data,
      disableSortBy: !sortable,
      initialState: { pageSize: pagination ? pageSize : data.length }
    },
    useFilters,
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

export const useAdvanceTablSearch = (globalFilter: any, setGlobalFilter: any) => {
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce(e => {
    // setValue(e.target.value);
    setGlobalFilter(e.target.value || undefined);
  }, 200);

  return { onChange };
};

export default useAdvanceTable;
