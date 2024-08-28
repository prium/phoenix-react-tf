import { UilTimes } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import Unicon from 'components/base/Unicon';
import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import { Col, Form, Row } from 'react-bootstrap';
import RoomFilterActions from './RoomFilterActions';
import RoomFIlterCollapse from './RoomFIlterCollapse';
import RoomFilterSearch from './RoomFilterSearch';
const RoomCategoryOptions: string[] = [
  'Any',
  'Deluxe King Room',
  'Deluxe Twin Room',
  'Junior King Suite',
  'One-Bedroom Deluxe Suite',
  'One-Bedroom Executive Suite',
  'Presidential Suite',
  'Club King Room',
  'Twin Room',
  'Club Twin Room',
  'Premium King Room',
  'Deluxe King Suite',
  'Executive King Suite'
];
const bedTypeOptions: string[] = [
  'Cribs',
  'Double beds',
  'King bed',
  'Queen bed',
  'Rollaway bed',
  'Sofa bed',
  'Twin bed',
  'Futon'
];
const amenitiesOption: string[] = [
  'Wifi',
  'Washer',
  'Kitchen',
  'Dryer',
  'Air conditioning',
  'Heating'
];

const RoomFilterOffcanvasContent = () => {
  const priceRange = [699, 1299];

  return (
    <>
      <div className="d-flex align-items-center" style={{ width: 250 }}>
        <h3 className="text-body-highlight">Filters</h3>
        <Button
          variant="phoenix-secondary"
          className="px-3 ms-auto me-2 me-xl-0"
        >
          Collapse all
        </Button>
        <Button
          className="p-0 fw-bold d-xl-none"
          // onClick={() => setOpen(false)}
        >
          <Unicon icon={UilTimes} size={16} />
        </Button>
      </div>

      <RoomFIlterCollapse title="Price range">
        <PhoenixReactRange
          values={priceRange}
          variant="primary"
          min={500}
          max={2000}
          // onChange={val => setValues({ ...values, segmentTwo: val })}
          trackHeight={'4px'}
          classNames={'phoenix-react-range-slim px-2 pt-1 mb-3'}
        />
        <Row className="g-2">
          <Col xs={6}>
            <Form.Floating>
              <Form.Control
                type="number"
                id="priceRangeMin"
                className="age-segment-input"
                value={500}
              />
              <label htmlFor="priceRangeMin">Min</label>
            </Form.Floating>
          </Col>
          <Col xs={6}>
            <Form.Floating>
              <Form.Control
                type="number"
                id="priceRangeMax"
                className="age-segment-input"
                value={1200}
              />
              <label htmlFor="priceRangeMax">Max</label>
            </Form.Floating>
          </Col>
        </Row>
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Adult">
        <RoomFilterActions />
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Child">
        <RoomFilterActions />
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Bedroom">
        <RoomFilterActions />
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Number of bed">
        <RoomFilterActions />
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Bathroom">
        <RoomFilterActions />
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Room Category">
        <RoomFilterSearch items={RoomCategoryOptions} />
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Room Category">
        <RoomFilterSearch items={bedTypeOptions} />
      </RoomFIlterCollapse>
      <RoomFIlterCollapse title="Room Category">
        <RoomFilterSearch items={amenitiesOption} />
      </RoomFIlterCollapse>
    </>
  );
};

export default RoomFilterOffcanvasContent;
