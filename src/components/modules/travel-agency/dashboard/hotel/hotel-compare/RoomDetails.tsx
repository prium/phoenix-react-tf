import React, { useState } from 'react';
import {
  type Amenities,
  type Accommodation
} from 'data/travel-agency/customer/hotelCompare';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faUser,
  faBaby,
  faBath,
  faCircleCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import RoomPictureSlider from './RoomPictureSlider';
import ChangeRoomModal from 'components/modals/ChangeRoomModal';
import { SwiperSlide } from 'swiper/react';

type Props = {
  accommodation: Accommodation[];
  amenities: Amenities[];
};

const RoomDetails = ({ accommodation, amenities }: Props) => {
  const [showChangeRoomModal, setShowChangeRoomModal] =
    useState<boolean>(false);
  return (
    <>
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
            <td colSpan={4} className="ps-4 pt-4 pb-3 fw-bold">
              Accommodation
            </td>
          </tr>
          <tr>
            <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
              <h6 className="text-body fw-bolder text-uppercase mb-0">
                room type
              </h6>
            </td>
            {accommodation.map((item: Accommodation, index: number) => (
              <td
                className={`border-translucent px-3 ${
                  index === accommodation.length - 1
                    ? 'border-end-lg'
                    : 'border-end'
                }`}
                key={item.id}
              >
                <div className="d-flex flex-wrap flex-between-center gap-2">
                  <h4 className="mb-0">{item.type}</h4>
                  <Button
                    variant="phoenix-primary"
                    onClick={() => setShowChangeRoomModal(true)}
                  >
                    Change Room
                  </Button>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
              <h6 className="text-body fw-bolder text-uppercase mb-0">
                room price
              </h6>
            </td>
            {accommodation.map((item: Accommodation, index: number) => (
              <td
                className={`border-translucent px-3 ${
                  index === accommodation.length - 1
                    ? 'border-end-lg'
                    : 'border-end'
                }`}
                key={item.id}
              >
                <h3 className="d-flex align-items-center gap-2">
                  <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
                    ${item.price}
                  </span>
                  ${item.discountPrice}
                  <span className="fs-9 fw-bold">/ night</span>
                </h3>
                <p className="mb-0">Inclusive of all taxes and fees</p>
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
              <h6 className="text-body fw-bolder text-uppercase mb-0">
                room picture
              </h6>
            </td>
            {accommodation.map((item: Accommodation, index: number) => (
              <td
                className={`border-translucent px-3 ${
                  index === accommodation.length - 1
                    ? 'border-end-lg'
                    : 'border-end'
                }`}
                key={item.id}
                style={{
                  minWidth: 250
                }}
              >
                <RoomPictureSlider
                  slidesPerView={3}
                  spaceBetween={8}
                  classNames="hotel-compare-slider"
                >
                  {item.images.map((image: string, idx: number) => (
                    <SwiperSlide key={idx}>
                      <img src={image} alt="" className="img-fluid rounded-2" />
                    </SwiperSlide>
                  ))}
                </RoomPictureSlider>
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
              <h6 className="text-body fw-bolder text-uppercase mb-0">
                room details
              </h6>
            </td>
            {accommodation.map((item: Accommodation, index: number) => (
              <td
                key={item.id}
                className={`border-translucent px-3 ${
                  index === accommodation.length - 1
                    ? 'border-end-lg'
                    : 'border-end'
                }`}
              >
                <h6 className="fw-semibold text-body-highlight mb-2">
                  <FontAwesomeIcon icon={faBed} className="me-2 text-primary" />
                  {item.beds} Double Bed
                </h6>
                <h6 className="fw-semibold text-body-highlight mb-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="me-2 text-primary"
                  />
                  {item.adults} Adults
                </h6>
                <h6 className="fw-semibold text-body-highlight mb-2">
                  <FontAwesomeIcon
                    icon={faBaby}
                    className="me-2 text-primary"
                  />
                  {item.child} Child
                </h6>
                <h6 className="fw-semibold text-body-highlight">
                  <FontAwesomeIcon
                    icon={faBath}
                    className="me-2 text-primary"
                  />
                  {item.bathrooms} Bathroom
                </h6>
              </td>
            ))}
          </tr>
          <tr>
            <td className="pt-4 pb-3 ps-4 fw-bold" colSpan={4}>
              Popular Amenities
            </td>
          </tr>
          {amenities.map((item: Amenities) => (
            <tr key={item.id}>
              <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                <h6 className="text-body fw-bolder text-uppercase mb-0">
                  {item.name}
                </h6>
              </td>
              {item.availability.map((isAvailable: boolean, index: number) => (
                <td
                  key={index}
                  className="px-3 align-middle border-end-lg border-translucent"
                >
                  {isAvailable ? (
                    <h6 className="text-body">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-success me-2"
                      />
                      Available
                    </h6>
                  ) : (
                    <h6 className="text-body">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="text-secondary-light me-2"
                      />
                      Not Available
                    </h6>
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="border-0 pb-0"></td>
            <td className="border-0 px-3 pb-0">
              <Button variant="outline-primary" className="w-100">
                View room details
              </Button>
            </td>
            <td className="border-0 px-3 pb-0">
              <Button variant="outline-primary" className="w-100">
                View room details
              </Button>
            </td>
            <td className="border-0 px-3 pb-0">
              <Button variant="outline-primary" className="w-100">
                View room details
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <ChangeRoomModal
        show={showChangeRoomModal}
        handleClose={() => setShowChangeRoomModal(false)}
      />
    </>
  );
};

export default RoomDetails;
