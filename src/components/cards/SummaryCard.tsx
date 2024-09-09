import React from 'react';
import { Card } from 'react-bootstrap';
import img1 from 'assets/img/hotels/39.png';
import {
  cartItems,
  type CardItem
} from 'data/travel-agency/customer/hotelDetails';
import HotelCardItem from './HotelCardItem';

type Props = {
  page: string;
  classNames?: string;
};

const SummaryCard = ({ page, classNames }: Props) => {
  return (
    <Card className={classNames}>
      <Card.Body>
        <h5 className="mb-3">Summary</h5>
        {page !== 'hotel-details' && (
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
        {cartItems.map((item: CardItem, index: number) => (
          <HotelCardItem
            key={item.id}
            item={item}
            index={index}
            page={page}
            classNames="mb-3"
          />
        ))}
        <div className="px-4 py-3 bg-body-highlight rounded-2">
          <div className="d-flex flex-between-center mb-2">
            <h6 className="text-body-tertiary fw-semibold">Sub-total</h6>
            <h6 className="text-body-highlight fw-semibold">$3,513.40</h6>
          </div>
          <div className="d-flex flex-between-center mb-2">
            <h6 className="text-body-tertiary fw-semibold">Discount</h6>
            <h6 className="text-body-tertiary fw-semibold">-$50</h6>
          </div>
          <hr />
          <div className="d-flex flex-between-center">
            <h4 className="text-body">Total</h4>
            <h4 className="text-body">1,756.70</h4>
          </div>
        </div>
        {page === 'hotel-details' && (
          <a
            href="/apps/travel-agency/hotel/customer/hotel-compare"
            className="btn btn-primary mt-3 w-100"
          >
            Proceed with booking
          </a>
        )}
      </Card.Body>
    </Card>
  );
};

export default SummaryCard;
