import { AppContext } from 'providers/AppProvider';
import { ChangeEvent, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import defaultLight from 'assets/img/generic/default-light.png';
import defaultDark from 'assets/img/generic/default-dark.png';
import verticalLighter from 'assets/img/generic/vertical-lighter.png';
import verticalDarker from 'assets/img/generic/vertical-darker.png';
import RadioItem from './RadioItem';
import { NavbarAppearanceVariant } from 'config';

const VerticalNavbarAppearance = () => {
  const {
    config: { theme, navbarVerticalAppearance },
    setConfig
  } = useContext(AppContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarVerticalAppearance: value as NavbarAppearanceVariant
    });
  };

  return (
    <div className="setting-panel-item">
      <h5 className="setting-panel-item-title">Vertical Navbar Appearance</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Default"
            name="vertical-navbar-appearance"
            value="default"
            thumb={theme === 'light' ? defaultLight : defaultDark}
            defaultChecked={navbarVerticalAppearance === 'default'}
            handleChange={handleChange}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label={theme === 'light' ? 'Darker' : 'Lighter'}
            name="vertical-navbar-appearance"
            value="darker"
            thumb={theme === 'light' ? verticalDarker : verticalLighter}
            defaultChecked={navbarVerticalAppearance === 'darker'}
            handleChange={handleChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default VerticalNavbarAppearance;
