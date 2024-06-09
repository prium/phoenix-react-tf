/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { HTMLAttributes, useEffect, useRef } from 'react';
import mapboxgl, { LngLatLike, Map, MapboxOptions } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';
// @ts-ignore
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import {
  faCircle,
  faMinus,
  faPlane,
  faPlus,
  faUpRightAndDownLeftFromCenter
} from '@fortawesome/free-solid-svg-icons';
import FlightTable from './FlightTable';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import phoenixFirelines from 'assets/img/brands/phoenix-firelines.png';
import qatarAirways from 'assets/img/brands/qatar-airways.png';
import japanAirlines from 'assets/img/brands/jal.png';
import { Autoplay } from 'swiper/modules';
import { Feature, along, length, LineString } from '@turf/turf';
// import { Feature as Feature2 } from '@turf/helpers';

SwiperCore.use([Autoplay]);
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';
// @ts-ignore
mapboxgl.workerClass = MapboxWorker;

interface MapboxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  options: Omit<MapboxOptions, 'container'>;
}
interface routes {
  flightNo: number;
  airLine: string;
  logo: string;
  from: string;
  to: string;
}

interface pointInterface {
  type: string;
  features: {
    type: string;
    properties: object;
    geometry: {
      type: string;
      coordinates: LngLatLike;
    };
  }[];
}

const routes: routes[] = [
  {
    flightNo: 1,
    airLine: 'EK204 (AK98)',
    logo: phoenixFirelines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 2,
    airLine: 'EK204 (AK98)',
    logo: phoenixFirelines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 3,
    airLine: 'EK204 (AK98)',
    logo: qatarAirways,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 4,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 5,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 5,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 5,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  }
];
const FlightMap = ({ className, options, ...rest }: MapboxProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const {
    config: { isDark },
    getThemeColor
  } = useAppContext();

  const styles = {
    default: 'mapbox://styles/mapbox/light-v11',
    auto: isDark
      ? 'mapbox://styles/themewagon/cljzg9juf007x01pk1bepfgew'
      : 'mapbox://styles/themewagon/clj57pads001701qo25756jtw',
    light: 'mapbox://styles/themewagon/clj57pads001701qo25756jtw',
    dark: 'mapbox://styles/themewagon/cljzg9juf007x01pk1bepfgew'
  };

  const {
    config: { theme }
  } = useAppContext();

  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: styles[theme],
        pitch: 40,
        attributionControl: false,
        ...options
      });

      if (options.center) {
        new mapboxgl.Marker({
          color: '#ed2000'
        })
          .setLngLat(options.center)
          .addTo(map.current);
      }

      const origin: LngLatLike = [-61.100583, 5.044713];
      const currentPosition: LngLatLike = [
        -74.2139449434892, 8.136553550752552
      ];
      const destination: LngLatLike = [-84.913785, 10.325774];

      interface Destination {
        type: string;
        features: Feature[];
      }
      interface Destination2 {
        type: string;
        features: Feature<LineString>[];
      }

      const originToCurrentRoute: Destination = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [origin, currentPosition]
            }
          }
        ]
      };
      const originToCurrentRoute2: Destination2 = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [origin, currentPosition]
            }
          }
        ]
      };

      const currentToDestinationRoute: Destination = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [currentPosition, destination]
            }
          }
        ]
      };

      const currentToDestinationRoute2: Destination2 = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [currentPosition, destination]
            }
          }
        ]
      };

      const points: pointInterface = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: origin
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: currentPosition
            }
          },
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: destination
            }
          }
        ]
      };

      let count = 1;
      points.features.forEach(feature => {
        const el = document.createElement('div');
        el.className = `marker-${count}`;
        if (map.current) {
          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map.current);
        }
        count += 1;
      });

      // map.current.on('load', () => {});

      const lineDistance = length(originToCurrentRoute.features[0]);
      const lineDistance2 = length(originToCurrentRoute.features[0]);
      // console.log(lineDistance);

      const arc = [];
      const arc2 = [];

      const steps = 500;

      for (let i = 0; i < lineDistance; i += lineDistance / steps) {
        const segment = along(originToCurrentRoute2.features[0], i);
        arc.push(segment.geometry.coordinates);
      }
      for (let i = 0; i < lineDistance2; i += lineDistance2 / steps) {
        const segment = along(currentToDestinationRoute2.features[0], i);
        arc2.push(segment.geometry.coordinates);
      }

      map.current.on('load', () => {
        map.current?.addSource('route', {
          type: 'geojson',
          //@ts-ignore
          data: originToCurrentRoute.features[0]
        });

        map.current?.addSource('route2', {
          type: 'geojson',
          //@ts-ignore
          data: currentToDestinationRoute.features[0]
        });

        map.current?.addLayer({
          id: 'route',
          source: 'route',
          type: 'line',
          paint: {
            'line-width': 2,
            'line-color': isDark
              ? getThemeColor('primary')
              : getThemeColor('primary-light')
          }
        });
        map.current?.addLayer({
          id: 'route2',
          source: 'route2',
          type: 'line',
          paint: {
            'line-color': getThemeColor('warning')
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    map.current?.setStyle(styles[theme]);
  }, [theme]);

  return (
    <>
      <div
        ref={mapContainer}
        className={classNames(className, 'mapbox-container position-relative')}
        {...rest}
      >
        <div className="position-relative ">
          <div id="flightMap" className="map rounded-3" />

          <div className="mapbox-control-btn flight-map-control-btn z-1">
            <Button onClick={() => map.current?.zoomIn()} className="zoomIn">
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Button onClick={() => map.current?.zoomOut()} className="zoomOut">
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            <Button
              onClick={() => map.current?.getContainer().requestFullscreen()}
              className="zoomOut mt-md-3"
            >
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </Button>
          </div>
        </div>

        {/* z-1 extra class */}
        <div className="position-absolute z-1 top-0 w-100 mt-3 mt-md-5 px-3 px-md-5 px-xl-7">
          <div
            className="d-flex align-items-center bg-secondary overflow-hidden rounded-1"
            style={{ height: 46 }}
          >
            <div className="h-100 px-3 d-flex align-items-center bg-danger-subtle position-relative z-5">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-danger me-md-2"
              />
              <h3 className="mb-0 fw-bold text-nowrap d-none d-md-block">
                Live Tracking
              </h3>
            </div>
            <div className="swiper-theme-container">
              <Swiper
                wrapperClass="swiper-continuous-autoplay"
                loop={true}
                spaceBetween={40}
                centeredSlides={true}
                slidesPerView="auto"
                speed={4000}
                autoplay={{
                  delay: 0
                }}
                grabCursor={true}
              >
                {routes.map((route, index) => (
                  <SwiperSlide key={index} className="w-auto">
                    <div className="d-flex align-items-center">
                      <h6 className="px-3 py-2 bg-primary-subtle mb-0 fs-10 rounded-1 me-2">
                        {route.flightNo}
                      </h6>
                      <img
                        className="me-1"
                        src={route.logo}
                        alt=""
                        width={16}
                      />
                      <h6 className="mb-0 text-white fw-semibold me-3 text-nowrap">
                        {route.airLine}
                      </h6>
                      <h6 className="mb-0 fw-semibold text-white">
                        {route.from}
                      </h6>
                      <FontAwesomeIcon
                        icon={faPlane}
                        className="text-primary mx-2"
                      />
                      <h6 className="mb-0 fw-semibold text-white border-end pe-6">
                        {route.to}
                      </h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <FlightTable />
      </div>
    </>
  );
};

export default FlightMap;
