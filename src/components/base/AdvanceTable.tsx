import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table } from 'react-bootstrap';
import { ColumnInstance } from 'react-table';

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
    <div className="table-responsive">
      <Table {...getTableProps(tableProps)}>
        <thead className={headerClassName}>
          <tr>
            {headers.map((column, index) => {
              // console.log({ column: column.headerProps });
              // console.log({ d: column.getHeaderProps({ style: { d: 'as' } }) });

              return (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  // style={{ ...column.getHeaderProps.style, ...getColumnStyle(column) }}
                >
                  {column.render('Header')}
                  {column.canSort ? (
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
                  )}
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
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdvanceTable;
