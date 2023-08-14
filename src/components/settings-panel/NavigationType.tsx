import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import defaultLight from 'assets/img/generic/default-light.png';
import defaultDark from 'assets/img/generic/default-dark.png';
import topDefault from 'assets/img/generic/top-default.png';
import topDefaultDark from 'assets/img/generic/top-default-dark.png';
import navComboLight from 'assets/img/generic/nav-combo-light.png';
import navComboDark from 'assets/img/generic/nav-combo-dark.png';
import dualLight from 'assets/img/generic/dual-light.png';
import dualDark from 'assets/img/generic/dual-dark.png';
import RadioItem from './RadioItem';
import { NavPositionVariant } from 'config';
import WarningMessage from 'components/common/WarningMessage';

const NavigationType = () => {
  const {
    config: { theme, navbarPosition, disableNavigationType },
    setConfig
  } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarPosition: value as NavPositionVariant
    });
  };

  return (
    <div className="setting-panel-item">
      <h5 className="setting-panel-item-title">Navigation Type</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Vertical"
            name="nav-type"
            value="vertical"
            thumb={theme === 'light' ? defaultLight : defaultDark}
            defaultChecked={navbarPosition === 'vertical'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Horizontal"
            name="nav-type"
            value="horizontal"
            thumb={theme === 'light' ? topDefault : topDefaultDark}
            defaultChecked={navbarPosition === 'horizontal'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Combo"
            name="nav-type"
            value="combo"
            thumb={theme === 'light' ? navComboLight : navComboDark}
            defaultChecked={navbarPosition === 'combo'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Dual nav"
            name="nav-type"
            value="dual"
            thumb={theme === 'light' ? dualLight : dualDark}
            defaultChecked={navbarPosition === 'dual'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
      </Row>
      {disableNavigationType && (
        <WarningMessage message="You can't update navigation type in this page" />
      )}
    </div>
  );
};

export default NavigationType;
