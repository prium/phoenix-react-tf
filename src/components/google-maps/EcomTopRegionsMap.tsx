import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { snazzyCustomLight } from 'data/googleMapStyles';
import { gMapMarkerPoints } from 'data/googleMapMarkerPoints';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const EcomTopRegionsMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!
  });

  const onLoad = React.useCallback((map: google.maps.Map) => {
    addMarkers(map);
  }, []);

  return isLoaded ? (
    <div className="h-100 w-100">
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        options={{
          zoom: 1.4,
          minZoom: 1.4,
          zoomControl: false,
          scrollwheel: true,
          disableDefaultUI: true,
          center: new window.google.maps.LatLng(25.659195, 30.182691),
          styles: snazzyCustomLight
        }}
      />
    </div>
  ) : (
    <></>
  );
};

const addMarkers = (map: google.maps.Map) => {
  const infoWindow = new google.maps.InfoWindow();

  const markers = gMapMarkerPoints.map(point => {
    const { name, location, street } = point;

    const label = `
    <h6 class="mb-1">${name}</h6>
    <p class="m-0 text-500">${street}, ${location}</p>
  `;

    const marker = new window.google.maps.Marker({
      position: { lat: point.lat, lng: point.lng }
    });

    marker.addListener('click', () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  new MarkerClusterer({
    markers,
    map,
    renderer
  });
};

const renderer = {
  render: ({ count, position }: { count: number; position: google.maps.LatLng }) => {
    let color = '#3874ff';
    if (count > 10) {
      color = '#e5780b';
    }
    if (count > 90) {
      color = '#25b003';
    }

    const svg = window.btoa(`
      <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
        <circle cx="120" cy="120" opacity=".9" r="70" />
        <circle cx="120" cy="120" opacity=".3" r="90" />
        <circle cx="120" cy="120" opacity=".2" r="110" />
      </svg>`);

    return new window.google.maps.Marker({
      label: { text: String(count), color: 'white', fontSize: '10px' },
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new window.google.maps.Size(45, 45)
      },
      // adjust zIndex to be above other markers
      zIndex: Number(window.google.maps.Marker.MAX_ZINDEX) + count
    });
  }
};

export default React.memo(EcomTopRegionsMap);
