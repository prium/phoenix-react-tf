import React, {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';
import { Card, Col, Nav, Row, Collapse } from 'react-bootstrap';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import * as ReactBootstrap from 'react-bootstrap';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import classNames from 'classnames';
import { snakeCase } from 'helpers/utils';
import { Link } from 'react-router-dom';
import { defaultProps } from 'prism-react-renderer';

interface CollapseContextInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface PhoenixDocCardProps {
  className?: string;
}

interface PhoenixDocCardHeaderProps {
  title: string;
  id?: string;
  description?: string;
  noPreview?: boolean;
}
interface PhoenixDocCardBodyProps {
  code?: string;
  // scope?: ReactElement;
  scope?: { [key: string]: any };
  noInline?: boolean;
}

export const CollapseContext = createContext({} as CollapseContextInterface);

const PhoenixDocCard = ({ children, className }: PropsWithChildren<PhoenixDocCardProps>) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className={classNames(className, 'shadow-none border border-300')}>
      <CollapseContext.Provider value={{ open, setOpen }}>{children}</CollapseContext.Provider>
    </Card>
  );
};

const PhoenixDocCardHeader = ({
  title,
  description,
  id,
  noPreview,
  children
}: PropsWithChildren<PhoenixDocCardHeaderProps>) => {
  const { open, setOpen } = useContext(CollapseContext);

  const headerId = id ? id : snakeCase(title);

  return (
    <Card.Header
      className="p-4 border-bottom border-300 bg-soft hover-actions-trigger"
      id={headerId}
    >
      <Row className="g-3 justify-content-between align-items-center">
        <Col xs={12} md>
          <h4
            className={classNames('text-900', {
              'mb-0': !children && !description,
              'mb-2': children || description
            })}
          >
            {title}
            <Link to={`#${headerId}`} className="opacity-0 hover-show ps-2">
              #
            </Link>
          </h4>
          {description && <p className="mb-0 text-800">{description}</p>}
          {children}
        </Col>
        {!noPreview && (
          <Col md="auto">
            <Nav className="nav-underline justify-content-end doc-tab-nav align-items-center">
              <Button variant="link" size="sm" className="px-2 text-900 copy-code-btn me-2">
                <FontAwesomeIcon icon="copy" className="me-1" />
                Copy Code
              </Button>
              <Button
                variant="phoenix-primary"
                className="text-nowrap"
                size="sm"
                style={{ width: 135 }}
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <>
                    <FeatherIcon icon="eye" className="me-2" size={16} />
                    Preview
                  </>
                ) : (
                  <>
                    <FeatherIcon icon="code" className="me-2" size={16} />
                    View Code
                  </>
                )}
              </Button>
            </Nav>
          </Col>
        )}
      </Row>
    </Card.Header>
  );
};

const PhoenixDocCardBody = ({
  code,
  scope,
  noInline,
  children
}: PropsWithChildren<PhoenixDocCardBodyProps>) => {
  const { open } = useContext(CollapseContext);

  return (
    <Card.Body className="p-0">
      <LiveProvider
        code={code}
        scope={{ ...ReactBootstrap, ...React, ...scope }}
        noInline={noInline}
        transformCode={code => code.replace(/^import.*$/gm, '')}
        language="jsx"
        {...defaultProps}
      >
        <Collapse in={open}>
          <div>
            <LiveEditor />
            <LiveError />
          </div>
        </Collapse>
        <div className="p-4">
          <LivePreview />
        </div>
      </LiveProvider>
    </Card.Body>
  );
};

PhoenixDocCard.Header = PhoenixDocCardHeader;
PhoenixDocCard.Body = PhoenixDocCardBody;

export default PhoenixDocCard;
