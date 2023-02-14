import classNames from 'classnames';
import avatar from 'assets/img/team/40x40/avatar.webp';
interface AvatarProps {
  size: string;
  src?: string;
  placeholder?: boolean;
  className?: string;
}

const Avatar = ({ size, src, className, placeholder }: AvatarProps) => {
  return (
    <div className={classNames(className, `avatar avatar-${size}`)}>
      <img
        src={src ? src : avatar}
        alt="avatar"
        className={classNames('rounded-circle', {
          'avatar-placeholder': placeholder
        })}
      />
    </div>
  );
};

export default Avatar;
