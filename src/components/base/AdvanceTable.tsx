import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table } from 'react-bootstrap';
import Scrollbar from './Scrollbar';
import { flexRender } from '@tanstack/react-table';

interface AdvanceTableProps {
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  tableProps?: any;
}

const AdvanceTable = ({
  headerClassName,
  bodyClassName,
  rowClassName,
  tableProps
}: AdvanceTableProps) => {
  const data = useAdvanceTableContext();
  console.log({ data });

  const { getRowModel, getFlatHeaders } = data;

  return (
    <Scrollbar style={{ height: '100%' }}>
      <Table>
        <thead className={headerClassName}>
          <tr>
            {getFlatHeaders().map((header, index) => {
              console.log({ header });

              return (
                <th
                  key={header.id}
                  className={classNames({
                    sort: header.column.getCanSort(),
                    desc: header.column.getIsSorted() === 'desc',
                    asc: header.column.getIsSorted() === 'asc'
                  })}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={bodyClassName}>
          {getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Scrollbar>
  );
};

export default AdvanceTable;
