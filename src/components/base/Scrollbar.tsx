import { PropsWithChildren } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

const Scrollbar = ({
  children,
  autoHide = true,
  ...rest
}: PropsWithChildren<{ autoHide?: boolean }>) => {
  return (
    <Scrollbars
      renderThumbHorizontal={props => <div {...props} className="bg-gray-800 rounded" />}
      renderTrackVertical={props => <div {...props} className="bg-gray-800 rounded" />}
      autoHide={autoHide}
      // autoHeight
      // autoHeightMin="100%"
      // style={{ height: 1 }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
