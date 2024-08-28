import SearchBox from 'components/common/SearchBox';
import RoomFilterCheckbox from './RoomFilterCheckbox';
import { ChangeEvent } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider, {
  useAdvanceTableContext
} from 'providers/AdvanceTableProvider';

export interface checkboxItem {
  id: number;
  name: string;
}

const checkboxData: checkboxItem[] = [
  {
    id: 1,
    name: 'any'
  },
  {
    id: 2,
    name: 'Deluxe twin room'
  },
  {
    id: 3,
    name: 'Twin room'
  }
];

export const columns: ColumnDef<checkboxItem>[] = [
  {
    // For filtering and searching projects by status
    id: 'name',
    accessorFn: ({ name }) => name
  },
  {
    // For searching projects by name
    accessorKey: 'name'
  }
];

const RoomFilterSearch = ({ items }: { items: string[] }) => {
  const { setGlobalFilter } = useAdvanceTableContext<checkboxItem>();

  const table = useAdvanceTable<checkboxItem>({
    data: checkboxData,
    columns,
    pageSize: 10
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };
  return (
    <>
      <AdvanceTableProvider {...table}>
        <SearchBox
          placeholder="Search..."
          size="sm"
          onChange={handleSearchInputChange}
          className="mx-auto mb-4"
        />
        {/* {items.map((item, index) => (
          <>
            <RoomFilterCheckbox
              name={item.split(' ').join('-')}
              value={item.split(' ').join('-')}
              label={item}
              key={index}
            />
          </>
        ))} */}
        {table
          .getRowModel()
          .rows.map(row => row.original)
          .map((item, index) => (
            <RoomFilterCheckbox
              name={item.name.split(' ').join('-')}
              value={item.name.split(' ').join('-')}
              label={item.name}
              key={index}
            />
          ))}
      </AdvanceTableProvider>
    </>
  );
};

export default RoomFilterSearch;
