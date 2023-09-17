import classNames from 'classnames';
import Button from 'components/base/Button';
import DetailsLabel from 'components/common/DetailsLabel';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutLeadCard = ({ className }: { className?: string }) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <div className="d-flex align-items-center mb-5">
          <h3>About lead</h3>
          <Button variant="link" className="px-3">
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AboutLeadCard;
