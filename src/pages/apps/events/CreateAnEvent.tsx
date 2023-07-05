import Button from 'components/base/Button';
import Dropzone from 'components/base/Dropzone';
import ReactSelect from 'components/base/ReactSelect';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EventCustomFields from 'components/forms/EventCustomFields';
import EventDetailsForm from 'components/forms/EventDetailsForm';
import EventTicketPricing from 'components/forms/EventTicketPricing';
import EventsSchedule from 'components/forms/EventsSchedule';
import { defaultBreadcrumbItems } from 'data/commonData';
import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const options = [
  { value: 'MUSIC', label: 'music' },
  { value: 'CONCEERT', label: 'conceert' },
  { value: 'GREATEST SHOW ON EARTH', label: 'greatest-show-on-earth' }
];

const CreateAnEvent = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <Form className="mb-9">
        <Row className="justify-content-between align-items-end g-3 mb-5">
          <Col xs={12} sm="auto" xl={8}>
            <h2 className="mb-0">Create an Event</h2>
          </Col>
          <Col xs={12} sm="auto" xl={4}>
            <div className="d-flex">
              <Button
                className="px-5 me-2"
                variant="phoenix-primary"
                type="button"
              >
                Save
              </Button>
              <Button
                variant="primary"
                as={Link}
                to="/apps/events/event-details"
                className="px-5 w-100 text-nowrap"
              >
                Publish Event
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="g-5">
          <Col xl={8}>
            <Row className="gx-3 gy-4">
              {/* Event details */}
              <EventDetailsForm />
              {/* Events schedule */}
              <EventsSchedule />
              {/* Description */}
              <Col xs={12} className="gy-6">
                <FloatingLabel controlId="eventDescription" label="Description">
                  <Form.Control
                    as="textarea"
                    placeholder="Description"
                    style={{ height: '128px' }}
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6} className="gy-6">
                <FloatingLabel
                  controlId="floatingOrganizersInput"
                  label="ORGANIZERS"
                >
                  <Form.Control type="text" placeholder="ORGANIZERS" />
                </FloatingLabel>
              </Col>
              <Col sm={6} className="gy-6">
                <FloatingLabel
                  controlId="floatingSponsorsInput"
                  label="SPONSORS"
                >
                  <Form.Control type="text" placeholder="SPONSORS" />
                </FloatingLabel>
              </Col>
              <Col xs={12} className="gy-6">
                <Dropzone />
              </Col>
              <Col xs={12} className="gy-6">
                <ReactSelect
                  options={options}
                  isMulti
                  placeholder="Add tags"
                  styles={{
                    control: baseStyles => ({
                      ...baseStyles,
                      height: '128px',
                      alignItems: 'start'
                    }),
                    dropdownIndicator: baseStyles => ({
                      ...baseStyles,
                      display: 'none'
                    })
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col xl={4}>
            <div className="border-bottom pb-6 mb-6">
              <h4 className="mb-4">Privacy</h4>
              <Form.Check type="radio" id="exampleRadios1" className="mb-2">
                <Form.Check.Input
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                />
                <Form.Check.Label
                  className="fw-normal"
                  htmlFor="exampleRadios1"
                >
                  On Phoenix, our distribution partners, and search engines,{' '}
                  <br />
                  anybody can find the event
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type="radio" id="exampleRadios2" className="mb-0">
                <Form.Check.Input
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                />
                <Form.Check.Label
                  className="fw-normal"
                  htmlFor="exampleRadios2"
                >
                  Only the individuals you select have access to it.
                </Form.Check.Label>
              </Form.Check>
            </div>
            <div className="border-bottom mb-6">
              <Form.Check type="checkbox" id="flexChecked">
                <Form.Check.Input
                  type="checkbox"
                  value="option1"
                  defaultChecked
                />
                <Form.Check.Label
                  className="fw-bold fs-8 mb-5"
                  htmlFor="flexChecked"
                >
                  Show the number of available tickets
                </Form.Check.Label>
              </Form.Check>
            </div>
            {/* Ticket pricing */}
            <EventTicketPricing />
            {/* Custom fields */}
            <EventCustomFields />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateAnEvent;
