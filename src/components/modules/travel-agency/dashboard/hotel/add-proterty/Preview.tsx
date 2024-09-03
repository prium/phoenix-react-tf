import React, { PropsWithChildren, useState } from 'react';
import { Accordion, Alert, Col, Row, Table } from 'react-bootstrap';
import info from 'assets/img/icons/info.svg';
import infoDark from 'assets/img/icons/info_dark.svg';
import locationImg from 'assets/img/icons/location.svg';
import locationDark from 'assets/img/icons/location_dark.svg';
import bedDouble from 'assets/img/icons/bed-double.svg';
import bedDoubleDark from 'assets/img/icons/bed-double_dark.svg';
import picture from 'assets/img/icons/picture.svg';
import pictureDark from 'assets/img/icons/picture_dark.svg';
import gallery59 from 'assets/img/gallery/59.png';
import gallery60 from 'assets/img/gallery/60.png';
import gallery61 from 'assets/img/gallery/61.png';
import gallery62 from 'assets/img/gallery/62.png';
import gallery63 from 'assets/img/gallery/63.png';
import dollarAlt from 'assets/img/icons/dollar-alt.svg';
import dollarAltDark from 'assets/img/icons/dollar-alt_dark.svg';
import fileCheckAlt from 'assets/img/icons/file-check-alt.svg';
import fileCheckAltDark from 'assets/img/icons/file-check-alt_dark.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  AccordionItemInterface,
  amenities,
  basicInfo,
  financeData,
  location,
  policiesData,
  PropertyDetails,
  summaryTableProp
} from 'data/travel-agency/addProperty';

const pictures: string[] = [
  gallery59,
  gallery60,
  gallery61,
  gallery62,
  gallery63
];

const SummaryTable = (props: summaryTableProp) => {
  const tableItems: PropertyDetails[] = [...props.tableData];

  return (
    <Table className="mb-0">
      <thead>
        <tr>
          <th style={{ width: 176 }} className="p-0" />
          <th style={{ width: 32 }} className="p-0" />
          <th className="p-0" />
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item, index) => (
          <tr key={index}>
            <td
              className={classNames('border-top pt-3 text-nowrap', {
                'pb-0 border-bottom-0': index === tableItems.length - 1
              })}
            >
              <h5 className="fw-semibold text-body-highlight mb-0">
                {item.property}
              </h5>
            </td>
            <td
              className={classNames('border-top px-3 pt-3 w-max-conten', {
                'pb-0 border-bottom-0': index === tableItems.length - 1
              })}
            >
              <p className="mb-0 w-max-content">:</p>
            </td>
            <td
              className={classNames('border-top pt-3', {
                'pb-0 border-bottom-0': index === tableItems.length - 1
              })}
            >
              <p className="mb-0 text-body-secondary">{item.value}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const AccordionItem = (props: PropsWithChildren<AccordionItemInterface>) => {
  const { img1, img2, title, eventKey, children } = props;
  return (
    <>
      <Accordion.Item
        eventKey={eventKey}
        className="border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5"
      >
        <Accordion.Button className="py-0 lh-1 text-body-highlight">
          <img src={img1} alt="" className="me-2 d-dark-none" />
          <img src={img2} alt="" className="me-2 d-light-none" />
          <span className="fs-sm-7">{title}</span>
        </Accordion.Button>
        <Accordion.Collapse eventKey={eventKey}>
          <div className="mt-4 scrollbar">
            <Link to="" className="fs-9 fw-semibold mb-2 d-inline-block">
              Edit Info
            </Link>
            {children}
          </div>
        </Accordion.Collapse>
      </Accordion.Item>
    </>
  );
};
const Preview = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <h3 className="mb-2">We’re building your property</h3>
      <p className="mb-5 text-body-tertiary">
        We're working on getting your property set up and ready for guests. Stay
        tuned for updates and start accepting bookings soon!
      </p>
      {show && (
        <Alert
          variant="subtle-success"
          onClose={() => setShow(false)}
          dismissible
          className="mb-5"
        >
          <p className="mb-0 flex-1 fw-semibold fs-9 fs-sm-8">
            Congratulations on your successful listing! Join a community of
            hospitality professionals as a host. Your hard work will turn your
            home into a sought-after destination. We anticipate hearing about
            your achievements.
          </p>
        </Alert>
      )}
      <Accordion
        className="accordion-button-arrow-icon mt-2"
        id="previewAccordion"
      >
        <AccordionItem
          img1={info}
          img2={infoDark}
          title="Basic Information"
          eventKey="0"
        >
          <SummaryTable tableData={basicInfo} />
        </AccordionItem>
        <AccordionItem
          img1={locationImg}
          img2={locationDark}
          title="Location"
          eventKey="1"
        >
          <SummaryTable tableData={location} />
        </AccordionItem>

        <AccordionItem
          img1={bedDouble}
          img2={bedDoubleDark}
          title="General Amenities"
          eventKey="2"
        >
          <SummaryTable tableData={amenities} />
        </AccordionItem>
        <AccordionItem
          img1={picture}
          img2={pictureDark}
          title="Picture"
          eventKey="3"
        >
          <Row className="g-2 g-sm-3">
            {pictures.map((item, index) => (
              <Col key={index} sm={4}>
                <img
                  src={item}
                  alt=""
                  height={160}
                  className="rounded-2 w-100 object-fit-cover"
                />
              </Col>
            ))}
          </Row>
        </AccordionItem>
        <AccordionItem
          img1={dollarAlt}
          img2={dollarAltDark}
          title="Finance"
          eventKey="4"
        >
          {financeData.map(({ name, data }, index) => (
            <>
              <h5
                className={classNames('mb-3 fw-bolder', {
                  'mt-4': index !== 0
                })}
              >
                {name}
              </h5>
              <SummaryTable tableData={data} />
            </>
          ))}
        </AccordionItem>
        <AccordionItem
          img1={fileCheckAlt}
          img2={fileCheckAltDark}
          title="Policy"
          eventKey="5"
        >
          {policiesData.map(({ name, data }, index) => (
            <>
              <h5
                className={classNames('mb-3 fw-bolder', {
                  'mt-4': index !== 0
                })}
              >
                {name}
              </h5>
              <SummaryTable tableData={data} />
            </>
          ))}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Preview;
