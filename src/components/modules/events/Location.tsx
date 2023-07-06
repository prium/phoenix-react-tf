import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import { snazzyCustomDark, snazzyCustomLight } from 'data/googleMapStyles';
import { useAppContext } from 'providers/AppProvider';

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
              styles: theme === 'light' ? snazzyCustomLight : snazzyCustomDark
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Location;
