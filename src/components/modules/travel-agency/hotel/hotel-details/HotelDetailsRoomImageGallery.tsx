import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

interface HotelDetailsRoomImageGalleryProps {
  images: string[];
}

interface RoomImageItemProps {
  item: string;
  handleClick: () => void;
}

const RoomImageItem = ({ item, handleClick }: RoomImageItemProps) => {
  return (
    <div className="cursor-pointer h-100" onClick={handleClick}>
      <img
        src={item}
        alt=""
        className="w-100 h-100 object-fit-cover rounded-2"
      />
    </div>
  );
};

const HotelDetailsRoomImageGallery = ({
  images
}: HotelDetailsRoomImageGalleryProps) => {
  const [index, setIndex] = useState(1);
  const { lightboxProps, openLightbox } = useLightbox(images);

  const handleItemClick = (index: number) => {
    openLightbox(index);
    setIndex(index);
  };

  return (
    <>
      <Row className="gx-2 h-100">
        {images.map((imageItem, index) => (
          <Col key={index}>
            <RoomImageItem
              item={imageItem}
              handleClick={() => handleItemClick(index + 1)}
            />
          </Col>
        ))}
      </Row>
      <div>
        <Lightbox {...lightboxProps} key={index} />
      </div>
    </>
  );
};

export default HotelDetailsRoomImageGallery;
