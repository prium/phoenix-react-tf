import { useState } from 'react';
import { Alert, Col, Row, Table } from 'react-bootstrap';
import gallery59 from 'assets/img/gallery/59.png';
import gallery60 from 'assets/img/gallery/60.png';
import gallery61 from 'assets/img/gallery/61.png';
import gallery62 from 'assets/img/gallery/62.png';
import gallery63 from 'assets/img/gallery/63.png';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBanSmoking,
  faBath,
  faBed,
  faBorderAll,
  faChildren,
  faFilePen,
  faPeopleRoof,
  faPersonBooth,
  faPersonShelter,
  faPersonSwimming,
  faSnowflake,
  faSquareParking,
  faTableTennisPaddleBall,
  faTv,
  faUmbrellaBeach,
  faUser,
  faUtensils,
  faWifi,
  faWineGlass
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pictures: string[] = [
  gallery59,
  gallery60,
  gallery61,
  gallery62,
  gallery63
];

interface details {
  property: string;
  value: string;
  icon: IconDefinition;
}
const roomInformation: details[] = [
  {
    property: 'Room type',
    value: 'Presidential suite',
    icon: faBorderAll
  },
  {
    property: 'Room name',
    value: 'Kempinski Jakarta',
    icon: faFilePen
  },
  {
    property: 'Bedroom’s',
    value: '01',
    icon: faFilePen
  },
  {
    property: 'Number of beds',
    value: '01',
    icon: faBed
  },
  {
    property: 'Room size',
    value: '2.13 x 3.66 sq.m',
    icon: faPersonShelter
  },
  {
    property: 'Adults',
    value: '02',
    icon: faUser
  },
  {
    property: 'Childs',
    value: '01',
    icon: faChildren
  },
  {
    property: 'Bathroom’s',
    value: '02',
    icon: faBath
  },
  {
    property: 'Balcony',
    value: '01',
    icon: faPersonBooth
  }
];
const amenities: details[] = [
  {
    property: 'Wifi',
    value: 'Free',
    icon: faWifi
  },
  {
    property: 'Restaurant',
    value: 'Launch & Dinner',
    icon: faUtensils
  },
  {
    property: 'Pool',
    value: 'Paid',
    icon: faPersonSwimming
  },
  {
    property: 'No smoking',
    value: 'Available',
    icon: faBanSmoking
  },
  {
    property: 'Parking',
    value: 'Paid',
    icon: faSquareParking
  },
  {
    property: 'Beach view',
    value: 'Available',
    icon: faUmbrellaBeach
  },
  {
    property: 'Balcony',
    value: 'Sea View',
    icon: faPersonBooth
  },
  {
    property: 'Hotel bar',
    value: 'Paid',
    icon: faWineGlass
  },
  {
    property: 'Common areas',
    value: 'Available',
    icon: faPeopleRoof
  },
  {
    property: 'Tennis courts',
    value: 'Free',
    icon: faTableTennisPaddleBall
  },
  {
    property: 'Air conditioning',
    value: 'Available',
    icon: faSnowflake
  },
  {
    property: 'Bathtub',
    value: 'Available',
    icon: faBath
  },
  {
    property: 'Flat-screen TV',
    value: 'Paid',
    icon: faTv
  }
];

const PreviewItem = ({ item }: { item: details }) => {
  return (
    <tr>
      <td className="text-nowrap py-2">
        <div className="d-flex gap-2">
          <FontAwesomeIcon icon={item.icon} className="fs-9" />
          <h5 className="mb-0">{item.property}</h5>
        </div>
      </td>
      <td className="py-2 pe-1 px-sm-3">
        <h5 className="fw-normal mb-0"> :</h5>
      </td>
      <td className="py-2">
        <h5 className="fw-normal mb-0 text-body-secondary">{item.value}</h5>
      </td>
    </tr>
  );
};

const Preview = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <h3 className="mb-2">We’re building your listing</h3>
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
      <h4 className="text-body mb-3">
        Room information
        <Link to="#!" className="fs-9 mx-2">
          Edit
        </Link>
      </h4>
      <Row className="gx-7 gx-xl-4 gx-xxl-7">
        <Col md={7} xxl={6}>
          <Table borderless className="mb-0">
            <thead>
              <tr>
                <th className="p-0" style={{ width: 155 }}></th>
                <th className="p-0" style={{ width: 16 }}></th>
                <th className="p-0"></th>
              </tr>
            </thead>
            <tbody>
              {roomInformation.slice(0, 5).map((item, index) => (
                <PreviewItem item={item} key={index} />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={5} xxl={6}>
          <Table borderless className="mb-0">
            <thead>
              <tr>
                <th className="p-0" style={{ width: 155 }}></th>
                <th className="p-0" style={{ width: 16 }}></th>
                <th className="p-0"></th>
              </tr>
            </thead>
            <tbody>
              {roomInformation.slice(5).map((item, index) => (
                <PreviewItem item={item} key={index} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <h4 className="text-body mb-4 mt-5">
        Pricing
        <Link to="#!" className="fs-9 mx-2">
          Edit
        </Link>
      </h4>
      <h6 className="mb-2">Across all days</h6>
      <h3 className="mb-0">$894</h3>
      <h4 className="text-body mb-3 mt-7">
        Amenities
        <Link to="#!" className="fs-9 mx-2">
          Edit
        </Link>
      </h4>
      <Row className="gx-7 gx-xl-4 gx-xxl-7">
        <Col md={7} xxl={6}>
          <Table borderless className="mb-0">
            <thead>
              <tr>
                <th className="p-0" style={{ width: 155 }}></th>
                <th className="p-0" style={{ width: 16 }}></th>
                <th className="p-0"></th>
              </tr>
            </thead>
            <tbody>
              {amenities.slice(0, 7).map((item, index) => (
                <PreviewItem item={item} key={index} />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={5} xxl={6}>
          <Table borderless className="mb-0">
            <thead>
              <tr>
                <th className="p-0" style={{ width: 155 }}></th>
                <th className="p-0" style={{ width: 16 }}></th>
                <th className="p-0"></th>
              </tr>
            </thead>
            <tbody>
              {amenities.slice(7).map((item, index) => (
                <PreviewItem item={item} key={index} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <h4 className="text-body mb-4 mt-7">
        Picture
        <Link to="#!" className="fs-9 mx-2">
          Edit
        </Link>
      </h4>
      <Row className="g-3">
        {pictures.map((img, index) => (
          <Col sm={4} key={index}>
            <img
              src={img}
              alt=""
              height={160}
              className="rounded-2 w-100 object-fit-cover"
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Preview;
