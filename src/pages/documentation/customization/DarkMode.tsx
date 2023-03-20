// @ts-nocheck

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'components/layouts/DocPagesLayout';
import { useAppContext } from 'providers/AppProvider';
import { Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const darkModeExampleCode = `function DarkModeExample(){
  const {
    config: { isDark },
    setConfig
  } = React.useContext(AppContext); // import AppContext from 'src/context/Context.js'
  return (
    <Row>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Checkbox </h5>
        <Form.Check
          type="checkbox"
          id="themeToggleCheckBox"
          label="Dark mode"
          onChange={e => setConfig('isDark', e.target.checked)}
          checked={isDark}
        />
      </Col>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Switch Input</h5>
        <Form.Check
          type="switch"
          id="themeToggleSwitch"
          label="Dark mode"
          onChange={e => setConfig('isDark', e.target.checked)}
          checked={isDark}
        />
      </Col>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Radio Button</h5>
        <Form.Group>
          <Form.Check
            inline
            type="radio"
            id="lightRadioButton"
            label="Light"
            name="themeToggleRadio"
            checked={!isDark}
            onChange={() => setConfig('isDark', false)}
          />
          <Form.Check
            inline
            type="radio"
            id="darkRadioButton"
            label="Dark"
            name="themeToggleRadio"
            checked={isDark}
            onChange={() => setConfig('isDark', true)}
          />
        </Form.Group>
      </Col>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Custom Icon</h5>
        <div className="px-0 theme-control-toggle" onClick={() => setConfig('isDark', !isDark)}>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="hi">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</Tooltip>
            }
          >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                transform="shrink-7"
                className="fs-4"
              />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
    </Row>
  );
};`;

const DarkMode = () => {
  return (
    <div>
      <DocPageHeader title="Dark Mode">
        <p className="lead text-700">
          It’s effortless to switch Dark Mode in {process.env.REACT_APP_TITLE}-React. You can enable
          Dark Mode by default or create a Dark/Light switch if you want. To set the default mode
          "Dark", please see the
          <Link to="/documentation/customization/configuration"> configuration page</Link>
        </p>
      </DocPageHeader>
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Toggle Dark Mode"
            description={`Toggling dark mode is very easy in ${process.env.REACT_APP_TITLE}-React. You can toggle dark or light mode by using checkbox, radio input, switch input and custom icon component.`}
          />
          {/* <PhoenixDocCard.Body code={exampleCode} /> */}

          <DarkModeExample />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default DarkMode;

const DarkModeExample = () => {
  const {
    config: { theme },
    setConfig
  } = useAppContext(); // import AppContext from 'src/context/Context.js'

  return (
    <Row>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Checkbox </h5>
        <Form.Check
          type="checkbox"
          id="themeToggleCheckBox"
          label="Dark mode"
          onChange={e => setConfig({ theme: e.target.checked ? 'dark' : 'light' })}
          checked={theme === 'dark'}
        />
      </Col>
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Switch Input</h5>
        <Form.Check
          type="switch"
          id="themeToggleSwitch"
          label="Dark mode"
          onChange={e => setConfig({ theme: e.target.checked ? 'dark' : 'light' })}
          checked={theme === 'dark'}
        />
      </Col>

      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Radio Button</h5>
        <Form.Group>
          <Form.Check
            inline
            type="radio"
            id="lightRadioButton"
            label="Light"
            name="themeToggleRadio"
            checked={theme === 'light'}
            onChange={() => setConfig({ theme: 'light' })}
          />
          <Form.Check
            inline
            type="radio"
            id="darkRadioButton"
            label="Dark"
            name="themeToggleRadio"
            checked={theme === 'dark'}
            onChange={() => setConfig({ theme: 'dark' })}
          />
        </Form.Group>
      </Col>
      {/*
      <Col sm={6} lg={3}>
        <h5 className="fs-0 mb-2">Custom Icon</h5>
        <div className="px-0 theme-control-toggle" onClick={() => setConfig('isDark', !isDark)}>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="hi">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</Tooltip>
            }
          >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                transform="shrink-7"
                className="fs-4"
              />
            </div>
          </OverlayTrigger>
        </div>
      </Col> */}
    </Row>
  );
};
