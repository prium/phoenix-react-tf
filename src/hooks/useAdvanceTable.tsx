import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { LatestReviewsTableDataType } from 'data/LatestReviewsTableData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import React, { PropsWithChildren, useState } from 'react';
import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  ColumnDef,
  flexRender,
  FilterFns
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

const useAdvanceTable = ({
  columns,
  data,
  selection,
  sortable,
  pagination,
  pageSize,
  selectionColumnWidth
}: PropsWithChildren<UseAdvanceTableProps>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });
  return table;
};

export default useAdvanceTable;
