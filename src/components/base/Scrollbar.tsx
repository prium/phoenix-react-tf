import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface ScrollbarProps {
  autoHide?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Scrollbar = ({
  children,
  autoHide = true,
  className,
  style,
  ...rest
}: PropsWithChildren<ScrollbarProps>) => {
  return (
    <SimpleBar
      className={classNames('custom-scrollbar', className)}
      autoHide={autoHide}
      style={style}
      {...rest}
    >
      {children}
    </SimpleBar>
  );
};

export default Scrollbar;
