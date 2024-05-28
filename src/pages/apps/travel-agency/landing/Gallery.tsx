import bgLeft30 from 'assets/img/bg/bg-left-30.png';
import bgRight30 from 'assets/img/bg/bg-right-30.png';
import IsotopeNav from 'components/navs/IsotopeNav';
import { useState } from 'react';
import tokyo1 from 'assets/img/gallery/tokyo-1.png';
import tokyo2 from 'assets/img/gallery/tokyo-2.png';
import tokyo3 from 'assets/img/gallery/tokyo-3.png';
import bali1 from 'assets/img/gallery/bali-1.png';
import bali2 from 'assets/img/gallery/bali-2.png';
import bali3 from 'assets/img/gallery/bali-3.png';
import sydney1 from 'assets/img/gallery/sydney-1.png';
import sydney2 from 'assets/img/gallery/sydney-2.png';
import sydney3 from 'assets/img/gallery/sydney-3.png';
import paris1 from 'assets/img/gallery/paris-1.png';
import paris2 from 'assets/img/gallery/paris-2.png';
import paris3 from 'assets/img/gallery/paris-3.png';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Rating from 'components/base/Rating';
import Button from 'components/base/Button';

interface GalleryItem {
  img: string;
  category: string;
  location: string;
  rating: number;
  review: number;
}

const navItems = [
  {
    eventKey: 'tokyo',
    label: 'Tokyo'
  },
  {
    eventKey: 'bali',
    label: 'Bali'
  },
  {
    eventKey: 'sydney',
    label: 'Sydney'
  },
  {
    eventKey: 'paris',
    label: 'Paris'
  }
];

const galleryItems: GalleryItem[] = [
  {
    img: tokyo1,
    category: 'tokyo',
    location: 'King Power Mahanakhon',
    rating: 4.8,
    review: 1.4
  },
  {
    img: tokyo2,
    category: 'tokyo',
    location: 'Meiji Jingu',
    rating: 5.0,
    review: 2.2
  },
  {
    img: tokyo3,
    category: 'tokyo',
    location: 'Imperial Palace',
    rating: 4.5,
    review: 1.2
  },
  {
    img: bali1,
    category: 'bali',
    location: 'Nusa Lembongan',
    rating: 4.7,
    review: 1.2
  },
  {
    img: bali2,
    category: 'bali',
    location: 'Waterbom Bali',
    rating: 4.5,
    review: 1.8
  },
  {
    img: bali3,
    category: 'bali',
    location: 'Kuta Beach',
    rating: 5.0,
    review: 4.1
  },
  {
    img: sydney1,
    category: 'sydney',
    location: 'The Rocks',
    rating: 4.8,
    review: 1.9
  },
  {
    img: sydney2,
    category: 'sydney',
    location: 'Manly Beach',
    rating: 4.7,
    review: 1.1
  },
  {
    img: sydney3,
    category: 'sydney',
    location: 'Darling Harbour',
    rating: 5.0,
    review: 3.2
  },
  {
    img: paris1,
    category: 'paris',
    location: 'Louvre Museum',
    rating: 4.4,
    review: 4.3
  },
  {
    img: paris2,
    category: 'paris',
    location: 'Montmartre',
    rating: 5.0,
    review: 5.0
  },
  {
    img: paris3,
    category: 'paris',
    location: 'Tuileries Garden',
    rating: 4.1,
    review: 4.5
  }
];

const GalleryItem = ({ galleryItem }: { galleryItem: GalleryItem }) => {
  return (
    <Col xs={12} className="w-100">
      <div className="img-zoom-hover-lg rounded-2 overflow-hidden position-relative">
        <Link to="#!">
          <img
            className="w-100 object-fit-cover"
            height={220}
            src={galleryItem.img}
            alt=""
          />
        </Link>
        <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <div className="backdrop-faded">
          <Link to="#!" className="fw-bold fs-7 text-white streched-link">
            {galleryItem.location}
          </Link>
          <h5 className="text-light mb-0">
            {/* <FontAwesomeIcon icon={faStar} className="text-warning me-1" /> */}
            <Rating
              iconClass="me-1 fs-8 mb-1"
              initialValue={1}
              iconsCount={1}
              allowFraction={false}
            />
            {galleryItem.rating}
            <span className="fs-10">/5 </span>({galleryItem.review}k review)
          </h5>
        </div>
      </div>
    </Col>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    galleryItems[0].category
  );
  const initialgallery = galleryItems.filter(item =>
    item.category.includes(selectedCategory)
  );
  const [images, setImages] = useState(initialgallery);

  const handleNavItemSelect = (category: string | null) => {
    setSelectedCategory(category || galleryItems[0].category);
    setImages(
      galleryItems.filter(item =>
        category ? item.category.includes(category) : true
      )
    );
  };

  return (
    <section className="py-10 overflow-hidden">
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgLeft30})`,
          backgroundPosition: 'left',
          backgroundSize: '40%',
          zIndex: '1'
        }}
      />
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgRight30})`,
          backgroundPosition: 'left',
          backgroundSize: '26%',
          zIndex: '1'
        }}
      />
      <div className="bg-booking-gallery" />
      <div className="container-medium position-relative z-2">
        <h3 className="mb-2 text-body-emphasis text-center">
          Popular Attractions
        </h3>
        <p className="mb-0 text-body-tertiary text-center mb-5">
          Explore the most popular and frequently visited destinations around
          the world
        </p>
        <IsotopeNav
          navItems={navItems}
          className="mb-5 justify-content-center w-max-content mx-auto"
          onSelect={handleNavItemSelect}
        />
        <div className="row g-0 justify-content-center">
          <Col md={9} lg={7} xl={5}>
            <Row className="gx-0 gy-3">
              {images.map(gallery => (
                <GalleryItem galleryItem={gallery} key={gallery.img} />
              ))}
            </Row>
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <h5 className="mb-0">Explore more popular destination</h5>
              <div className="btn-ping">
                <div className="btn-ping-bg" />
                <Button
                  variant="link"
                  className="border p-0 fs-8 d-flex align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
