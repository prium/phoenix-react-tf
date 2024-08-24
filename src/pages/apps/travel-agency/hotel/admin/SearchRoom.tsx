import {
  faCalendarAlt,
  faChevronRight,
  faFilter,
  faRotate,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import RoomCard from 'components/modules/travel-agency/dashboard/hotel/search-room/RoomCard';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchRoom = () => {
  return (
    <div className="mb-9">
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
      <Row className="align-items-end mb-5 gy-3">
        <Col style={{ maxWidth: 290 }}>
          <h2>Rooms</h2>
        </Col>
        <Col xl>
          <Row className="gx-2 gx-xl-3 gy-3">
            <Col
              xs={{ order: 1 }}
              sm={{ span: 'auto', order: 0 }}
              className="me-sm-2 d-xl-none"
            >
              <Button
                variant="phoenix-secondary"
                size="lg"
                className="text-body-tertiary w-100"
              >
                <FontAwesomeIcon icon={faFilter} className="me-2" />
                Filter
              </Button>
            </Col>
            <Col sm={5} xxl={3}>
              <DatePicker
                render={(_, ref) => {
                  return (
                    <FloatingLabel
                      controlId="financeInvoiceEmail"
                      label="Select Time Range"
                      className="mb-4"
                    >
                      <Form.Control
                        type="text"
                        placeholder="start date"
                        ref={ref}
                        id="startDatepicker"
                        className="ps-3"
                      />

                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="position-absolute top-0 end-0 mt-3 me-3"
                      />
                    </FloatingLabel>
                  );
                }}
                hideIcon={true}
                options={{
                  mode: 'range',
                  minDate: 'today',
                  dateFormat: 'Y-m-d'
                }}
              />
            </Col>
            <Col sm="auto" className="flex-grow-0">
              <Button
                variant="phoenix-primary"
                size="lg"
                className="px-xxl-6 text-nowrap"
              >
                <span className="d-none d-xl-inline-block">Update</span>
                <FontAwesomeIcon icon={faSearch} className="fs-9 ms-xl-2" />
              </Button>
            </Col>
            <Col sm="auto" className="ms-auto flex-grow-0">
              <Button
                variant="phoenix-secondary"
                size="lg"
                className="ms-auto text-nowrap"
              >
                <span className="d-none d-xl-inline-block">Refresh</span>
                <FontAwesomeIcon icon={faRotate} className="fs-9 ms-xl-2" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* header section end */}
      {/* offcanvas start */}
      <Row className="gx-6">
        <Col xl="auto"> offcanvs goes hare </Col>
        <Col className="w-xl-25">
          <RoomCard />
        </Col>
      </Row>
      {/* footer section */}
      <div className="border p-3 rounded-3 mt-5 d-flex flex-end-center gap-3 gap-sm-6 flex-wrap">
        <h2 className="text-body mb-0">
          <span className="fs-9 text-body-tertiary fw-bold me-2">Total :</span>
          04
        </h2>
        <Link to="#!">
          <Button variant="primary" className="px-sm-7">
            Confirm Booking
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SearchRoom;
