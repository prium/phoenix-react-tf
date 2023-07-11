import FsLightbox from 'fslightbox-react';

const Lightbox = ({
  toggler,
  slide = 1,
  sources
}: {
  toggler: boolean;
  slide?: number;
  sources: string[];
}) => {
  return (
    <FsLightbox
      toggler={toggler}
      sources={sources}
      slide={slide}
      type="image"
    />
  );
};

export default Lightbox;
