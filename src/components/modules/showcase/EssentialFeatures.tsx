import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import illustrations31 from 'assets/img/spot-illustrations/31.png';
import illustration11 from 'assets/img/icons/illustrations/11.png';
import illustration12 from 'assets/img/icons/illustrations/12.png';
import illustration13 from 'assets/img/icons/illustrations/13.png';
import illustration14 from 'assets/img/icons/illustrations/14.png';
import illustration15 from 'assets/img/icons/illustrations/15.png';
import illustration16 from 'assets/img/icons/illustrations/16.png';
import illustration17 from 'assets/img/icons/illustrations/17.png';
import illustration18 from 'assets/img/icons/illustrations/18.png';
import illustration19 from 'assets/img/icons/illustrations/19.png';
import illustration21 from 'assets/img/icons/illustrations/21.png';
import illustration22 from 'assets/img/icons/illustrations/22.png';
import illustration23 from 'assets/img/icons/illustrations/23.png';
import illustration24 from 'assets/img/icons/illustrations/24.png';
import illustration25 from 'assets/img/icons/illustrations/25.png';
import illustration26 from 'assets/img/icons/illustrations/26.png';
import classNames from 'classnames';

export const featureItems = [
  {
    id: 11,
    icon: illustration11,
    border: 'border-end-0 border-end-sm',
    title: (
      <>
        Built on{' '}
        <span className="text-bootstrap me-1 fw-bold">Bootstrap 5</span>
      </>
    )
  },
  {
    id: 12,
    icon: illustration12,
    border: 'border-end-0 border-end-sm',
    title: (
      <>
        Styled with <span className="text-css3 ms-1 fw-bold">CSS3</span>
      </>
    )
  },
  {
    id: 13,
    icon: illustration13,
    border: 'border-end-0 border-end-sm border-end-lg-0',
    title: (
      <>
        Coded with <span className="text-html5 me-1 fw-bold">HTML5</span>
      </>
    )
  },
  {
    id: 14,
    icon: illustration14,
    border: 'border-end-0 border-end-sm',
    title: (
      <>
        <span className="text-info fw-bold">Clean </span> design
      </>
    )
  },
  {
    id: 16,
    icon: illustration16,
    border: 'border-end-0 border-end-sm',
    title: (
      <>
        <span className="text-success ms-1 fw-bold">Cross-browser</span> tested
      </>
    )
  },
  {
    id: 15,
    icon: illustration15,
    border: 'border-end-0',
    title: (
      <>
        <span className="text-sass ms-1 fw-bold">SASS</span> Supported
      </>
    )
  },
  {
    id: 17,
    icon: illustration17,
    border: 'border-end',
    title: (
      <>
        <span className="text-gulp me-1 fw-bold">Gulp</span>based workflow
      </>
    )
  },
  {
    id: 19,
    icon: illustration19,
    border: 'border-end',
    title: (
      <>
        Interactive <span className="text-warning fw-bold">components</span>
      </>
    )
  },
  {
    id: 18,
    icon: illustration18,
    border: 'border-end-0 border-end-sm border-end-lg-0',
    title: (
      <>
        Collection of <span className="text-info fw-bold">pages</span>
      </>
    )
  },
  {
    id: 22,
    icon: illustration22,
    border: 'border-end',
    title: (
      <>
        <span className="text-warning ms-1 fw-bold">Chart JS &amp;</span> ,
        ECharts
      </>
    )
  },
  {
    id: 21,
    icon: illustration21,
    border: 'border-end',
    title: (
      <>
        <span className="text-info ms-1 fw-bold">Dark/Light</span> Layouts
      </>
    )
  },
  {
    id: 23,
    icon: illustration23,
    border: 'border-end-0',
    title: (
      <>
        <span className="text-success ms-1 fw-bold">FontAwesome 6</span> icons
      </>
    )
  },
  {
    id: 24,
    icon: illustration24,
    border: 'border-end',
    title: (
      <>
        Opinionated <span className="text-success fw-bold">code formatter</span>
      </>
    )
  },
  {
    id: 25,
    icon: illustration25,
    border: 'border-end',
    title: (
      <>
        <span className="text-w3c me-1 fw-bold">W3C</span>validated
      </>
    )
  },
  {
    id: 26,
    icon: illustration26,
    border: 'border-end-0',
    title: (
      <>
        10+ <span className="text-warning fw-bold">layouts</span>
      </>
    )
  }
];

const EssentialFeatures = () => {
  return (
    <section className="bg-100 pt-14">
      <Container fluid="lg">
        <Row className="justify-content-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="text-1000 fw-normal mb-13 lh-sm">
              Packed with{' '}
              <span className="text-primary ms-2 position-relative fw-bolder d-inline-flex">
                essential features
                <img
                  className="text-illustration-underline"
                  src={illustrations31}
                  alt=""
                />
              </span>
            </h2>
            <Row>
              {featureItems.map(item => (
                <Col xs={12} sm={4} className="px-0" key={item.id}>
                  <div className={classNames('mb-10 text-center', item.border)}>
                    <img src={item.icon} alt="" className="img-fluid mb-4" />
                    <p>{item.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EssentialFeatures;
