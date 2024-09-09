import React from 'react';
import { type HotelImageType } from 'data/travel-agency/customer/hotelDetails';

type Props = {
  item: HotelImageType;
  handleClick: () => void;
  isLast: boolean;
};

const DetailsGalleryItem = ({ item, handleClick, isLast }: Props) => {
  return (
    <div className={`${item.classNames} cursor-pointer`} onClick={handleClick}>
      {isLast ? (
        <div className="position-relative rounded-2 overflow-hidden">
          <img
            src={item.img}
            alt=""
            className="w-100 h-md-100 object-fit-cover"
            height={43}
          />
          <div className="position-absolute left-0 top-0 w-100 h-100 d-flex flex-center bg-black bg-opacity-50">
            <a
              href="/apps/travel-agency/hotel/customer/gallery"
              className="text-white stretched-link"
            >
              Show all
            </a>
          </div>
        </div>
      ) : (
        <img src={item.img} alt="" className="rounded-2 img-fluid" />
      )}
    </div>
  );
};

export default DetailsGalleryItem;
