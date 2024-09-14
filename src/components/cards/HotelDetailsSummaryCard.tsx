import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import img1 from 'assets/img/hotels/39.png';
import { cartItems } from 'data/travel-agency/customer/hotelDetails';
import HotelDetailsCardItem from './HotelDetailsCardItem';
import { currencyFormat } from 'helpers/utils';

interface HotelDetailsSummaryCardProps {
  className?: string;
  isInfoShow: boolean;
}

const HotelDetailsSummaryCard = ({
  className,
  isInfoShow
}: HotelDetailsSummaryCardProps) => {
  const [items, setItems] = useState(cartItems);
  const [subTotal, setSubTotal] = useState(
    cartItems.reduce((acc, item) => acc + item.price, 0)
  );

  const [discount] = useState(50);

  const buttonClickHandler = (id: number) => {
    const newItems = items.filter(item => item.id !== id);
    const newSubTotal = newItems.reduce((acc, item) => acc + item.price, 0);
    setItems(newItems);
    setSubTotal(newSubTotal);
  };
  return (
    <Card className={className}>
      <Card.Body>
        <h5 className="mb-3">Summary</h5>
        {isInfoShow && (
          <>
            <img src={img1} alt="" width={208} className="rounded-2 mb-3" />
            <h4 className="text-body-highlight mb-2">
              Radisson Blu Water Garden Hotel, Dhaka
            </h4>
            <p className="mb-5 text-body-tertiary">
              Airport Rd, Dhaka Cantonment, Dhaka, 1206, Bangladesh
            </p>
          </>
        )}
        {items.map((item, index) => (
          <HotelDetailsCardItem
            key={item.id}
            item={item}
            index={index}
            className="mb-3"
            clickHandler={buttonClickHandler}
            isInfoShow={isInfoShow}
          />
        ))}
        <div className="px-4 py-3 bg-body-highlight rounded-2">
          <div className="d-flex flex-between-center mb-2">
            <h6 className="text-body-tertiary fw-semibold">Sub-total</h6>
            <h6 className="text-body-highlight fw-semibold">
              {currencyFormat(subTotal, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </h6>
          </div>
          <div className="d-flex flex-between-center mb-2">
            <h6 className="text-body-tertiary fw-semibold">Discount</h6>
            <h6 className="text-body-tertiary fw-semibold">
              -{currencyFormat(discount)}
            </h6>
          </div>
          <hr />
          <div className="d-flex flex-between-center">
            <h4 className="text-body">Total</h4>
            <h4 className="text-body">
              {currencyFormat(subTotal !== 0 ? subTotal - discount : 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </h4>
          </div>
        </div>
        {!isInfoShow && (
          <Link
            to="/apps/travel-agency/hotel/customer/hotel-compare"
            className="btn btn-primary mt-3 w-100"
          >
            Proceed with booking
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default HotelDetailsSummaryCard;
