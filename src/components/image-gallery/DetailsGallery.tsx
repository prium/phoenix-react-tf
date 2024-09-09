import React, { useState } from 'react';
import { HotelImageType } from 'data/travel-agency/customer/hotelDetails';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';
import DetailsGalleryItem from './DetailsGalleryItem';

type Props = {
  images: HotelImageType[];
  classNames?: string;
};

const DetailsGallery = ({ images, classNames }: Props) => {
  const [index, setIndex] = useState(1);
  const { lightboxProps, openLightbox } = useLightbox(
    images.map((item: HotelImageType) => item.largeImg)
  );

  const handleItemClick = (index: number) => {
    openLightbox(index);
    setIndex(index);
  };

  return (
    <>
      <div
        className={`${classNames ? classNames : ''} gap-3 d-grid grid-cols-12`}
      >
        {images.map((imageItem: HotelImageType, index: number) => (
          <DetailsGalleryItem
            key={imageItem.id}
            item={imageItem}
            handleClick={() => handleItemClick(index + 1)}
            isLast={index === images.length - 1}
          />
        ))}
      </div>
      <div>
        <Lightbox {...lightboxProps} key={index} />
      </div>
    </>
  );
};

export default DetailsGallery;
