import classNames from 'classnames';
import React, { CSSProperties, PropsWithChildren } from 'react';

interface PhoenixOffcanvasProps {
  open: boolean;
  fixed?: boolean;
  onHide?: () => void;
  className?: string;
  backdropClassName?: string;
  style?: CSSProperties;
}

const PhoenixOffcanvas = ({
  children,
  open,
  fixed,
  onHide,
  className,
  backdropClassName,
  style
}: PropsWithChildren<PhoenixOffcanvasProps>) => {
  return (
    <>
      <div
        className={classNames(
          className,
          'phoenix-offcanvas phoenix-offcanvas-end bg-soft',
          {
            show: open,
            'phoenix-offcanvas-fixed': fixed
          }
        )}
        style={style}
      >
        {children}
      </div>
      <div
        className={classNames(backdropClassName, 'phoenix-offcanvas-backdrop')}
        onClick={onHide}
      ></div>
    </>
  );
};

export default PhoenixOffcanvas;
