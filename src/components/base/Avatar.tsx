import classNames from 'classnames';

interface AvatarProps {
  size: string;
  src: string;
  className?: string;
}

const Avatar = ({ size, src, className }: AvatarProps) => {
  return (
    <div className={classNames(className, `avatar avatar-${size}`)}>
      <img src={src} alt="avatar" className="rounded-circle" />
    </div>
  );
};

export default Avatar;
