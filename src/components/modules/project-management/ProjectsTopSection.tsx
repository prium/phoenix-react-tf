import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import FilterTab from 'components/common/FilterTab';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import FourGrid from 'components/icons/FourGrid';
import NineGrid from 'components/icons/NineGrid';
import { defaultBreadcrumbItems } from 'data/commonData';
import { capitalize } from 'helpers/utils';
import React from 'react';
import { Button, Col, Nav, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const tabItems = [
  { label: 'All', count: 32, active: true },
  { label: 'Ongoing', count: 14 },
  { label: 'Cancelled', count: 2 },
  { label: 'Finished', count: 14 },
  { label: 'Postponed', count: 2 }
];

const ToggleViewButton = ({
  active,
  view
}: {
  active?: boolean;
  view: 'list' | 'card' | 'board';
}) => {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{capitalize(view)} view</Tooltip>}>
      <Button
        variant="phoenix-primary"
        className={classNames('px-3', {
          'text-900 border-0': active
        })}
      >
        {view === 'list' && <FontAwesomeIcon icon="list" className="fs-10" />}
        {view === 'board' && <NineGrid />}
        {view === 'card' && <FourGrid />}
      </Button>
    </OverlayTrigger>
  );
};

const ProjectsTopSection = () => {
  return (
    <Row className="g-3 justify-content-between align-items-end mb-4">
      <Col xs={12} sm="auto">
        <FilterTab tabItems={tabItems} />
      </Col>
      <Col xs={12} sm="auto">
        <div className="d-flex align-items-center gap-1">
          <SearchBox placeholder="Search projects" style={{ maxWidth: '30rem' }} className="me-3" />
          <ToggleViewButton view="list" active />
          <ToggleViewButton view="board" />
          <ToggleViewButton view="card" />
        </div>
      </Col>
    </Row>
  );
};

export default ProjectsTopSection;
