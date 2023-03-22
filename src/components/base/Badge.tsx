import classNames from 'classnames';
import { PropsWithChildren, ReactElement } from 'react';
import { Badge as BsBadge, BadgeProps as BsBadgeProps } from 'react-bootstrap';

type Variant = 'phoenix' | 'default';
type Bg = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface BadgeProps extends BsBadgeProps {
  variant?: Variant;
  bg: Bg;
  className?: string;
  icon?: ReactElement;
  iconPosition?: 'start' | 'end';
}

const Badge = ({
  children,
  bg,
  icon,
  className,
  variant = 'default',
  iconPosition = 'start',
  ...rest
}: PropsWithChildren<BadgeProps>) => {
  return (
    <BsBadge
      className={classNames(className, {
        [`badge-phoenix badge-phoenix-${bg}`]: variant === 'phoenix'
      })}
      bg={variant === 'phoenix' ? '' : bg}
      {...rest}
    >
      {variant === 'phoenix' ? (
        <>
          {icon ? (
            <>
              {icon && iconPosition === 'start' && icon}
              <span className="badge-label">{children}</span>
              {icon && iconPosition === 'end' && icon}
            </>
          ) : (
            children
          )}
        </>
      ) : (
        children
      )}
    </BsBadge>
  );
};

export default Badge;
