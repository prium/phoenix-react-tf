import classNames from 'classnames';
import { demos } from 'data/showcase';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const Demos = () => {
  return (
    <section className="pt-0">
      <Container fluid>
        <Row>
          {demos.map((demo, index) => (
            <Col
              key={demo.variantName}
              lg={6}
              className="position-relative variant-container"
            >
              <div
                className={classNames(
                  'd-flex px-4 pt-6 justify-content-center',
                  {
                    'justify-content-lg-end': (index + 1) % 2 !== 0,
                    'justify-content-lg-start': (index + 1) % 2 === 0
                  }
                )}
              >
                <div className="text-center">
                  <div className="img-container w-100">
                    <img
                      src={demo.sideThumb}
                      alt={demo.variantName}
                      className="side-panel-thumb h-100 w-100 rounded"
                    />
                    <div className="layout-thumb">
                      <img
                        src={demo.mainThumb}
                        alt={demo.variantName}
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <Row className="g-0 flex-between-center py-4">
                    <Col xs="auto">
                      <h5 className="text-body-highlight">
                        {demo.variantName}
                      </h5>
                    </Col>
                    <Col xs="auto">
                      <Link
                        className="btn btn-secondary me-2 btn-sm"
                        target="_blank"
                        to={demo.htmlLink}
                        style={{ minWidth: '5rem' }}
                      >
                        HTML
                      </Link>
                      <Link
                        className="btn btn-secondary btn-sm"
                        to={demo.link}
                        style={{ minWidth: '5rem' }}
                      >
                        React
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Demos;
