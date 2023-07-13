import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { DropdownData } from 'data/social/dropdownData';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileNavigationTwo = ({ data }: { data: DropdownData[] }) => {
  return (
    <>
      <div className="d-flex pb-4 align-items-end border-bottom border-dashed">
        <h3 className="flex-1 mb-0">You and Erza</h3>
        <Link to="#!" className="fw-bold fs-9">
          See details
        </Link>
      </div>
      <Row className="g-0 mb-5 mb-lg-0">
        {data.map(item => (
          <Col xs={12} key={item.label} className="border-1 border-bottom py-2">
            <Button
              variant="link"
              className="ps-2 fs-8 text-800 hover-primary fw-semi-bold"
              startIcon={
                <FontAwesomeIcon
                  icon={item.icon as IconProp}
                  className="me-2 mb-2 mb-xxl-0"
                />
              }
            >
              {item.label}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProfileNavigationTwo;
