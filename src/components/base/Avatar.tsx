import classNames from 'classnames';
import React from 'react';

interface Avatar {
  size: string;
  src: string;
  className?: string;
}

const Avatar = ({ size, src, className }: Avatar) => {
  return (
    <div className={classNames(className, `avatar avatar-${size}`)}>
      <img src={src} alt="avatar" className="rounded-circle" />
    </div>
  );
};

export default Avatar;
