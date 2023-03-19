import React, { PropsWithChildren } from 'react';
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
import PhoenixDocProvider, { usePhoenixDocContext } from 'providers/PhoenixDocProvider';

interface PhoenixDocCardProps {
  className?: string;
  noProvider?: boolean;
}

interface PhoenixDocCardHeaderProps {
  title?: string;
  id?: string;
  className?: string;
  description?: string;
  alignItems?: string;
  noPreview?: boolean;
}
interface PhoenixDocCardBodyProps {
  code?: string;
  scope?: { [key: string]: any };
  noInline?: boolean;
  hidePreview?: boolean;
}

const PhoenixDocCard = ({
  children,
  className,
  noProvider
}: PropsWithChildren<PhoenixDocCardProps>) => {
  return (
    <Card className={classNames(className, 'shadow-none border border-300 overflow-hidden')}>
      {noProvider ? children : <PhoenixDocProvider>{children}</PhoenixDocProvider>}
    </Card>
  );
};

const PhoenixDocCardHeader = ({
  title,
  description,
  id,
  noPreview,
  alignItems = 'center',
  children,
  className
}: PropsWithChildren<PhoenixDocCardHeaderProps>) => {
  const { open, setOpen } = usePhoenixDocContext();

  const headerId = id ? id : title && snakeCase(title);

  return (
    <Card.Header
      className={classNames(
        className,
        'p-4 border-bottom border-300 bg-soft hover-actions-trigger',
        {
          'py-5': noPreview
        }
      )}
      id={headerId}
    >
      <Row className={`g-3 justify-content-between align-items-${alignItems}`}>
        <Col xs={12} md>
          {title && (
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
          )}
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
  hidePreview,
  children
}: PropsWithChildren<PhoenixDocCardBodyProps>) => {
  const { open } = usePhoenixDocContext();

  return (
    <Card.Body className="p-0">
      {code && (
        <LiveProvider
          code={code}
          scope={{ ...ReactBootstrap, ...React, ...scope }}
          noInline={noInline}
          transformCode={code => code.replace(/^import.*$/gm, '')}
          language="jsx"
          {...defaultProps}
        >
          {hidePreview ? (
            <LiveEditor />
          ) : (
            <>
              <Collapse in={open}>
                <div>
                  <LiveEditor />
                  <LiveError />
                </div>
              </Collapse>
              <div className="p-4">
                <LivePreview />
              </div>
            </>
          )}
        </LiveProvider>
      )}

      {children && <div className="p-4">{children}</div>}
    </Card.Body>
  );
};

PhoenixDocCard.Header = PhoenixDocCardHeader;
PhoenixDocCard.Body = PhoenixDocCardBody;

export default PhoenixDocCard;
