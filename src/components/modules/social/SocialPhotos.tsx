import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from 'assets/img/gallery/11.png';
import img2 from 'assets/img/gallery/12.png';
import img3 from 'assets/img/gallery/13.png';
import img4 from 'assets/img/gallery/14.png';
import img5 from 'assets/img/gallery/15.png';
import img6 from 'assets/img/gallery/16.png';
import useLightbox from 'hooks/useLightbox';
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'components/base/LightBox';

const SocialPhotos = () => {
  const [attachments] = useState([img1, img2, img3, img4, img5, img6]);
  const { lightboxProps, openLightbox } = useLightbox(attachments);
  return (
    <>
      <div className="d-flex pb-4 align-items-end">
        <h3 className="flex-1 mb-0">Photos</h3>
        <Link to="#!" className="fw-bold fs-9 me-4">
          Albums
        </Link>
        <Link to="#!" className="fw-bold fs-9">
          See all
        </Link>
      </div>
      <Lightbox {...lightboxProps} />
      <Row className="g-3">
        {attachments.map((img, index) => (
          <Col key={index} xs={4}>
            <img
              src={img}
              alt=""
              className="w-100 rounded-3 cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SocialPhotos;
