import { Container, Row, Col } from 'react-bootstrap';
import thumbsUpIcon from 'assets/img/icons/thumbs-up.png';
import bg26 from 'assets/img/bg/26.png';
import section63 from 'assets/img/sections/63.webp';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
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
    <section
      className="overflow-hidden py-0"
      style={{
        background: 'linear-gradient(94.41deg, #193D91 -6.4%, #091F51 105.25%)'
      }}
    >
      <div
        className="bg-holder opacity-50"
        style={{
          backgroundImage: `url(${bg26})`,
          backgroundPosition: '14%',
          backgroundSize: 'contain',
          height: '150%'
        }}
        data-gsap-parallax-y="-40%"
      />
      <Container className="container-small position-relative py-8">
        <Row className="align-items-center gx-xxl-13">
          <Col lg={6} className="mb-6 z-index-1">
            <img src={section63} alt="" className="mw-100" />
          </Col>
          <Col lg={6}>
            <h1 className="text-soft fw-normal mb-4 text-center text-lg-start">
              Coded for
              <br className="d-none d-lg-block d-xl-none" />
              <span className="text-primary-300 ms-2 fw-bolder">
                any screen size
                <img src={thumbsUpIcon} alt="" className="mb-2 ms-2" />
              </span>
            </h1>
            <p className="text-200 text-center text-lg-start">
              Built with all top-notch technologies, this admin dashboard is
              fully responsive, and the clean codebase helps it to stay intact
              without breaking down the layout around any device or screen size
              or web browser.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
