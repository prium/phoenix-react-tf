import { UilBooks, UilInvoice, UilRefresh, UilUsersAlt } from '@iconscout/react-unicons';
import CheckButton from 'components/base/CheckButton';
import DatePicker from 'components/base/DatePicker';
import ZeroRoadMapChart from 'components/charts/dhtmlx/ZeroRoadMapChart';
import ZeroRoadMap from 'components/modules/project-management/ZeroRoadMap';
import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap';

interface ProjectManagementStat {
  title: string;
  count: string;
  icon: JSX.Element;
  subtitle: string;
}

const stats: ProjectManagementStat[] = [
  {
    title: 'Projects',
    count: '32',
    icon: <UilBooks className="text-primary-500" size={40} />,
    subtitle: 'Awating processing'
  },
  {
    title: 'Members',
    icon: <UilUsersAlt className="text-success-500" size={40} />,
    count: '94',
    subtitle: 'Working hard'
  },
  {
    title: 'Invoices',
    icon: <UilInvoice className="text-warning-500" size={40} />,
    count: '23',
    subtitle: 'Soon to be cleared'
  },
  {
    title: 'Refunds',
    icon: <UilRefresh className="text-danger-500" size={40} />,
    count: '3',
    subtitle: 'Fresh start'
  }
];

const Stat = ({ stat }: { stat: ProjectManagementStat }) => {
  return (
    <div className="d-flex align-items-center">
      {stat.icon}
      <div className="ms-2">
        <div className="d-flex align-items-end">
          <h2 className="mb-0 me-2">{stat.count}</h2>
          <span className="fs-7 fw-semi-bold text-900">{stat.title}</span>
        </div>
        <p className="text-800 fs-9 mb-0">{stat.subtitle}</p>
      </div>
    </div>
  );
};

const ProjectManagement = () => {
  return (
    <>
      <Row className="gy-3 mb-6 justify-content-between">
        <Col md={9} xs="auto">
          <h2 className="mb-2 text-1100">Projects Dashboard</h2>
          <h5 className="text-700 fw-semi-bold">
            Here’s what’s going on at your business right now
          </h5>
        </Col>
        <Col md={3} xs="auto">
          <DatePicker
            options={{
              defaultDate: 'May 1, 2023'
            }}
          />
        </Col>
      </Row>
      <Row className="mb-3 gy-6">
        <Col xs={12} xxl={2}>
          <Row className="align-items-center g-3 g-xxl-0 h-100 align-content-between">
            {stats.map(stat => (
              <Col xs={12} sm={6} md={3} lg={6} xl={3} xxl={12}>
                <Stat stat={stat} key={stat.title} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          <h3>Project: zero Roadmap</h3>
          <p className="text-700">Phase 2 is now ongoing</p>
          <ZeroRoadMap />
        </Col>
        <Col xs={12} xl={6} xxl={5}></Col>
      </Row>
    </>
  );
};

export default ProjectManagement;
