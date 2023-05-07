import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import topDefault from 'assets/img/generic/top-default.png';
import topDefaultDark from 'assets/img/generic/top-default-dark.png';
import topSlim from 'assets/img/generic/top-slim.png';
import topSlimDark from 'assets/img/generic/top-slim-dark.png';
import RadioItem from './RadioItem';
import { NavTopShapeVariant } from 'config';

const HorizontalNavbarShape = () => {
  const {
    config: { theme, navbarTopShape },
    setConfig
  } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarTopShape: value as NavTopShapeVariant
    });
  };

  return (
    <div className="setting-panel-item">
      <h5 className="setting-panel-item-title">Horizontal Navbar Shape</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Default"
            name="top-nav-shape"
            value="default"
            thumb={theme === 'light' ? topDefault : topDefaultDark}
            defaultChecked={navbarTopShape === 'default'}
            handleChange={handleChange}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Slim"
            name="top-nav-shape"
            value="slim"
            thumb={theme === 'light' ? topSlim : topSlimDark}
            defaultChecked={navbarTopShape === 'slim'}
            handleChange={handleChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HorizontalNavbarShape;
