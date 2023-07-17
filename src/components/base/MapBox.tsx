import React, { HTMLAttributes, useEffect, useRef } from 'react';
import mapboxgl, { Map, MapboxOptions } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

interface MapboxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  options: Omit<MapboxOptions, 'container'>;
}

const Mapbox = ({ className, options, ...rest }: MapboxProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        // style: 'mapbox://styles/mapbox/light-v11',
        style: 'mapbox://styles/themewagon/cljzg9juf007x01pk1bepfgew',
        scrollZoom: false,
        ...options
      });

      if (options.center) {
        new mapboxgl.Marker({
          color: '#ed2000'
        })
          .setLngLat(options.center)
          .addTo(map.current);
      }
    }
  }, []);

  return (
    <>
      <div className={classNames(className, 'mapbox-container')} {...rest}>
        <div ref={mapContainer} className="map-container" />
        <div className="mapbox-control-btn">
          <Button onClick={() => map.current?.zoomIn()} className="zoomIn">
            <FontAwesomeIcon icon="plus" />
          </Button>
          <Button onClick={() => map.current?.zoomOut()} className="zoomOut">
            <FontAwesomeIcon icon="minus" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Mapbox;
