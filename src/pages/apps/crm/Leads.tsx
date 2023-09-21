import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import { defaultBreadcrumbItems } from 'data/commonData';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Leads = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-4">25 Leads</h2>
        <Row className="g-3 justify-content-between mb-4">
          <Col xs="auto">
            <div className="d-md-flex justify-content-between">
              <Button
                variant="primary"
                className="me-4"
                startIcon={<FontAwesomeIcon icon="plus" className="me-2" />}
              >
                Create Lead
              </Button>
              <Button
                variant="link"
                className="text-900 px-0"
                startIcon={
                  <FontAwesomeIcon icon="file-export" className="fs-9 me-2" />
                }
              >
                Export
              </Button>
            </div>
          </Col>
          <Col xs="auto">
            <div className="d-flex">
              <SearchBox placeholder="Search by name" className="me-2" />
              <DatePicker />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Leads;
