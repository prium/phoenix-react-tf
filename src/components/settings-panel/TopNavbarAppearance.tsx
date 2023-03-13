import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import topDefault from 'assets/img/generic/top-default.png';
import topDefaultDarker from 'assets/img/generic/top-default-dark.png';
import navTopLight from 'assets/img/generic/navbar-top-style-light.png';
import navTopLighter from 'assets/img/generic/top-style-lighter.png';
import RadioItem from './RadioItem';
import { NavbarAppearanceVariant } from 'config';
import classNames from 'classnames';

interface TopNavbarAppearanceProps {
  className?: string;
}

const TopNavbarAppearance = ({ className }: TopNavbarAppearanceProps) => {
  const {
    config: { theme, navbarTopAppearance },
    setConfig
  } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarTopAppearance: value as NavbarAppearanceVariant
    });
  };

  return (
    <div className={classNames(className, 'setting-panel-item')}>
      <h5 className="setting-panel-item-title">Horizontal Navbar Appearance</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Default"
            name="top-navbar-appearance"
            value="default"
            thumb={theme === 'light' ? topDefault : topDefaultDarker}
            defaultChecked={navbarTopAppearance === 'default'}
            handleChange={handleChange}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label={theme === 'light' ? 'Darker' : 'Lighter'}
            name="top-navbar-appearance"
            value="darker"
            thumb={theme === 'light' ? navTopLight : navTopLighter}
            defaultChecked={navbarTopAppearance === 'darker'}
            handleChange={handleChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TopNavbarAppearance;
