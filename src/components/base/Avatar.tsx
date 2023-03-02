import classNames from 'classnames';
import avatar from 'assets/img/team/40x40/avatar.webp';
import { PropsWithChildren } from 'react';

type Size = '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'l' | 'm' | 's';
type Variant = 'image' | 'name' | 'emoji';
type Rounded = 'circle' | 'square' | 'soft';
type Status = 'online' | 'offline' | 'away' | 'do-not-disturb';
interface AvatarProps {
  size: Size;
  src?: string;
  variant?: Variant;
  rounded?: Rounded;
  status?: Status;
  placeholder?: boolean;
  className?: string;
}

const Avatar = ({
  size,
  src,
  variant = 'image',
  rounded = 'circle',
  status,
  className,
  placeholder,
  children
}: PropsWithChildren<AvatarProps>) => {
  return (
    <div
      className={classNames(className, `avatar avatar-${size}`, {
        [`status-${status}`]: status
      })}
    >
      {variant === 'image' && (
        <img
          src={src ? src : avatar}
          alt="avatar"
          className={classNames({
            'avatar-placeholder': placeholder,
            'rounded-circle': rounded === 'circle',
            'rounded-soft': rounded === 'soft'
          })}
        />
      )}

      {variant === 'name' && (
        <div
          className={classNames('avatar-name', {
            'rounded-circle': rounded === 'circle',
            'rounded-soft': rounded === 'soft'
          })}
        >
          <span>{children}</span>
        </div>
      )}
      {variant === 'emoji' && (
        <div
          className={classNames('avatar-emoji', {
            'rounded-circle': rounded === 'circle',
            'rounded-soft': rounded === 'soft'
          })}
        >
          <span role="img" aria-label="Emoji">
            {children}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
