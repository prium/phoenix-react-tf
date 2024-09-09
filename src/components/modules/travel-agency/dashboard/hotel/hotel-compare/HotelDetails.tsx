import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  type HotelPhoto,
  type RatingData,
  type Facilities
} from 'data/travel-agency/customer/hotelCompare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { Form, ProgressBar } from 'react-bootstrap';

type Props = {
  hotelPhotos: HotelPhoto[];
  ratingData: RatingData[];
  facilities: Facilities[];
};

const HotelDetails = ({ hotelPhotos, ratingData, facilities }: Props) => {
  const [values, setValues] = useState<{ [key: string]: string }>({
    bubbleHotel: 'Bubble Hotel Bali Ubud',
    onayaResort: 'ONAYA Bali Resort',
    gynandhaCottage: 'Gynandha Ubud Cottage'
  });

  return (
    <table className="table table-layout-fixed table-compare mb-0">
      <thead>
        <tr>
          <th className="p-0 border-0" style={{ width: 225 }}></th>
          <th className="p-0 border-0"></th>
          <th className="p-0 border-0"></th>
          <th className="p-0 border-0"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className="ps-4 pt-4 pb-3 fw-bold border-0">
            Hotel picture
          </td>
        </tr>
        <tr>
          <td className="border-0 bg-body-highlight py-0"></td>
          {hotelPhotos.map((item: HotelPhoto, index: number) => (
            <td
              className={`border-0 py-0 ${
                index !== hotelPhotos.length - 1 ? 'ps-3 pe-0' : 'ps-3'
              }`}
              key={index}
              style={{
                minWidth: 250
              }}
            >
              <div className="position-relative swiper-theme-container overflow-hidden rounded-2">
                <Swiper
                  slidesPerView={1}
                  loop
                  autoplay
                  pagination
                  modules={[Autoplay, Pagination]}
                  className="theme-slider"
                >
                  {item.images.map((image: string, idx: number) => (
                    <SwiperSlide key={idx}>
                      <img src={image} alt="" className="w-100 h-100" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Badge
                  variant="phoenix"
                  bg="warning"
                  className="fs-10 position-absolute top-0 start-0 ms-3 mt-3 z-1"
                >
                  <FontAwesomeIcon icon={faStar} className="me-1" />
                  {item.rating}
                </Badge>
                <Button
                  variant=""
                  className="btn-wish position-absolute top-0 end-0 me-3 mt-3 z-1"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div>
              <div className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Enter hotel name"
                  value={values[item.id] as string}
                  onChange={e =>
                    setValues(prevValues => ({
                      ...prevValues,
                      [item.id]: e.target.value
                    }))
                  }
                  className="form-control-lg mt-2 pe-5"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fs-9 text-body-quaternary position-absolute top-0 end-0 me-3 mt-3"
                  transform={'down-2'}
                />
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={4} className="pt-4 pb-3 ps-4 fw-bold">
            Hotel Review
          </td>
        </tr>
        {ratingData.map((item: RatingData, index: number) => (
          <tr key={index}>
            <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
              <h6 className="text-body fw-bolder text-uppercase mb-0">
                {item.name}
              </h6>
            </td>
            <td className="px-3 border-end border-translucent">
              <div className="d-flex align-items-center gap-2">
                <Badge bg="primary" className="fs-8">
                  {item.ratings[0].toString()}
                </Badge>
                <ProgressBar
                  now={parseFloat(item.ratings[0]) * 20}
                  style={{ height: '8px' }}
                  className="bg-body-highlight w-100"
                />
              </div>
            </td>
            <td className="px-3 border-end border-translucent">
              <div className="d-flex align-items-center gap-2">
                <Badge bg="primary" className="fs-8">
                  {item.ratings[1].toString()}
                </Badge>
                <ProgressBar
                  now={parseFloat(item.ratings[1]) * 20}
                  style={{ height: '8px' }}
                  className="bg-body-highlight w-100"
                />
              </div>
            </td>
            <td className="px-3 border-end border-translucent">
              <div className="d-flex align-items-center gap-2">
                <Badge bg="primary" className="fs-8">
                  {item.ratings[2].toString()}
                </Badge>
                <ProgressBar
                  now={parseFloat(item.ratings[2]) * 20}
                  style={{ height: '8px' }}
                  className="bg-body-highlight w-100"
                />
              </div>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className="ps-4 pt-4 pb-3 fw-bold">
            Facilities at a Glance
          </td>
        </tr>
        <tr>
          <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
            <h6 className="text-body fw-bolder text-uppercase mb-0">
              Hotel facilities
            </h6>
          </td>
          {facilities.map((items: Facilities, index) => (
            <td
              className={`border-translucent px-3 ${
                index === facilities.length - 1 ? 'border-end-lg' : 'border-end'
              }`}
              key={index}
            >
              <ul className="mb-0 list-unstyled">
                {items.map((item, idx) => (
                  <li className="text-body-highlight fs-9" key={idx}>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-success me-2"
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default HotelDetails;
