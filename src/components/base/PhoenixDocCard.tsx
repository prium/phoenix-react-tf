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

interface CollapseContextInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CollapseContext = createContext({} as CollapseContextInterface);

const PhoenixDocCard = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="shadow-none border border-300">
      <CollapseContext.Provider value={{ open, setOpen }}>{children}</CollapseContext.Provider>
    </Card>
  );
};

const PhoenixDocCardHeader = ({ title, description }: { title: string; description: string }) => {
  const { open, setOpen } = useContext(CollapseContext);
  return (
    <Card.Header className="p-4 border-bottom border-300 bg-soft">
      <Row className="g-3 justify-content-between">
        <Col xs={12} md>
          <h4 className="text-900 mb-0">{title}</h4>
          {description && <p className="mb-0 mt-2 text-800">{description}</p>}
        </Col>
        <Col md="auto">
          <Nav className="nav-underline justify-content-end doc-tab-nav align-items-center">
            <Button variant="link" className="px-2 text-900 copy-code-btn">
              <FontAwesomeIcon icon="copy" className="me-1" />
              Copy Code
            </Button>
            <Button variant="phoenix-primary" className="" onClick={() => setOpen(!open)}>
              <FeatherIcon icon="code" className="me-2" />
              View Code
            </Button>
          </Nav>
        </Col>
      </Row>
    </Card.Header>
  );
};

const PhoenixDocCardBody = ({
  code,
  scope,
  noInline
}: {
  code: string;
  scope?: ReactElement;
  noInline?: boolean;
}) => {
  const { open, setOpen } = useContext(CollapseContext);
  console.log({ open });

  return (
    <Card.Body className="p-0">
      <Collapse in={false} dimension="width">
        {/* <>
            <LiveEditor />
            <LiveError />
          </> */}
        <p>jsadhjfsdjh</p>
      </Collapse>
      <LiveProvider
        code={code}
        scope={{ ...ReactBootstrap, ...React, ...scope }}
        noInline={noInline}
      >
        <Collapse in={false} dimension="width">
          {/* <>
            <LiveEditor />
            <LiveError />
          </> */}
          <p>jsadhjfsdjh</p>
        </Collapse>

        <LivePreview />
      </LiveProvider>
    </Card.Body>
  );
};

PhoenixDocCard.Header = PhoenixDocCardHeader;
PhoenixDocCard.Body = PhoenixDocCardBody;

export default PhoenixDocCard;
