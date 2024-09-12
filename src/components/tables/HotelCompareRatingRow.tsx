import React from 'react';
import Badge from 'components/base/Badge';
import { numberFormat } from 'helpers/utils';
import { ProgressBar } from 'react-bootstrap';
import { HotelInfo, Rating } from 'data/travel-agency/customer/hotelCompare';

interface HotelCompareRatingRowProps {
  label: string;
  items: HotelInfo[];
  ratingKey: keyof Rating;
}

const HotelCompareRatingRow = ({
  label,
  items,
  ratingKey
}: HotelCompareRatingRowProps) => {
  return (
    <tr>
      <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
        <h6 className="text-body fw-bolder text-uppercase mb-0">{label}</h6>
      </td>
      {items.map(item => (
        <td className="px-3 border-end border-translucent" key={item.id}>
          <div className="d-flex align-items-center gap-2">
            <Badge bg="primary" className="fs-8">
              {numberFormat(item.ratings[ratingKey], 'standard', {
                minimumFractionDigits: 1
              })}
            </Badge>
            <ProgressBar
              now={parseFloat(item.ratings[ratingKey].toString()) * 20}
              style={{ height: 8 }}
              className="bg-body-highlight w-100"
            />
          </div>
        </td>
      ))}
    </tr>
  );
};

export default HotelCompareRatingRow;
