import { faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { days, monthsShort } from 'data/commonData';
import { useCalendar } from 'providers/CalendarProvider';
import { Col, Row } from 'react-bootstrap';

const CalendarTop = () => {
  const { setIsOpenScheduleModal } = useCalendar();
  const d = new Date();

  const updateDay = (day: number) => {
    return days[day];
  };

  const updateDate = (date: number, month: number, year: number) => {
    return `${date} ${monthsShort[month]}, ${year}`;
  };

  return (
    <Row className="g-0 mb-4 align-items-center">
      <Col xs={5} md={6}>
        <h4 className="mb-0 text-1100 fw-bold fs-md-6">
          <span className="calendar-day d-block d-md-inline mb-1">
            {updateDay(new Date().getDay())}
          </span>
          <span className="px-3 fw-thin text-400 d-none d-md-inline">|</span>
          <span>{updateDate(d.getDate(), d.getMonth(), d.getFullYear())}</span>
        </h4>
      </Col>
      <Col xs={7} md={6} className="d-flex justify-content-end">
        <Button
          variant="link"
          className="text-900 px-0 me-2 me-md-4"
          startIcon={<FontAwesomeIcon icon={faSync} className="fs-10 me-2" />}
        >
          <span className="d-none d-md-inline">Sync Now</span>
        </Button>
        <Button
          onClick={() => setIsOpenScheduleModal(true)}
          variant="primary"
          size="sm"
          startIcon={<FontAwesomeIcon icon={faPlus} className="fs-10 me-2" />}
        >
          Add new task
        </Button>
      </Col>
    </Row>
  );
};

export default CalendarTop;
