import classNames from 'classnames';
import Button from 'components/base/Button';
import { PropsWithChildren } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ToggleViewButton = ({
  active,
  tooltip,
  children
}: PropsWithChildren<{
  active?: boolean;
  tooltip: string;
}>) => {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{tooltip}</Tooltip>}>
      <div>
        <Button
          variant="phoenix-primary"
          className={classNames('px-3', {
            'text-900 border-0': active
          })}
        >
          {children}
        </Button>
      </div>
    </OverlayTrigger>
  );
};

export default ToggleViewButton;
