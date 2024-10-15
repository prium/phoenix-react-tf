import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageAttachmentPreview = ({
  image,
  handleClose
}: {
  image: string;
  handleClose: () => void;
}) => {
  return (
    <div
      className="image-attachment-preview "
      style={{ height: 140, width: 200 }}
    >
      <img src={image} className="w-100 h-100 object-fit-cover" alt="" />
      <button className="btn close-btn" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default ImageAttachmentPreview;
