import Button, { ButtonProps } from 'components/base/Button';
import { useAppContext } from 'providers/AppProvider';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

interface ThemeTogglerProps extends ButtonProps {
  slim?: boolean;
}

const ThemeToggler = ({ slim, ...rest }: ThemeTogglerProps) => {
  const {
    config: { theme },
    toggleTheme
  } = useAppContext();
  return (
    <Button variant="" className="p-0" onClick={() => toggleTheme()} {...rest}>
      <div
        className={classNames('theme-control-toggle', {
          'theme-control-toggle-slim pe-2': slim
        })}
      >
        <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip id="ThemeColor">
              {slim
                ? 'Switch theme'
                : theme === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme'}
            </Tooltip>
          }
        >
          <div className="theme-control-toggle-label">
            <FeatherIcon
              className={classNames({
                'me-1': slim
              })}
              icon={theme === 'dark' ? 'moon' : 'sun'}
              size={slim ? 10 : 16}
            />
            {slim && <span className="fs-9 fw-bold">{theme === 'dark' ? 'Dark' : 'Light'}</span>}
          </div>
        </OverlayTrigger>
      </div>
    </Button>
  );
};

export default ThemeToggler;
