import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarUpload from 'components/common/AvatarUpload';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import team15 from 'assets/img/team/15.webp';

const CustomerProfileCard = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="border-bottom border-dashed border-300 pb-4">
          <Row className="align-items-center g-3 g-sm-5 text-center text-sm-start">
            <Col xs={12} sm="auto">
              <AvatarUpload size="5xl" src={team15} />
            </Col>
            <Col xs={12} sm="auto" className="flex-1">
              <h3>Ansolo Lazinatov</h3>
              <p className="text-800">Joined 3 months ago</p>
              <div className="d-flex gap-2">
                <a href="#!">
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin-in']}
                    className="text-400 hover-primary"
                  />
                </a>
                <a href="#!">
                  <FontAwesomeIcon icon={['fab', 'facebook']} className="text-400 hover-primary" />
                </a>
                <a href="#!">
                  <FontAwesomeIcon icon={['fab', 'twitter']} className="text-400 hover-primary" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex flex-between-center pt-4">
          <div>
            <h6 className="text-800">Following</h6>
            <h4 className="fs-7 text-1000 mb-0">297</h4>
          </div>
          <div className="">
            <h6 className="mb-2 text-800">Projects</h6>
            <h4 className="fs-7 text-1000 mb-0">56</h4>
          </div>
          <div className="">
            <h6 className="mb-2 text-800">Completion</h6>
            <h4 className="fs-7 text-1000 mb-0">97</h4>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerProfileCard;
