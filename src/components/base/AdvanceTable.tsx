import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table } from 'react-bootstrap';
import Scrollbar from './Scrollbar';

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
  const { getTableProps, headers, page, prepareRow } = useAdvanceTableContext();

  return (
    <Scrollbar style={{ height: '100%' }}>
      <Table {...getTableProps(tableProps)}>
        <thead className={headerClassName}>
          <tr>
            {headers.map((column, index) => {
              return (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps(column.headerProps))}
                  className={classNames({
                    sort: column.canSort,
                    desc: column.isSortedDesc,
                    asc: column.isSorted && !column.isSortedDesc
                  })}
                >
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={bodyClassName}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr className={rowClassName} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps(cell.column.cellProps)}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Scrollbar>
  );
};

export default AdvanceTable;
