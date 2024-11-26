import React, { useMemo, useState } from 'react';
import { TourSummery } from 'data/travel-agency/customer/trip';
import { Col, Collapse, Row } from 'react-bootstrap';

import Bg from 'assets/img/bg/bg-41.svg';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faClock,
  faLocationDot,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import MapboxCluster from 'components/base/MapBoxCluster';
import { CircleLayer, SymbolLayer } from 'mapbox-gl';
import { useAppContext } from 'providers/AppProvider';

interface TripDetailsSummeryProps {
  tourSummery: TourSummery[];
}

interface SummeryContentProps {
  item: TourSummery;
  index?: number;
}

const getMapData = (getThemeColor: (name: string) => string) => {
  return [
    {
      id: 'clusters',
      type: 'circle',
      source: 'earthquakes',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          getThemeColor('secondary'),
          100,
          getThemeColor('info'),
          750,
          getThemeColor('warning')
        ],
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
      }
    } as CircleLayer,
    {
      id: 'cluster-count',
      type: 'symbol',
      source: 'earthquakes',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      },
      paint: {
        'text-color': getThemeColor('white')
      }
    } as SymbolLayer,
    {
      id: 'unclustered-point',
      type: 'circle',
      source: 'earthquakes',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': getThemeColor('primary-light'),
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': getThemeColor('emphasis-bg')
      }
    } as CircleLayer
  ];
};

const SummeryContent = ({ item, index }: SummeryContentProps) => {
  return (
    <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-3 position-relative">
      <div
        className={classNames(
          'tour-direction-line border-start border-dashed',
          {
            'd-sm-none': index === 2
          }
        )}
      />
      <span
        className="bg-secondary rounded-pill d-flex flex-center text-white fs-9"
        style={{ width: 23, height: 23 }}
      >
        {item.serial}
      </span>
      <h6 className="mb-0 text-body-highlight">{item.label}</h6>
    </div>
  );
};

const TripDetailsSummery = ({ tourSummery }: TripDetailsSummeryProps) => {
  const { getThemeColor } = useAppContext();
  const [open, setOpen] = useState(true);
  const mapData = useMemo(() => {
    return getMapData(getThemeColor);
  }, [getThemeColor]);
  return (
    <>
      <MapboxCluster
        className="border border-translucent rounded-2"
        mapData={mapData}
        options={{
          center: [-73.102712, 7.102257],
          zoom: 3.5,
          pitch: 40,
          attributionControl: false
        }}
        style={{
          height: 240
        }}
      />
      <h6 className="my-3 py-3 px-2 rounded-2 bg-body-secondary text-center">
        Day 1
      </h6>
      <Row className="gx-5 gy-0 position-relative">
        <div
          className="bg-holder tour-direction-bg d-none d-sm-block"
          style={{
            backgroundImage: `url(${Bg})`
          }}
        />
        <Col sm={6}>
          <div className="p-2 rounded-2 bg-body-highlight mb-3 position-relative">
            <div className="tour-direction-line border-start border-dashed" />
            <Button
              variant=""
              className={classNames(
                'p-0 d-flex justify-content-between collapse-indicator',
                {
                  collapsed: open
                }
              )}
              aria-controls="collapsePickup"
              onClick={() => setOpen(!open)}
            >
              <div className="d-flex">
                <span
                  className="d-inline-flex flex-center rounded-pill border me-2"
                  style={{ minWidth: 23, height: 23 }}
                >
                  <FontAwesomeIcon icon={faLocationDot} className="fs-9" />
                </span>
                <div>
                  <h6 className="mb-2 text-start">Pickup point</h6>
                  <h6 className="text-start fw-normal text-body-tertiary">
                    Birnin zana bus terminal
                  </h6>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="toggle-icon"
                style={{ width: 10, height: 10 }}
              />
            </Button>
            <Collapse in={open}>
              <div id="collapsePickup">
                <h6 className="fw-normal text-body-tertiary pt-3 ps-1">
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  10:00 am local time
                </h6>
              </div>
            </Collapse>
          </div>
          {tourSummery.slice(0, 3).map((item, index) => (
            <SummeryContent key={item.id} item={item} index={index} />
          ))}
        </Col>
        <Col sm={6}>
          {tourSummery.slice(3).map(item => (
            <SummeryContent key={item.id} item={item} />
          ))}
          <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-2">
            <span
              className="d-inline-flex flex-center rounded-pill border me-2"
              style={{ width: 23, height: 23 }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="fs-9" />
            </span>
            <h6 className="mb-0 text-body-highlight">Drop-off point</h6>
          </div>
        </Col>
      </Row>
      <h6 className="mb-0 py-3 px-2 rounded-2 bg-body-secondary text-center">
        Tour ends
      </h6>
    </>
  );
};

export default TripDetailsSummery;
