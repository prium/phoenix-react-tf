import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import IconCard from 'components/cards/IconCard';
import { useCopyMessageToast } from 'components/common/CopyMessageToastContainer';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { faSolidIcons } from 'data/icons/faSolidIcons';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Card, Col, Row } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRegularIcons } from 'data/icons/faRegularIcons';
import { faBrandIcons } from 'data/icons/faBrandIcons';
const individualAddIconCode = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />`;

const exampleCode = `
<div>
  <div>
    <FontAwesomeIcon icon={faHome} className="text-success fs-5 me-3" />
    <FontAwesomeIcon icon={faHome} className="text-success fs-6 me-3" />
    <FontAwesomeIcon icon={faHome} className="text-success fs-7" />
  </div>
  <div className='mt-3'>
    <FontAwesomeIcon icon={['fab', 'facebook']} className="text-facebook fs-5 me-3" />
    <FontAwesomeIcon icon={['fab', 'twitter']} className="text-twitter fs-5 me-3"/>
    <FontAwesomeIcon icon={['fab', 'youtube']} className="text-youtube fs-5 me-3"/>
  </div>
</div>`;

const FontAwesome = () => {
  const { setToastMessage } = useCopyMessageToast();
  return (
    <div className="mb-9">
      <DocPageHeader
        title="React Fontawesome"
        description="Font Awesome 6 React component using SVG with JS"
        link={{
          text: 'React Fontawesome Documentation',
          url: `https://fontawesome.com/v5/docs/web/use-with/react`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-3">
              you can explicitly import icons into each component for individual
              use.
            </p>
            <PhoenixLiveEditor code={individualAddIconCode} />
            <p className="mb-0 mt-3">
              For better understanding you can visit{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fontawesome.com/v5/docs/web/use-with/react#using-icons-via-individual-use"
              >
                fontawesome usage
              </a>
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ FontAwesomeIcon, faHome }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid Icons" />
          <Card.Body>
            <p className="mb-2">
              Import solid icons from{' '}
              <code>@fortawesome/free-solid-svg-icons.</code>
            </p>
            <PhoenixLiveEditor
              code={`import {faHome} from @fortawesome/free-solid-svg-icons'`}
            />
            <Row className="mt-3">
              {Object.keys(faSolidIcons).map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard
                    icon={faSolidIcons[icon]}
                    name={icon}
                    onCopy={message => setToastMessage(message)}
                  />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Regular Icons" />
          <Card.Body>
            <p className="mb-2">
              Import regular icons from{' '}
              <code>@fortawesome/free-regular-svg-icons.</code>
            </p>
            <PhoenixLiveEditor
              code={`import {faHome} from @fortawesome/free-regular-svg-icons'`}
            />
            <Row className="mt-3">
              {Object.keys(faRegularIcons).map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard
                    icon={faRegularIcons[icon]}
                    name={icon}
                    onCopy={message => setToastMessage(message)}
                  />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Brand Icons" />
          <Card.Body>
            <p className="mb-2">
              Import brand icons from{' '}
              <code>@fortawesome/free-brands-svg-icons.</code>
            </p>
            <PhoenixLiveEditor
              code={`import {faHome} from @fortawesome/free-brands-svg-icons'`}
            />
            <Row className="mt-3">
              {Object.keys(faBrandIcons).map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard
                    icon={faBrandIcons[icon]}
                    name={icon}
                    onCopy={message => setToastMessage(message)}
                  />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FontAwesome;
