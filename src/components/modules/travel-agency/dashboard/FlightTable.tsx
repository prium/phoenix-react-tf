import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const FlightTable = () => {
  return (
    <>
      <div className="flight-desc-card p-3 bg-body-emphasis rounded-3">
        <Row className="gx-5 justify-content-between">
          <Col xs="auto">
            <Table className="fs-9" bsPrefix="flight-table">
              <tr>
                <th style={{ width: 70 }}></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <h6 className="mb-0 text-body-tertiary">Flight no.</h6>
                </td>
                <td className="text-body-tertiary pe-2"> : </td>
                <td>
                  <h6 className="mb-0 text-nowrap fw-semibold text-body-tertiary">
                    FF-SCA001
                  </h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 className="mb-0 text-body-tertiary">Model</h6>
                </td>
                <td className="text-body-tertiary pe-2"> : </td>
                <td>
                  <h6 className="mb-0 text-nowrap fw-semibold text-body-tertiary">
                    Appa 707-RTX
                  </h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 className="mb-0 text-body-tertiary">Velocity</h6>
                </td>
                <td className="text-body-tertiary pe-2"> : </td>
                <td>
                  <h6 className="mb-0 text-nowrap fw-semibold text-body-tertiary">
                    450 km/h
                  </h6>
                </td>
              </tr>
            </Table>
          </Col>
          <Col xs="auto">
            <Table className="fs-9 font-sans-serif" bsPrefix="flight-table">
              <tr>
                <th style={{ width: 70 }}></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <h6 className="mb-0 text-body-tertiary">Airline</h6>
                </td>
                <td className="text-body-tertiary pe-2"> : </td>
                <td>
                  <h6 className="mb-0 text-nowrap fw-semibold text-primary">
                    YIP YIP
                  </h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 className="mb-0 text-body-tertiary">Callsign</h6>
                </td>
                <td className="text-body-tertiary pe-2"> : </td>
                <td>
                  <h6 className="mb-0 text-nowrap fw-semibold text-body-tertiary">
                    Skybison1
                  </h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 className="mb-0 text-body-tertiary">ETA</h6>
                </td>
                <td className="text-body-tertiary pe-2"> : </td>
                <td>
                  <h6 className="mb-0 text-nowrap fw-semibold text-body-tertiary">
                    12 hrs 57 mins
                  </h6>
                </td>
              </tr>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FlightTable;
