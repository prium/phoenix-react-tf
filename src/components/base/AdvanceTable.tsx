import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table } from 'react-bootstrap';

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
  const { getTableProps, headers, page, prepareRow, sortable } = useAdvanceTableContext();

  return (
    <Table {...getTableProps(tableProps)}>
      <thead className={headerClassName}>
        <tr>
          {headers.map((column, index) => {
            console.log({ column });

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
                {/* {column.canSort ? (
                  column.isSorted ? (
                    column.isSortedDesc ? (
                      <span className="sort desc" />
                    ) : (
                      <span className="sort asc" />
                    )
                  ) : (
                    <span className="sort" />
                  )
                ) : (
                  ''
                )} */}
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
                return <td {...cell.getCellProps(cell.column.cellProps)}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AdvanceTable;
