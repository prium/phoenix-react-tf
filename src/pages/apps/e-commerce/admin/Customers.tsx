import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import CustomersTable, { customersTablecolumns } from 'components/tables/CustomersTable';
import { customers } from 'data/e-commerce/customers';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { Breadcrumb, ButtonGroup, Col, Dropdown, Nav, Row } from 'react-bootstrap';

const Customers = () => {
  const table = useAdvanceTable({
    data: customers,
    columns: customersTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <Breadcrumb className="mb-2">
        <Breadcrumb.Item href="#!">Page 1</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Page 2</Breadcrumb.Item>
        <Breadcrumb.Item href="#!" active>
          Default
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-9">
        <h2 className="mb-4">Customers</h2>
        <Nav className="mb-3 mb-lg-2 mx-n3 nav nav-links">
          <Nav.Item>
            <Nav.Link href="#!" className="active">
              All <span className="text-700 fw-semi-bold">(68817)</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!">
              New <span className="text-700 fw-semi-bold">(6)</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!">
              Abandoned checkouts <span className="text-700 fw-semi-bold">(17)</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!">
              Locals <span className="text-700 fw-semi-bold">(6,810)</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!">
              Email subscribers <span className="text-700 fw-semi-bold">(8)</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!">
              Top reviews <span className="text-700 fw-semi-bold">(2)</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <AdvanceTableProvider {...table}>
          <div className="mb-4">
            <Row className="g-3">
              <Col xs="auto">
                <SearchBox placeholder="Search customers" onChange={handleSearchInputChange} />
              </Col>
              <Col xs="auto" className="scrollbar overflow-hidden-y flex-grow-1">
                <ButtonGroup className="position-static">
                  <Dropdown as={ButtonGroup} className="position-static">
                    <Dropdown.Toggle
                      variant="phoenix-secondary"
                      className="px-7 flex-shrink-0 dropdown-caret-none"
                    >
                      Country
                      <FontAwesomeIcon icon="angle-down" className="ms-2" transform="down-2" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">USA</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">UK</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Australia</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup} className="position-static">
                    <Dropdown.Toggle
                      variant="phoenix-secondary"
                      className="px-7 flex-shrink-0 dropdown-caret-none"
                    >
                      VIP
                      <FontAwesomeIcon icon="angle-down" className="ms-2" transform="down-2" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">VIP 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">VIP 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Vip 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="phoenix-secondary" className="px-7 flex-shrink-0">
                    More filters
                  </Button>
                </ButtonGroup>
              </Col>
              <Col xs="auto">
                <Button variant="link" className="text-900 me-4 px-0">
                  <FontAwesomeIcon icon="file-export" className="fs-9 me-2" />
                  Export
                </Button>
                <Button variant="primary">
                  <FontAwesomeIcon icon="plus" className="me-2" />
                  Add customer
                </Button>
              </Col>
            </Row>
          </div>

          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
            <CustomersTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Customers;
