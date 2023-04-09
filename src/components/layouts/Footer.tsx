import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={classNames(className, 'footer')}>
      <Row className="g-0 justify-content-between align-items-center h-100">
        <Col xs={12} sm="auto" className="text-center">
          <p className="mb-0 mt-2 mt-sm-0 text-900">
            Thank you for creating with {process.env.REACT_APP_TITLE}
            <span className="d-none d-sm-inline-block" />
            <span className="d-none d-sm-inline-block mx-1">|</span>
            <br className="d-sm-none" />
            {new Date().getFullYear()} &copy;{' '}
            <a href="https://themewagon.com" target="_blank" rel="noreferrer">
              Themewagon
            </a>
          </p>
        </Col>
        <Col xs={12} sm="auto" className="text-center">
          <p className="mb-0 text-600">v{process.env.REACT_APP_VERSION}</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
