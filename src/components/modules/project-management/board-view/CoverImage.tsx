import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties, ChangeEvent, useState } from 'react';
import { Button } from 'react-bootstrap';
import generic43 from 'assets/img/generic/43.webp';

const CoverImage = ({ handleClose }: { handleClose: () => void }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <>
      <input type="file" id="projectCoverInput" className="d-none" onChange={handleChange} />
      <label className="position-absolute top-0 start-0" htmlFor="projectCoverInput">
        <span
          className="d-inline-block bg-white dark__text-white rounded-2 py-2 px-3 fs-9 fw-bolder mt-3 ms-3 cursor-pointer"
          style={{ '--phoenix-bg-opacity': 0.64 } as CSSProperties}
        >
          <FontAwesomeIcon icon="image" className="me-1" />
          Change
        </span>
      </label>

      <Button
        variant="circle"
        className="position-absolute end-0 top-0 mt-3 me-3 bg-white"
        style={{ '--phoenix-bg-opacity': 0.64 } as CSSProperties}
        onClick={handleClose}
      >
        <FontAwesomeIcon icon="xmark" />
      </Button>
      <img
        src={image ? URL.createObjectURL(image) : generic43}
        alt="cover"
        className="w-100"
        style={{ minHeight: 150, maxHeight: 280 }}
      />
    </>
  );
};

export default CoverImage;
