import { PropsWithChildren } from 'react';
import Scrollbars, { ScrollbarProps as ScrollbarsProps } from 'react-custom-scrollbars-2';

interface ScrollbarProps extends ScrollbarsProps {
  autoHide?: boolean;
}

const Scrollbar = ({ children, autoHide = true, ...rest }: PropsWithChildren<ScrollbarProps>) => {
  return (
    <Scrollbars
      renderThumbHorizontal={props => <div {...props} className="bg-gray-800 rounded" />}
      renderTrackVertical={props => <div {...props} className="bg-gray-800 rounded" />}
      autoHide={autoHide}
      autoHeight
      autoHeightMin="100%"
      autoHeightMax="100%"
      style={{ height: 1 }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
