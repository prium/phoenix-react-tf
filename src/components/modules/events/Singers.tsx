import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/img/gallery/19.jpg';
import img2 from '../../../assets/img/gallery/20.jpg';
import img3 from '../../../assets/img/gallery/21.jpg';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

const Singers = () => {
  const { lightboxProps, openLightbox } = useLightbox([img1, img2, img3]);
  return (
    <>
      <h4 className="mb-3 fw-bold text-1000 fs-xxl-6">Singers:</h4>
      <p>
        To join the festival, you’ll need to register through
        <Link to="mailto:register@event.com"> register@event.com </Link>
        After confirming the payment, you’ll be provided with a unique ID number
        that you’ll need to show before the authority to get the tickets.
      </p>
      <p>
        The ID number will be unique to all members, so it’s requested that you
        don’t share it with anyone. Any damage regarding a misused ID will not
        be ours to compensate or refund.Enjoy!
      </p>
      <Lightbox {...lightboxProps} />
      <Row className="g-1 g-sm-2 mb-7 mb-xxl-8">
        <Col xs={3}>
          <img
            src={img1}
            alt=""
            onClick={() => openLightbox(1)}
            className="rounded h-100 w-100 fit-cover cursor-pointer"
          />
        </Col>
        <Col xs={3}>
          <img
            src={img2}
            alt=""
            onClick={() => openLightbox(2)}
            className="rounded h-100 w-100 fit-cover cursor-pointer"
          />
        </Col>
        <Col xs={6}>
          <img
            src={img3}
            alt=""
            onClick={() => openLightbox(3)}
            className="rounded h-100 w-100 fit-cover cursor-pointer"
          />
        </Col>
      </Row>
    </>
  );
};

export default Singers;
