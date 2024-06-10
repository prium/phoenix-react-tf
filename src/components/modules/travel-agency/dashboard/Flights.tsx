import TravelFlightTable from 'components/tables/TravelFlightTable';
import FlightMap from './FlightMap';

const Flights = () => {
  return (
    <>
      <TravelFlightTable />
      <div className="mt-4 mb-3 mb-xl-4 overflow-hidden">
        <FlightMap
          className="rounded-3"
          options={{
            center: [-73.102712, 7.102257],
            zoom: 5
          }}
        />
      </div>
    </>
  );
};

export default Flights;
