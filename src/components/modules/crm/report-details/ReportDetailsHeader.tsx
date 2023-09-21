import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import ReportsFilterModal from 'components/modals/ReportsFilterModal';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ReportDetailsHeader = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  return (
    <>
      <Row className="g-3 justify-content-between mb-4">
        <Col xs="auto">
          <div className="d-flex flex-wrap gap-2">
            <Button
              variant="primary"
              startIcon={<FontAwesomeIcon icon="envelope" className="me-2" />}
            >
              Send mail
            </Button>
            <Button
              variant="phoenix-primary"
              startIcon={<FontAwesomeIcon icon="pencil" className="me-2" />}
            >
              Edit
            </Button>
            <Button
              variant="phoenix-secondary"
              className="text-900"
              startIcon={
                <FontAwesomeIcon icon="file-export" className="fs-9 me-2" />
              }
            >
              Export
            </Button>
          </div>
        </Col>
        <Col xs="auto">
          <div className="d-flex gap-2">
            <SearchBox
              placeholder="Search by name"
              className="d-none d-xl-block"
            />
            <Button
              variant="phoenix-primary"
              className="px-3"
              onClick={() => setOpenFilterModal(true)}
            >
              <FontAwesomeIcon icon="filter" transform="down-3" />
            </Button>
          </div>
        </Col>
      </Row>
      <ReportsFilterModal
        show={openFilterModal}
        onHide={() => setOpenFilterModal(false)}
      />
    </>
  );
};

export default ReportDetailsHeader;
