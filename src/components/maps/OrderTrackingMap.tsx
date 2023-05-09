import Mapbox from 'components/base/MapBox';

const OrderTrackingMap = () => {
  return (
    <div className="border border-300 rounded-3 overflow-hidden h-100">
      <Mapbox
        options={{
          center: [-74.0020158, 40.7228022],
          zoom: 15,
          scrollZoom: false
        }}
      />
    </div>
  );
};

export default OrderTrackingMap;
