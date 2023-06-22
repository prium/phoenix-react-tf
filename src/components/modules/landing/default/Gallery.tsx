//@ts-ignore
import React, { useEffect, useRef } from 'react';
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

import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';

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
    <div className="grid-stack-item border">
      <img src={galleryItem.img} alt="" className="rounded img-fluid" />
    </div>
  );
};

const breakpointColumnsObj = {
  default: 4, // Number of columns for default breakpoint (e.g., when the screen size is not matched with any specified breakpoint)
  1100: 3, // Number of columns for 1100px breakpoint
  700: 2, // Number of columns for 700px breakpoint
  500: 1 // Number of columns for 500px breakpoint
};

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    var grid = GridStack.init({
      float: true,
      cellHeight: '70px',
      staticGrid: true,

      minRow: 1
    });
  });

  return (
    <section className="bg-white pb-lg-6 pb-xl-8">
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <Row className=" mb-8 text-center text-sm-start">
          <Col xs={12} className="mb-4">
            <h4 className="text-primary fw-bolder mb-3">Gallery</h4>
            <h2>Some of Our Best Works</h2>
          </Col>
          <Col lg={6}>
            <p>
              Rise like Phoenix focusing only on functionalities for your digital products leaving
              the design for us. Show what you do, with our latest admin dashboard. Check our best
              works and let us know what you want to find.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              Want to tell your customers about the details of how and what? Tell them with all the
              posts at one place without them ridirecting to another page or site.
            </p>
          </Col>
        </Row>
        {/* <Row className="g-3" ref={containerRef}> */}
        {/* <div className="grid-stack">
          {galleryData.map(gallery => (
            <GalleryItem galleryItem={gallery} />
          ))}
        </div> */}

        <div className="grid-stack">
          <div className="grid-stack-item border gs-w-6" data-gs-w="6" data-gs-height="4">
            <div className="grid-stack-item-content">Item 1</div>
          </div>
          <div className="grid-stack-item border" data-gs-width="6" data-gs-height="4">
            <div className="grid-stack-item-content">Item 2</div>
          </div>
          <div className="grid-stack-item border" data-gs-width="4" data-gs-height="4">
            <div className="grid-stack-item-content">Item 3</div>
          </div>
        </div>
        {/* </Row> */}
      </div>
    </section>
  );
};

export default Gallery;
