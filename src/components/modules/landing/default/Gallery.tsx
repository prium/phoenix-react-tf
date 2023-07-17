import React from 'react';
import { Col, Row } from 'react-bootstrap';
import gallery1 from 'assets/img/gallery/1.png';
import gallery2 from 'assets/img/gallery/2.png';
import gallery3 from 'assets/img/gallery/3.png';
import gallery5 from 'assets/img/gallery/5.png';
import gallery4 from 'assets/img/gallery/4.png';
import gallery6 from 'assets/img/gallery/6.png';
import gallery7 from 'assets/img/gallery/7.png';
import gallery9 from 'assets/img/gallery/9.png';
import gallery8 from 'assets/img/gallery/8.png';
import gallery10 from 'assets/img/gallery/10.png';

type GalleryItemType = {
  breakpoints: {
    xs: number;
    md: number;
    lg: number;
  };
  img: string;
};

const galleryData: GalleryItemType[] = [
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery1 },
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery2 },
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery3 },
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery5 },
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery4 },
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery6 },
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery7 },
  { breakpoints: { xs: 6, md: 4, lg: 6 }, img: gallery9 },
  { breakpoints: { xs: 6, md: 4, lg: 3 }, img: gallery8 },
  { breakpoints: { xs: 6, md: 4, lg: 6 }, img: gallery10 }
];

const GalleryItem = ({ galleryItem }: { galleryItem: GalleryItemType }) => {
  return (
    <Col {...galleryItem.breakpoints}>
      <img src={galleryItem.img} alt="" className="rounded img-fluid" />
    </Col>
  );
};

const Gallery = () => {
  return (
    <section className="pt-15">
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <Row className=" mb-8 text-center text-sm-start">
          <Col xs={12} className="mb-4">
            <h4 className="text-primary fw-bolder mb-3">Gallery</h4>
            <h2>Some of Our Best Works</h2>
          </Col>
          <Col lg={6}>
            <p>
              Rise like Phoenix focusing only on functionalities for your
              digital products leaving the design for us. Show what you do, with
              our latest admin dashboard. Check our best works and let us know
              what you want to find.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              Want to tell your customers about the details of how and what?
              Tell them with all the posts at one place without them ridirecting
              to another page or site.
            </p>
          </Col>
        </Row>
        <Row className="g-3">
          {galleryData.map(gallery => (
            <GalleryItem galleryItem={gallery} key={gallery.img} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Gallery;
