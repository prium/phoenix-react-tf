import { Col, Row } from 'react-bootstrap';
import Lottie from 'lottie-react';
import comingSoonLight from 'assets/img/animated-icons/coming-soon-light.json';
import comingSoonDark from 'assets/img/animated-icons/coming-soon-dark.json';
import comingSoonText from 'assets/img/spot-illustrations/39.png';
import comingSoonTextDark from 'assets/img/spot-illustrations/dark_39.png';
import { useAppContext } from 'providers/AppProvider';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  const {
    config: { theme }
  } = useAppContext();
  return (
    <div className="d-flex justify-content-center">
      <Row className="flex-center coming-soon">
        <Col xs={12} xxl={10}>
          <Row className="align-items-xl-center pb-9 g-2">
            <Col xs={12} xl={6} className="order-xl-1">
              <div className="d-flex flex-center">
                <Lottie
                  animationData={
                    theme === 'light' ? comingSoonLight : comingSoonDark
                  }
                  loop={true}
                  className="w-xl-100 animation"
                />
              </div>
            </Col>
            <Col xs={12} xl={6}>
              <div className="d-flex justify-content-center mt-xl-15">
                <div className="text-container text-center text-xl-start">
                  <img
                    src={comingSoonText}
                    alt=""
                    className="mb-5 w-100 w-xl-75 w-xxl-100 d-dark-none"
                    style={{ maxWidth: 408 }}
                  />
                  <img
                    src={comingSoonTextDark}
                    alt=""
                    className="mb-5 w-100 w-xl-75 w-xxl-100 d-light-none"
                    style={{ maxWidth: 408 }}
                  />

                  <h2 className="text-gray-800 fs-xl-6 mb-3">
                    This page is under development.
                  </h2>
                  <p className="mb-6">
                    This page is under development. We're making it a top
                    priority to get all the pages from the newest HTML version
                    of Phoenix over to the React JS version. Let's go!
                  </p>
                  <Link
                    className="btn btn-primary"
                    to="documentation/getting-started"
                    style={{ minWidth: 200 }}
                  >
                    Getting Started
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ComingSoon;
