import React, { ChangeEvent, useState } from 'react';
import Avatar, { Size, Status } from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

interface AvatarUploadProps {
  size: Size;
  src: string;
  className?: string;
  status?: Status;
  onChange?: () => void;
}

const SocialAvatarUpload = ({
  size,
  src,
  className,
  status,
  onChange
}: AvatarUploadProps) => {
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
        className={classNames(className, 'hoverbox')}
        style={{
          width: size === '5xl' ? '150px' : '96px',
          height: size === '5xl' ? '150px' : '96px'
        }}
      >
        <div className="hoverbox-content rounded-circle d-flex flex-center z-index-1">
          <FontAwesomeIcon
            icon="camera"
            className={classNames('text-300 light fs-3', {
              'fs-1': size === '5xl'
            })}
          />
        </div>
        <div className="position-relative bg-400 rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
          <Avatar
            size={size}
            src={image ? URL.createObjectURL(image) : src}
            status={status}
            imageClassName="rounded-circle bg-white img-thumbnail shadow-sm"
          />
          <label
            htmlFor="avatarFile"
            className="w-100 h-100 position-absolute z-index-1 cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default SocialAvatarUpload;
