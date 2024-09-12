import React, { useState } from 'react';
import { GalleryItemType } from 'data/travel-agency/customer/gallery';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';
import GalleryItem from './HotelGalleryItem';

interface HotelGalleryImagesProps {
  galleryItems: GalleryItemType[];
}

const HotelGalleryImages = ({ galleryItems }: HotelGalleryImagesProps) => {
  const [items] = useState(galleryItems);
  const [index, setIndex] = useState(1);

  const { lightboxProps, openLightbox } = useLightbox(
    items
      .map((el: GalleryItemType) => el.video || el.largeImg)
      .filter((item): item is string => !!item)
  );

  const handleItemClick = (index: number) => {
    openLightbox(index);
    setIndex(index);
  };

  return (
    <>
      <div className="gap-2 gap-sm-3 d-grid grid-cols-12">
        {galleryItems.map((gallery, index) => (
          <GalleryItem
            galleryItem={gallery}
            key={gallery.id}
            onClick={() => handleItemClick(index + 1)}
          />
        ))}
      </div>
      <div>
        <Lightbox {...lightboxProps} key={index} />
      </div>
    </>
  );
};

export default HotelGalleryImages;
