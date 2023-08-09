import React, { useLayoutEffect, useRef } from 'react';
import figmaIcon from 'assets/img/icons/figma.png';
import figmaBg from 'assets/img/bg/figma.png';
import { Col, Container, Row } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureFigma = () => {
  const gsapRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(self => {
      if (self.selector) {
        const boxes = self.selector('.feature-figma-img');

        boxes.forEach((box: HTMLDivElement) => {
          gsap.to(box, {
            y: '-50%',
            scrollTrigger: {
              trigger: '.feature-figma-img',
              toggleActions: 'play none none reverse',
              scrub: true,
              start: 'top bottom'
            }
          });
        });
      }
    }, gsapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-12 position-relative overflow-hidden bg-100"
      ref={gsapRef}
    >
      <div className="grd bg-gradient-figma">
        <img className="feature-figma-img" src={figmaBg} alt="" />
      </div>
      <Container className="position-relative container-small">
        <Row className="px-4">
          <Col
            xs={12}
            className="d-flex justify-content-center flex-between-center mb-3"
          >
            <img className="me-3" src={figmaIcon} alt="" />
            <h1 className="text-white">Figma design files</h1>
          </Col>
        </Row>
        <Row className="px-4">
          <Col xs={12} className="text-center mb-0 text-white">
            <p>
              Modern &amp; highly customizable, simple and user-friendly UI
              components 🎨 based on Bootstrap design system only for you!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureFigma;
