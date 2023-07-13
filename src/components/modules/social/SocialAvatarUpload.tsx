import React, { ChangeEvent, useState } from 'react';
import Avatar, { Size } from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AvatarUploadProps {
  size: Size;
  src: string;
  onChange?: () => void;
}

const SocialAvatarUpload = ({ size, src, onChange }: AvatarUploadProps) => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      if (onChange) {
        onChange();
      }
    }
  };
  return (
    <div className="d-inline-block">
      <input
        className="d-none"
        id="avatarFile"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <div
        className="hoverbox feed-profile"
        style={{ width: '150px', height: '150px' }}
      >
        <div className="hoverbox-content rounded-circle d-flex flex-center z-index-1">
          <FontAwesomeIcon icon="camera" className="fs-1 text-300 light" />
        </div>
        <div className="position-relative bg-400 rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
          <Avatar
            size={size}
            src={image ? URL.createObjectURL(image) : src}
            imageClassName="rounded-circle bg-white img-thumbnail shadow-sm"
          />
          <label
            htmlFor="avatarFile"
            className="w-100 h-100 position-absolute z-index-1"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default SocialAvatarUpload;
