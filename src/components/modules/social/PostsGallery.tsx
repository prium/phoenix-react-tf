import Lightbox from 'components/base/LightBox';
import { PostsData } from 'data/social/postsData';
import useLightbox from 'hooks/useLightbox';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const PostsGallery = ({ images }: { images: PostsData['images'] }) => {
  const imageArray = images?.map(image => image.src);
  const [attachments] = useState(imageArray || []);
  const { lightboxProps, openLightbox } = useLightbox(attachments);
  return (
    <Row className="g-1 mb-5">
      <Lightbox {...lightboxProps} />
      {images?.map((image, index) => (
        <Col key={index} xs={image.cols}>
          <img
            src={image.src}
            alt=""
            className="rounded h-100 w-100 cursor-pointer"
            onClick={() => openLightbox(index + 1)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PostsGallery;
