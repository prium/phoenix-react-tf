import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import useLightbox from 'hooks/useLightbox';
import DocPagesLayout from 'layouts/DocPagesLayout';
import img11 from 'assets/img/gallery/11.png';
import img12 from 'assets/img/gallery/12.png';
import img13 from 'assets/img/gallery/13.png';
import img9 from 'assets/img/gallery/9.png';
import img10 from 'assets/img/gallery/10.png';
import img24 from 'assets/img/gallery/24.png';
import Lightbox from 'components/base/LightBox';

const galleryCode = `
import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';

function SocialPhotos () {
  const [attachments] = useState([img9, img10, img11, img12, img13]);
  const { lightboxProps, openLightbox } = useLightbox(attachments);
  return (
    <div>
      <Lightbox {...lightboxProps} />
      <Row className="g-2 g-md-3">
        {attachments.map((img, index) => (
          <Col key={img} xs={
            index === 0 ? 6 : index === 1 ? 6 : 4
          }>
            <img
              src={img}
              alt=""
              className="w-100 rounded-3 cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};`;

const simpleImageCode = `
import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';

function SocialPhotos () {
  const { lightboxProps, openLightbox } = useLightbox([img24]);
  return (
    <div>
      <Lightbox {...lightboxProps} />
      <Row className="g-3">
          <Col xs={4}>
            <img
              src={img24}
              alt=""
              className="w-100 rounded-3 cursor-pointer"
              onClick={() => openLightbox(1)}
            />
          </Col>
      </Row>
    </div>
  );
};`;

const LightboxExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Lightbox"
        description={`${process.env.REACT_APP_TITLE}-React uses FsLightbox-react for lightbox. React FsLightbox is a flexible lightbox component for displaying images in a React project.`}
        link={{
          text: 'FsLightbox-react Documentation',
          url: 'https://github.com/banthagroup/fslightbox-react'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Gallery" />
          <PhoenixDocCard.Body
            code={galleryCode}
            scope={{
              useLightbox,
              Lightbox,
              img11,
              img12,
              img9,
              img10,
              img13
            }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Simple Image" />
          <PhoenixDocCard.Body
            code={simpleImageCode}
            scope={{
              useLightbox,
              Lightbox,
              img24
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default LightboxExample;
