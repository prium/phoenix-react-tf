import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import ProjectsTopSection from 'components/modules/project-management/ProjectsTopSection';
import { defaultBreadcrumbItems } from 'data/commonData';
import React from 'react';
import { Button, Col, Nav, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'All', count: 32, active: true },
  { label: 'Ongoing', count: 14 },
  { label: 'Cancelled', count: 2 },
  { label: 'Finished', count: 14 },
  { label: 'Postponed', count: 2 }
];

const ProjectListView = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center">
        <h2 className="mb-0">
          Projects<span className="fw-normal text-700 ms-3">(32)</span>
        </h2>
        <Link className="btn btn-primary px-5" to="/">
          <FontAwesomeIcon icon="plus" className="me-2" />
          Add new project
        </Link>
      </div>
      <ProjectsTopSection />
    </div>
  );
};

export default ProjectListView;
