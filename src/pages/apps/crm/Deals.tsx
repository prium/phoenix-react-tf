import {
  faAngleDown,
  faFileExport,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Deal, dealColumns } from 'data/crm/deals';
import { currencyFormat } from 'helpers/utils';
import { useState } from 'react';
import {
  Card,
  Col,
  Collapse,
  Form,
  ProgressBar,
  Row,
  Table
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const DealCard = ({ deal }: { deal: Deal }) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <FeatherIcon icon="clock" size={16} className="me-2" />

          <p className="mb-0 fs-9 fw-semi-bold text-700 flex-1">
            {deal.date} . <span className="text-500">{deal.time}</span>
          </p>
          <button
            className="btn p-0"
            onClick={() => setOpenDetails(!openDetails)}
          >
            <FontAwesomeIcon icon={faAngleDown} className="text-700 fs-8" />
          </button>
        </div>
        <div className="deals-items-head d-flex align-items-center mb-2">
          <a
            className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7"
            // href={deal.link}
          >
            {deal.title}
          </a>
          <p className="deals-category fs-70 mb-0 mt-1 d-none">
            <span
              className="me-1"
              style={{ strokeWidth: 2, height: '12px', width: '12px' }}
            >
              Grid Icon
            </span>
            {deal.category}
          </p>
          <p className="ms-auto fs-9 text-1100 fw-semi-bold mb-0 deals-revenue">
            {deal.revenue}
          </p>
        </div>
        <Collapse in={openDetails}>
          <div>
            <div className="deals-company-agent d-flex flex-between-center">
              <div className="d-flex align-items-center">
                <span className="uil uil-user me-2"></span>
                <p className="text-800 fw-bold fs-9 mb-0">{deal.company}</p>
              </div>
              <div className="d-flex align-items-center">
                <span className="uil uil-headphones me-2"></span>
                <p className="text-800 fw-bold fs-9 mb-0">{deal.agent}</p>
              </div>
            </div>
            <div className="d-flex gap-2 mb-5">
              <span
                className={`badge badge-phoenix badge-phoenix-${deal.badge.variant}`}
              >
                {deal.badge.label}
              </span>
              <span
                className={`badge badge-phoenix badge-phoenix-${deal.priority.variant}`}
              >
                {deal.priority.label}
              </span>
            </div>
            <Table className="mb-4 w-100 table-stats">
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ strokeWidth: 2 }}>
                        Dollar Sign Icon
                      </span>
                      <p className="fw-semi-bold fs-9 mb-0 text-700">
                        Expected Revenue
                      </p>
                    </div>
                  </td>
                  <td className="d-none d-sm-block pe-sm-2">:</td>
                  <td>
                    <p className="ps-6 ps-sm-0 fw-semi-bold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-1100">
                      {deal.revenue}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span
                        className="me-2"
                        style={{
                          strokeWidth: 2,
                          width: '16px',
                          height: '16px'
                        }}
                      >
                        User Icon
                      </span>
                      <p className="fw-semi-bold fs-9 mb-0 text-700">
                        Company Name
                      </p>
                    </div>
                  </td>
                  <td className="d-none d-sm-block pe-sm-2">:</td>
                  <td>
                    <p className="ps-6 ps-sm-0 fw-semi-bold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-1100 d-flex align-items-center gap-2">
                      {deal.company}
                      <a href="#!">
                        <span className="fa-solid fa-square-phone text-700"></span>
                      </a>
                      <a href="#!">
                        <span className="fa-solid fa-square-envelope text-700"></span>
                      </a>
                      <a href="#!">
                        <span className="fab fa-whatsapp-square text-700"></span>
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span
                        className="me-2"
                        style={{
                          strokeWidth: 2,
                          width: '16px',
                          height: '16px'
                        }}
                      >
                        Calendar Icon
                      </span>
                      <p className="fw-semi-bold fs-9 mb-0 text-700">
                        Closing Date & Time
                      </p>
                    </div>
                  </td>
                  <td className="d-none d-sm-block pe-sm-2">:</td>
                  <td>
                    <p className="ps-6 ps-sm-0 fw-semi-bold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-1100">
                      {deal.closingDate}
                      <span>{deal.closingTime}</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <span
                        className="me-2"
                        style={{
                          strokeWidth: 2,
                          width: '16px',
                          height: '16px'
                        }}
                      >
                        Headphones Icon
                      </span>
                      <p className="fw-semi-bold fs-9 mb-0 text-700">
                        Assigned Agent
                      </p>
                    </div>
                  </td>
                  <td className="d-none d-sm-block pe-sm-2">:</td>
                  <td>
                    <Form.Select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                      {[
                        'Ally Aagaard',
                        'Lonnie Kub',
                        'Aida Moen',
                        'Niko Koss',
                        'Alec Haag',
                        'Ola Smith',
                        'Leif Walsh',
                        'Brain Cole',
                        'Reese Mann'
                      ].map(agent => (
                        <option key={agent} selected={agent === deal.agent}>
                          {agent}
                        </option>
                      ))}
                    </Form.Select>
                  </td>
                </tr>
              </tbody>
            </Table>
            <p className="fs-9 mb-1">Probability:</p>
            <ProgressBar style={{ height: '8px' }}>
              <ProgressBar
                now={Number(deal.probability.value)}
                label={deal.probability.value + '%'}
                className={`bg-${deal.probability.variant}`}
              />
            </ProgressBar>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

const Deals = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-6">
        <h2 className="mb-4">Deals</h2>
        <Row className="g-3 justify-content-between mb-4">
          <Col xs="auto">
            <Button
              variant="primary"
              className="me-4"
              startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
            >
              Add Deal
            </Button>
            <Button
              variant="link"
              className="text-900 px-0"
              startIcon={
                <FontAwesomeIcon icon={faFileExport} className="fs-9 me-2" />
              }
            >
              Export
            </Button>
          </Col>
          <Col xs="auto">
            <div className="d-flex">
              <SearchBox placeholder="Search by name" className="me-2" />
              <Form.Select>
                <option value="deals">Deals</option>
              </Form.Select>
              <Button variant="phoenix-secondary" className="px-3 ms-2">
                <FontAwesomeIcon
                  icon={faFilter}
                  transform="down-3"
                  className="text-primary"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-4 px-lg-6 scrollbar">
        <div className="deals">
          {dealColumns.map(col => (
            <div className="deals-col me-4" key={col.id}>
              <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-index-1 bg-soft">
                <div>
                  <h5 className="mb-2">{col.title}</h5>
                  <p className="fs-9 text-700 mb-1">Forecast Revenue:</p>
                  <h4 className="mb-3">
                    {currencyFormat(col.revenue, {
                      minimumFractionDigits: 2
                    })}
                  </h4>
                </div>
                <div className="d-flex gap-3">
                  <Button className="p-0">
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                  {/* <DropdownButton
                    id={`dropdown-button-drop-right`}
                    variant="link"
                    title={<span className="fas fa-ellipsis-h fs-70"></span>}
                    align="end"
                  >
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Add meeting</Dropdown.Item>
                    <Dropdown.Item href="#">
                      See all connected contacts
                    </Dropdown.Item>
                    <Dropdown.Item href="#">Clone</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                    <Dropdown.Item href="#">
                      Display only bad deals
                    </Dropdown.Item>
                  </DropdownButton> */}
                </div>
              </div>
              <div
                className="scrollbar deals-items-container w-100 min-vh-50"
                data-sortable
              >
                {col.deals.map(item => (
                  <div key={item.id}>
                    <DealCard deal={item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
