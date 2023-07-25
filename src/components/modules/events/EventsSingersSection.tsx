import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

interface EventsSingersSection {
  photos: string[];
}

const EventsSingersSection = ({ photos }: EventsSingersSection) => {
  const [attachments] = useState(photos);
  const { lightboxProps, openLightbox } = useLightbox(attachments);
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
        {attachments.map((itam, index) => (
          <Col key={index} xs={index === attachments.length - 1 ? 6 : 3}>
            <img
              src={itam}
              alt=""
              onClick={() => openLightbox(index + 1)}
              className="rounded h-100 w-100 fit-cover cursor-pointer"
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EventsSingersSection;
