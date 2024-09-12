import React from 'react';
import {
  HotelInfo,
  PopularAmenities
} from 'data/travel-agency/customer/hotelCompare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

interface HotelCompareAmenityRowProps {
  label: string;
  items: HotelInfo[];
  aminityKey: keyof PopularAmenities;
}

const HotelCompareAmenityRow = ({
  label,
  items,
  aminityKey
}: HotelCompareAmenityRowProps) => {
  return (
    <tr>
      <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
        <h6 className="text-body fw-bolder text-uppercase mb-0">{label}</h6>
      </td>
      {items.map(item => (
        <td
          key={item.id}
          className="px-3 align-middle border-end-lg border-translucent"
        >
          {item.popularAmenities[aminityKey] ? (
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
  );
};

export default HotelCompareAmenityRow;
