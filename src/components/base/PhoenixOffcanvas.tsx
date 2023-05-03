import classNames from 'classnames';
import React, { CSSProperties, PropsWithChildren } from 'react';

interface PhoenixOffcanvasProps {
  open: boolean;
  onHide?: () => void;
  className?: string;
  style?: CSSProperties;
}

const PhoenixOffcanvas = ({
  children,
  open,
  onHide,
  className,
  style
}: PropsWithChildren<PhoenixOffcanvasProps>) => {
  return (
    <>
      <div
        className={classNames(className, 'phoenix-offcanvas bg-soft', {
          show: open
        })}
        style={style}
      >
        {children}
      </div>
      <div className="phoenix-offcanvas-backdrop d-lg-none"></div>
    </>
  );
};

export default PhoenixOffcanvas;
