import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { DropdownData } from 'data/social/dropdownData';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface ProfileNavigationProps {
  data: DropdownData[];
  className?: string;
}

const ProfileNavigation = ({ data, className }: ProfileNavigationProps) => {
  return (
    <Row className={classNames(className, 'g-0')}>
      {data.slice(0, 6).map((item, index) => (
        <Col
          key={index}
          xs={6}
          className={classNames('border-1 py-2', {
            'border-bottom border-end': index === 0 || index === 2,
            'border-bottom': index === 1 || index === 3,
            'border-end': index === 4
          })}
        >
          <Button
            variant="link"
            className={classNames(
              'fs-8 text-800 hover-primary fw-semi-bold d-flex flex-column d-xxl-inline-block w-100 align-items-center align-items-xxl-start',
              {
                'ps-2': index % 2 === 0
              }
            )}
            startIcon={
              <FontAwesomeIcon
                icon={item.icon}
                className="me-2 mb-2 mb-xxl-0"
              />
            }
          >
            {item.label}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default ProfileNavigation;
