import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faArrowRight,
  faCloudBolt,
  faCloudShowersHeavy,
  faFilter,
  faPlane,
  faSun,
  faTemperature0,
  faWind
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

import phoenixFirelines from 'assets/img/brands/phoenix-firelines.png';
import qatarAirways from 'assets/img/brands/qatar-airways.png';
import japanAirlines from 'assets/img/brands/jal.png';
import emirates from 'assets/img/brands/emirates.png';
import china from 'assets/img/country/china.png';
import usa from 'assets/img/country/usa.png';
import canada from 'assets/img/country/canada.png';
import denmark from 'assets/img/country/denmark.png';
import southKorea from 'assets/img/country/south-korea.png';
import qatar from 'assets/img/country/qatar.png';
import norway from 'assets/img/country/norway.png';
import FlightsTableHeader from './FlightsHeader';

interface FlightData {
  flightNo: string;
  vendor: {
    image: string;
    name: string;
  };
  route: {
    from: {
      flag: string;
      airport: string;
    };
    to: {
      flag: string;
      airport: string;
    };
  };
  destination: {
    currentPosition: string;
    target: string;
    percent: number;
  };
  weather: {
    temperature: number;
    weather: string;
    icon: IconDefinition;
    color: string;
  };
  time: {
    time: string;
    date: string;
  };
  status: {
    label: string;
    type: string;
  };
}

const flightsData: FlightData[] = [
  {
    flightNo: '#24349',
    vendor: {
      image: phoenixFirelines,
      name: 'Phoenix Firelines'
    },
    route: {
      from: {
        flag: usa,
        airport: 'LAX'
      },
      to: {
        flag: canada,
        airport: 'YVR'
      }
    },
    destination: {
      currentPosition: '180 km, 00h:15m ago',
      target: '955 km, in 01h:25m',
      percent: 25
    },
    weather: {
      temperature: 15,
      weather: 'Stormy',
      icon: faCloudBolt,
      color: 'text-body-tertiary'
    },
    time: {
      time: '08:26 PM',
      date: 'Sunday, Nov 06, 2022'
    },
    status: {
      label: 'Delayed',
      type: 'warning'
    }
  },
  {
    flightNo: '#23421',
    vendor: {
      image: qatarAirways,
      name: 'Qatar Airways'
    },
    route: {
      from: {
        flag: denmark,
        airport: 'EBJ'
      },
      to: {
        flag: southKorea,
        airport: 'CDG'
      }
    },
    destination: {
      currentPosition: '600 km, 02h:15m ago',
      target: '1,200 km, in 02h:25m',
      percent: 60
    },
    weather: {
      temperature: 28,
      weather: 'Sunny',
      icon: faSun,
      color: 'text-warning'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'On Time',
      type: 'primary'
    }
  },
  {
    flightNo: '#23132',
    vendor: {
      image: japanAirlines,
      name: 'Japan Airlines'
    },
    route: {
      from: {
        flag: china,
        airport: 'GOT'
      },
      to: {
        flag: usa,
        airport: 'BCN'
      }
    },
    destination: {
      currentPosition: '500 km, 00h:56m ago',
      target: '3,455 km, in 03h:25m',
      percent: 25
    },
    weather: {
      temperature: 22,
      weather: 'Wind',
      icon: faWind,
      color: 'text-info'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'Departure',
      type: 'success'
    }
  },
  {
    flightNo: '#22267',
    vendor: {
      image: emirates,
      name: 'Emirate'
    },
    route: {
      from: {
        flag: qatar,
        airport: 'DIA'
      },
      to: {
        flag: norway,
        airport: 'OSL'
      }
    },
    destination: {
      currentPosition: '00 km, 00h:00m ago',
      target: '00 km, in 00h:00m',
      percent: 0
    },
    weather: {
      temperature: 5,
      weather: 'Heavy rain',
      icon: faCloudShowersHeavy,
      color: 'text-danger'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'Cancelled',
      type: 'danger'
    }
  },
  {
    flightNo: '#41242',
    vendor: {
      image: emirates,
      name: 'Emirate'
    },
    route: {
      from: {
        flag: qatar,
        airport: 'DIA'
      },
      to: {
        flag: norway,
        airport: 'OSL'
      }
    },
    destination: {
      currentPosition: '26512 km, .02h:56m ago',
      target: '3,455 km, in 03h:25m',
      percent: 75
    },
    weather: {
      temperature: 5,
      weather: 'Heavy rain',
      icon: faCloudShowersHeavy,
      color: 'text-danger'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'On Time',
      type: 'primary'
    }
  }
];
const columns: ColumnDef<FlightData>[] = [
  {
    accessorKey: 'flightNo',
    header: 'Flights no.',
    cell: ({ row: { original } }) => {
      const { flightNo } = original;
      return (
        <Link to="#!" className="fw-bold">
          {flightNo}
        </Link>
      );
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle text-body-tertiary ps-0'
      },
      cellProps: { className: 'ps-0 align-middle' }
    }
  },
  {
    accessorFn: ({ vendor }) => vendor.name,
    header: 'Vendor',
    cell: ({ row: { original } }) => {
      const { vendor } = original;
      return (
        <Link to="#!" className="d-flex align-items-center gap-2">
          <img src={vendor.image} alt="" width={32} />
          <h6 className="mb-0 text-primary fw-semibold text-nowrap">
            {vendor.name}
          </h6>
        </Link>
      );
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle text-body-tertiary',
        style: { width: '170px' }
      },
      cellProps: { className: 'align-middle pe-5' }
    }
  },
  {
    accessorFn: ({ weather }) => weather.temperature,
    header: 'Weather',
    cell: ({ row: { original } }) => {
      const { weather } = original;
      return (
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faTemperature0}
            className={`me-2 text-${
              weather.temperature > 25 ? 'danger' : 'info'
            }`}
          />
          <p className="mb-0 text-body-tertiary me-3">
            {weather.temperature}°C
          </p>
          <FontAwesomeIcon
            icon={weather.icon}
            className={`me-2 ${weather.color}`}
          />
          <p className="mb-0 text-body-tertiary">{weather.weather}</p>
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'text-start align-middle text-body-tertiary',
        style: { width: '250px' }
      },
      cellProps: { className: 'align-middle pe-5' }
    }
  },
  {
    accessorFn: ({ route }) => route.from,
    header: 'Route',
    cell: ({ row: { original } }) => {
      const { route } = original;
      return (
        <div className="d-flex align-items-center gap-2">
          <img src={route.from.flag} alt="" width={16} />
          <p className="mb-0 fw-semibold text-bold">{route.from.airport}</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-body-tertiary mx-1"
          />
          <p className="mb-0 fw-semibold text-bold">{route.to.airport}</p>
          <img src={route.to.flag} alt="" width={16} />
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-body-tertiary',
        style: { width: '180px' }
      },
      cellProps: { className: 'align-middle pe-5' }
    }
  },
  {
    accessorFn: ({ destination }) => destination.percent,
    header: 'Destination',
    cell: ({ row: { original } }) => {
      const { destination, status } = original;
      return (
        <>
          <ProgressBar
            style={{ height: 2 }}
            className="position-relative overflow-visible align-middle"
          >
            <ProgressBar
              now={destination.percent}
              min={0}
              max={100}
              className=""
            />
            <FontAwesomeIcon
              className="text-info ms-0"
              icon={faPlane}
              transform={'up-7'}
            />
          </ProgressBar>
          <div className="d-flex justify-content-between mt-2">
            <p
              className={` mb-0 fs-10 ${
                status.label === 'Cancelled'
                  ? 'text-body-quaternary'
                  : 'text-body-tertiary'
              }`}
            >
              {destination.currentPosition}
            </p>
            <p
              className={` mb-0 fs-10 ${
                status.label === 'Cancelled'
                  ? 'text-body-quaternary'
                  : 'text-body-tertiary'
              }`}
            >
              {destination.target}
            </p>
          </div>
        </>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-body-tertiary',
        style: { minWidth: '280px' }
      },
      cellProps: { className: 'align-middle pe-5 pe-xxl-7' }
    }
  },
  {
    accessorFn: ({ status }) => status.label,
    header: 'Status',
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge
          variant="phoenix"
          bg="primary"
          className={`badge-phoenix-${status.type}`}
        >
          {status.label}
        </Badge>
      );
    },
    meta: {
      headerProps: {
        className: 'text-end align-middle text-body-tertiary',
        style: { minWidth: '120px' }
      },
      cellProps: { className: 'text-end align-middle' }
    }
  },
  {
    accessorFn: ({ time }) => time.date,
    header: 'Time',
    cell: ({ row: { original } }) => {
      const { time } = original;
      return (
        <>
          <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faClock} className="text-body" />
            <span className="text-body fw-semibold">{time.time}</span>
          </div>
          <div className="d-flex justify-content-end gap-2">
            <FeatherIcon icon="calendar" style={{ width: 16, height: 16 }} />
            <span className="text-body fw-semibold">{time.date}</span>
          </div>
        </>
      );
    },
    meta: {
      headerProps: {
        className: 'text-end align-middle text-body-tertiary',
        style: { minWidth: '200px' }
      },
      cellProps: { className: 'text-end align-middle' }
    }
  },
  {
    accessorKey: 'action',
    enableSorting: false,
    header: '',
    cell: () => {
      return (
        <div className="btn-reveal-trigger">
          <RevealDropdown btnClassName="fs-10">
            <ActionDropdownItems />
          </RevealDropdown>
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'text-end pe-0'
      },
      cellProps: { className: 'text-end align-middle' }
    }
  }
];

const Flights = () => {
  const table = useAdvanceTable({
    data: flightsData,
    columns,
    pageSize: 4,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 pb-9 bg-body-emphasis border-top">
      <div className="">
        <AdvanceTableProvider {...table}>
          <Row className="gx-0 gy-3 align-items-center py-4">
            <Col xl="auto">
              <h3 className="mb-0">Flights</h3>
            </Col>
            <Col xs="auto" className="flex-1">
              <div className="d-flex flex-between-center">
                <div className="d-flex align-items-center">
                  <SearchBox
                    placeholder="Search by Search no."
                    className="ms-xl-6 w-auto"
                    // onChange={handleSearchInputChange}
                  />
                  <Button
                    variant="phoenix-secondary"
                    className="px-3 ms-2 me-3"
                  >
                    <FontAwesomeIcon
                      icon={faFilter}
                      data-fa-transform="down-2"
                      className="text-body-secondary"
                    />
                  </Button>
                </div>
                {/* <AdvanceTableFooter /> */}
                <div className="d-flex align-items-center">
                  <div className="pagination d-none"></div>
                  <p
                    data-list-info
                    className="mb-0 d-none d-md-block me-3 fw-semibold text-body text-nowrap"
                  ></p>
                  <FlightsTableHeader viewAllBtnClass="ms-auto" navBtn />
                </div>
              </div>
            </Col>
          </Row>
          <AdvanceTable
            tableProps={{
              className: 'phoenix-table fs-9 mb-4 border-top border-translucent'
            }}
            rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
          />
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Flights;
