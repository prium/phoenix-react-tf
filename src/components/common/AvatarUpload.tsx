import React, { CSSProperties, ChangeEvent, useState } from 'react';
import Avatar, { Size } from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AvatarUploadProps {
  size: Size;
  src: string;
  onChange?: () => void;
}

const AvatarUpload = ({ size, src, onChange }: AvatarUploadProps) => {
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
      <label className="cursor-pointer hover-actions-trigger d-flex" htmlFor="avatarFile">
        <Avatar size={size} src={image ? URL.createObjectURL(image) : src} />
        <div
          className="h-100 w-100 bg-black position-absolute top-0 rounded-circle justify-content-center align-items-center hover-actions"
          style={{ '--phoenix-bg-opacity': 0.56 } as CSSProperties}
        >
          <FontAwesomeIcon icon="camera" className="text-300 w-30 h-30" />
        </div>
      </label>
    </div>
  );
};

export default AvatarUpload;
