import CoverUpload from 'components/common/CoverUpload';
import coverImage from 'assets/img/generic/59.png';
import SocialAvatarUpload from 'components/modules/social/SocialAvatarUpload';
import profileImage from 'assets/img/team/20.webp';
import { Card, Col, Row } from 'react-bootstrap';
import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SettingsProfileCard = () => {
  return (
    <Card className="mb-5">
      <Card.Header
        className="hover-actions-trigger position-relative mb-6"
        style={{ minHeight: '130px' }}
      >
        <CoverUpload
          src={coverImage}
          gradient={
            'linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%)' as CSSProperties
          }
        />
        <SocialAvatarUpload
          size="4xl"
          src={profileImage}
          status="online"
          className="feed-avatar-profile"
        />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <div className="d-flex flex-wrap mb-2 align-items-center">
              <h3 className="me-2">Ansolo Lazinatov</h3>
              <span className="fw-normal fs-8">u/hansolo</span>
            </div>
            <div className="d-flex d-xl-block d-xxl-flex align-items-center">
              <div className="d-flex mb-xl-2 mb-xxl-0 me-4">
                <FontAwesomeIcon
                  icon="user-group"
                  className="fs-10 me-2 me-lg-1 me-xl-2"
                />
                <h6 className="mb-0">
                  1297
                  <span className="fw-semi-bold ms-1">Followers</span>
                </h6>
              </div>
              <div className="d-flex">
                <FontAwesomeIcon
                  icon="user-check"
                  className="fs-10 me-2 me-lg-1 me-xl-2"
                />
                <h6 className="mb-0">
                  3971
                  <span className="fw-semi-bold ms-1">Following</span>
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SettingsProfileCard;
