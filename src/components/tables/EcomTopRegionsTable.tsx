import { TopRegionsTableDataType, topRegionsTableData } from 'data/TopRegionsTableData';
import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EcomTopRegionsTable = () => {
  return (
    <Table className="fs-10 mb-0 phoenix-table">
      <thead>
        <tr>
          <th style={{ width: '32%' }}>Country</th>
          <th style={{ width: '17%' }}>Users</th>
          <th className="text-end" style={{ width: '16%' }}>
            Transactions
          </th>
          <th className="text-end" style={{ width: '20%' }}>
            Revenue
          </th>
          <th className="text-end" style={{ width: '17%' }}>
            Conv. Rate
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td className="py-4">
            <h4 className="mb-0 fw-normal">377,620</h4>
          </td>
          <td className="text-end py-4">
            <h4 className="mb-0 fw-normal">236</h4>
          </td>
          <td className="text-end py-4">
            <h4 className="mb-0 fw-normal">$15,758</h4>
          </td>
          <td className="text-end py-4">
            <h4 className="mb-0 fw-normal">10.32%</h4>
          </td>
        </tr>
        {topRegionsTableData.map((data, index) => (
          <EcomTopRegionsTableRow row={data} serial={index + 1} />
        ))}
      </tbody>
    </Table>
  );
};

const EcomTopRegionsTableRow = ({
  row,
  serial
}: {
  row: TopRegionsTableDataType;
  serial: number;
}) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <h6 className="mb-0 me-3">{serial}.</h6>
          <Link to="#!">
            <div className="d-flex justify-content-center">
              <img src={row.country.flag} alt="" width={24} />
              <p className="mb-0 ps-3 text-primary fw-bold fs-9">{row.country.name}</p>
            </div>
          </Link>
        </div>
      </td>
      <td>
        <h6 className="mb-0">
          {row.users.number}
          <span className="text-700 fw-semi-bold ms-2">({row.users.percantage})</span>
        </h6>
      </td>
      <td className="text-end">
        <h6 className="mb-0">
          {row.transactions.number}
          <span className="text-700 fw-semi-bold ms-2">({row.transactions.percantage})</span>
        </h6>
      </td>
      <td className="text-end">
        <h6 className="mb-0">
          {row.revenue.number}
          <span className="text-700 fw-semi-bold ms-2">({row.revenue.percantage})</span>
        </h6>
      </td>
      <td className="text-end">
        <h6 className="mb-0">{row.convRate}</h6>
      </td>
    </tr>
  );
};

export default EcomTopRegionsTable;
