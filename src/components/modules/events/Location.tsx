import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Button from 'components/base/Button';
import { snazzyCustomDark, snazzyCustomLight } from 'data/googleMapStyles';
import { useAppContext } from 'providers/AppProvider';
import { Col, Row } from 'react-bootstrap';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 40.7228022,
  lng: -74.0020158
};

const Location = () => {
  const {
    config: { theme }
  } = useAppContext();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!
  });
  return (
    <div className="mb-8">
      <h3 className="mb-5 mb-xl-4">Location</h3>
      {isLoaded ? (
        <div className="mb-3 mb-xl-4 location-map border overflow-hidden">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={{
              styles: theme === 'light' ? snazzyCustomLight : snazzyCustomDark,
              disableDefaultUI: true,
              zoomControl: true,
              scrollwheel: false,
              zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
              }
            }}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </div>
      ) : (
        <></>
      )}
      <Row className="flex-between-center gx-0 gy-3">
        <Col xs={12} sm="auto" className="me-1">
          <div className="d-flex">
            <h5 className="fw-bold text-1000 me-2 mb-0">
              James Tiberius Auditorium
            </h5>
            <p className="mb-0 text-1000 fs-9">Vancouver</p>
          </div>
        </Col>
        <Col xs={12} sm="auto" xl={12}>
          <Button variant="phoenix-primary" className="w-100">
            <FontAwesomeIcon icon="route" className="me-2" />
            Get directions
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
