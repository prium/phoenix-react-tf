import { Col, Container, Row } from 'react-bootstrap';
import illustration31 from 'assets/img/spot-illustrations/31.png';
import { necessaryPages } from 'data/showcase';
import { Link } from 'react-router';
import classNames from 'classnames';

const NecessaryPages = () => {
  return (
    <section className="pb-13">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="mb-6 text-body-highlight fw-normal">
              Smartly designed
              <span className="text-primary position-relative fw-bolder ms-2">
                necessary pages
                <img
                  src={illustration31}
                  alt=""
                  className="w-100 text-illustration-underline"
                />
              </span>
            </h2>
          </Col>
        </Row>
        <Row>
          {necessaryPages.map((page, index) => (
            <Col
              key={page.pageName}
              lg={6}
              className="position-relative page-container"
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
                      src={page.thumb}
                      alt=""
                      className="img-fluid page-thumb rounded z-2"
                    />
                  </div>
                  <Row className="flex-between-center py-4">
                    <Col xs="auto">
                      <h5 className="text-body-highlight page-title">{page.pageName}</h5>
                    </Col>
                    <Col xs="auto">
                      <div className='d-flex gap-2'>
                        <Link
                          className="btn btn-secondary btn-sm"
                          target="_blank"
                          to={page.htmlLink || '#!'}
                          style={{ minWidth: '5rem' }}
                        >
                          HTML
                        </Link>
                        <Link
                          className="btn btn-secondary btn-sm"
                          to={page.pageLink || '#!'}
                          style={{ minWidth: '5rem' }}
                        >
                          React
                        </Link>
                      </div>
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

export default NecessaryPages;
