import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { Accordion, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  IconDefinition,
  faCartShopping,
  faFire,
  faUmbrellaBeach,
  faUniversalAccess,
  faUtensils,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

import Button from 'components/base/Button';
import PriceTierForm from './PriceTierForm';
interface PriceTierInterface {
  id: string;
  name: string;
  className?: string;
}

interface generalAmenitiesInterface {
  title: string;
  eventKey: string;
  icon: IconDefinition;
  innerItems: PriceTierInterface[];
}

const GeneralAmenitiesForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const popularAmenities: PriceTierInterface[] = [
    {
      id: 'wifi',
      name: 'Wifi',
      className: 'my-3'
    },
    {
      id: 'breakfast',
      name: 'Breakfast'
    },
    {
      id: 'gym',
      name: 'Gym'
    },
    {
      id: 'swimming',
      name: 'Swimming pool'
    },
    {
      id: 'in-room',
      name: 'In-room coffee/tea'
    },
    {
      id: 'daily-housekeeping',
      name: 'Daily housekeeping'
    },
    {
      id: 'bar',
      name: 'Bar / Lounge'
    },
    {
      id: 'laundry',
      name: 'Laundry'
    },
    {
      id: 'newspaper',
      name: 'newspaper'
    },
    {
      id: 'bicycle',
      name: 'Bicycle'
    },
    {
      id: 'air',
      name: 'Air conditioning'
    },
    {
      id: 'games',
      name: 'Games room'
    },
    {
      id: 'beach',
      name: 'Beach view',
      className: 'mb-0'
    }
  ];

  const FoodAndDrink: PriceTierInterface[] = [
    {
      id: 'restaurants',
      name: 'Restaurants',
      className: 'my-3'
    },
    {
      id: 'bars',
      name: 'Bars'
    },
    {
      id: 'in-room-dining',
      name: 'In Room Dining'
    },
    {
      id: 'family-friendly-dining',
      name: 'Family-Friendly Dining'
    },
    {
      id: 'breakfast-buffet',
      name: 'Breakfast Buffet',
      className: 'mb-0'
    }
  ];

  const OutdoorAndView: PriceTierInterface[] = [
    {
      id: 'garden-or-courtyard',
      name: 'Garden Or Courtyard',
      className: 'my-3'
    },
    {
      id: 'scenic-views',
      name: 'Scenic Views'
    },
    {
      id: 'sunbathing-areas',
      name: 'Sunbathin Aareas'
    },
    {
      id: 'outdoor-lounge-areas',
      name: 'Outdoor Lounge Areas',
      className: 'mb-0'
    }
  ];

  const EntertainmentAndFamily: PriceTierInterface[] = [
    {
      id: 'game-room',
      name: 'Game Room',
      className: 'my-3'
    },
    {
      id: 'play-area',
      name: `Children's Play Area`
    },
    {
      id: 'sports-facilities',
      name: 'Sports Facilities'
    },
    {
      id: 'babysitting-services',
      name: 'Babysitting Services',
      className: 'mb-0'
    }
  ];

  const MediaAndTechnology: PriceTierInterface[] = [
    {
      id: 'high-speed-internet',
      name: 'High Speed Iinternet',
      className: 'my-3'
    },
    {
      id: 'business-center',
      name: `Business Center`
    },
    {
      id: 'video-conferencing',
      name: 'Video Conferencing Facilities'
    },
    {
      id: 'vr',
      name: 'Virtual Reality (VR) Experiences',
      className: 'mb-0'
    }
  ];

  const accessibility: PriceTierInterface[] = [
    {
      id: 'accessible-common-areas',
      name: 'Accessible Common Areas',
      className: 'my-3'
    },
    {
      id: 'accessible-parking-spaces',
      name: `Accessible Parking Spaces`
    },
    {
      id: 'accessible-fitness-center',
      name: 'Accessible Fitness Center'
    },
    {
      id: 'accessible-swimmings-pool',
      name: 'Accessible Swimming Pool',
      className: 'mb-0'
    }
  ];

  const generalAmenities: generalAmenitiesInterface[] = [
    {
      title: 'Popular amenities',
      eventKey: '0',
      icon: faFire,
      innerItems: popularAmenities
    },
    {
      title: 'Food & Drink',
      eventKey: '1',
      icon: faUtensils,
      innerItems: FoodAndDrink
    },
    {
      title: 'Outdoor & View',
      eventKey: '2',
      icon: faUmbrellaBeach,
      innerItems: OutdoorAndView
    },
    {
      title: 'Entertainment & Family Services',
      eventKey: '3',
      icon: faCartShopping,
      innerItems: EntertainmentAndFamily
    },
    {
      title: 'Media & Technology',
      eventKey: '4',
      icon: faVideo,
      innerItems: MediaAndTechnology
    },
    {
      title: 'Accessibility',
      eventKey: '5',
      icon: faUniversalAccess,
      innerItems: accessibility
    }
  ];

  return (
    <>
      <div>
        <h3 className="mb-6">General amenities</h3>
        <Row className="g-3">
          <Col sm="auto" className="flex-sm-fill">
            <div className="form-icon-container">
              <FloatingLabel
                controlId="GeneralAmenitiesSearch"
                label="Search amenities"
              >
                <Form.Control
                  name="GeneralAmenitiesSearch"
                  type="text"
                  onChange={onChange}
                  placeholder="Search amenities"
                />
              </FloatingLabel>
              <FontAwesomeIcon
                icon={faSearch}
                transform="down-2"
                className="position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3"
              />
            </div>
          </Col>
          <Col sm="auto">
            <Button variant="phoenix-primary" className="w-100 h-100 fs-8">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add amenity
            </Button>
          </Col>
        </Row>
      </div>

      <Accordion
        id="generalAmenitiesAccordion"
        className="accordion-button-arrow-icon mt-2"
      >
        {generalAmenities.map((item, index) => (
          <Accordion.Item
            key={index}
            eventKey={item.eventKey}
            className="px-0 py-3"
          >
            <Accordion.Button className="py-0">
              <span className="circle-icon-item me-3">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="flex-1 text-body-highlight">{item.title}</span>
            </Accordion.Button>
            <Accordion.Body className="ms-md-9">
              {item.innerItems.map((item, index) => (
                <PriceTierForm
                  key={index}
                  id={item.id}
                  name={item.name}
                  className={item.className}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default GeneralAmenitiesForm;
