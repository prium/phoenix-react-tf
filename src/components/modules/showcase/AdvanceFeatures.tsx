import React, { useLayoutEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import illustrations31 from 'assets/img/spot-illustrations/31.png';
import section1 from 'assets/img/sections/1.webp';
import section2 from 'assets/img/sections/2.webp';
import section3 from 'assets/img/sections/3.webp';
import section4 from 'assets/img/sections/4.webp';
import section5 from 'assets/img/sections/5.webp';
import section6 from 'assets/img/sections/6.webp';
import section7 from 'assets/img/sections/7.webp';
import section8 from 'assets/img/sections/8.webp';
import section9 from 'assets/img/sections/9.webp';
import section10 from 'assets/img/sections/10.webp';
import section11 from 'assets/img/sections/11.webp';
import section12 from 'assets/img/sections/12.webp';
import section13 from 'assets/img/sections/13.webp';
import section14 from 'assets/img/sections/14.webp';
import section15 from 'assets/img/sections/15.webp';
import section16 from 'assets/img/sections/16.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdvanceFeatures = () => {
  const gsapRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(self => {
      if (self.selector) {
        const boxes = self.selector('img');

        boxes.forEach((box: HTMLDivElement) => {
          const y = Number(box.getAttribute('data-gsap')) || 0;

          gsap.to(box, {
            y,
            ease: 'none',
            scrollTrigger: {
              trigger: '.gsap',
              scrub: true,
              start: '+=450 bottom',
              toggleActions: 'play none none reverse'
            }
          });
        });
      }
    }, gsapRef); //
    return () => ctx.revert();
  }, []);

  return (
    <section className="pb-0 overflow-hidden gsap">
      <Container fluid="lg">
        <Row className="justify-content-center mb-11">
          <Col xs={12} xl={7} className="text-center">
            <h2 className="text-1000 fw-normal lh-sm">
              Beautiful blending of <br />
              card and cardless designs of{' '}
              <span className="text-primary position-relative fw-bolder d-inline-flex ms-2">
                advanced forms
                <img
                  src={illustrations31}
                  alt=""
                  className="text-illustration-underline"
                />
              </span>
            </h2>
          </Col>
        </Row>

        <div ref={gsapRef}>
          <Row
            className="g-2 showcase-gallery gsap mx-auto"
            style={{ width: '1545px' }}
          >
            <Col xs={3} className="align-self-end mb-2">
              <Row className="g-2">
                <Col xs={12}>
                  <img
                    className="w-100 z-index-3 layer-4"
                    data-gsap="-480"
                    src={section1}
                    alt=""
                    style={{ maxWidth: '375px' }}
                  />
                </Col>
                <Col xs={6}>
                  <img
                    className="w-100 z-index-5 layer-6"
                    data-gsap="-600"
                    src={section2}
                    alt=""
                    style={{ maxWidth: '183px' }}
                  />
                </Col>
                <Col xs={6}>
                  <img
                    className="w-100 z-index-2 layer-3"
                    data-gsap="-420"
                    src={section3}
                    alt=""
                    style={{ maxWidth: '183px' }}
                  />
                </Col>
                <Col xs={12} className="text-end">
                  <img
                    className="w-100 z-index-3 layer-4"
                    data-gsap="-480"
                    src={section4}
                    alt=""
                    style={{ maxWidth: '234px' }}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={9}>
              <Row className="g-2 align-items-end mb-2">
                <Col xs="auto">
                  <img
                    className="z-index-4 layer-5"
                    data-gsap="-540"
                    src={section5}
                    alt=""
                    style={{ maxWidth: '454px' }}
                  />
                </Col>
                <Col xs="auto">
                  <img
                    className="z-index-2 layer-3"
                    data-gsap="-420"
                    src={section8}
                    alt=""
                    style={{ maxWidth: '303px' }}
                  />
                </Col>
                <Col xs="auto">
                  <img
                    className="z-index-4 layer-5"
                    data-gsap="-540"
                    src={section12}
                    alt=""
                    style={{ maxWidth: '376px' }}
                  />
                </Col>
              </Row>
              <Row className="g-2 mb-2">
                <Col xs="auto">
                  <img
                    className="layer-1"
                    data-gsap="-300"
                    src={section6}
                    alt=""
                    style={{ maxWidth: '444px' }}
                  />
                </Col>
                <Col xs="auto">
                  <img
                    className="z-index-4 layer-5"
                    data-gsap="-540"
                    src={section9}
                    alt=""
                    style={{ maxWidth: '165px' }}
                  />
                </Col>
                <Col xs="auto">
                  <img
                    className="z-index-1 layer-2"
                    data-gsap="-360"
                    src={section10}
                    alt=""
                    style={{ maxWidth: '165px' }}
                  />
                </Col>
                <Col xs="auto">
                  <img
                    className="z-index-2 layer-3"
                    data-gsap="-420"
                    src={section13}
                    alt=""
                    style={{ maxWidth: '343px' }}
                  />
                </Col>
              </Row>
              <Row className="g-2 mb-2">
                <Col xs="auto">
                  <img
                    className="z-index-5 layer-6"
                    data-gsap="-600"
                    src={section7}
                    alt=""
                    style={{ maxWidth: '510px' }}
                  />
                </Col>
                <Col xs="auto">
                  <img
                    className="mb-2 d-block layer-1"
                    data-gsap="-300"
                    src={section11}
                    alt=""
                    style={{ maxWidth: '355px' }}
                  />
                  <img
                    className="z-index-2 layer-3"
                    data-gsap="-420"
                    src={section16}
                    alt=""
                    style={{ maxWidth: '355px' }}
                  />
                </Col>
                <Col xs="auto">
                  <img
                    className="z-index-5 mb-2 d-block layer-6"
                    data-gsap="-600"
                    src={section14}
                    alt=""
                    style={{ maxWidth: '137px' }}
                  />
                  <img
                    className="z-index-5 layer-6"
                    data-gsap="-600"
                    src={section15}
                    alt=""
                    style={{ maxWidth: '137px' }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AdvanceFeatures;
