import React from 'react';
import WidgetsSectionTitle from './WidgetsSectionTitle';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';
import AnalyticsStats from 'components/stats/AnalyticsStats';
import { stats } from 'data/crm/stats';
import { Col, Row } from 'react-bootstrap';
import EcomTotalOrdersCard from 'components/cards/EcomTotalOrdersCard';
import EcomNewCustomersCard from 'components/cards/EcomNewCustomersCard';
import EcomTopCouponsCard from 'components/cards/EcomTopCouponsCard';
import EcomPayingVsNonPayingCard from 'components/cards/EcomPayingVsNonPayingCard';
import NewUsersAndLeads from '../crm/NewUsersAndLeads';
import ContactsBySource from '../crm/ContactsBySource';
import EcomProjectionVsActual from '../e-commerce/dashboard/EcomProjectionVsActual';
import EcomReturningCustomerRate from '../e-commerce/dashboard/EcomReturningCustomerRate';
import EcomTotalSells from '../e-commerce/dashboard/EcomTotalSells';
import ZeroRoadMap from '../project-management/dashboard/ZeroRoadMap';
import IssuesDiscovered from '../project-management/dashboard/IssuesDiscovered';
import ProjectElevenProgress from '../project-management/dashboard/ProjectElevenProgress';

const Stats = () => {
  return (
    <>
      <WidgetsSectionTitle
        title="Number Stats & Charts"
        subtitle="You can easily show your stats content by using these cards."
        icon={faPercentage}
        className="my-5"
      />
      <div className="px-3 mb-5">
        <AnalyticsStats stats={stats} />
      </div>
      <Row className="g-3 mb-5">
        <Col md={6} xxl={3}>
          <EcomTotalOrdersCard />
        </Col>
        <Col md={6} xxl={3}>
          <EcomNewCustomersCard />
        </Col>
        <Col md={6} xxl={3}>
          <EcomTopCouponsCard />
        </Col>
        <Col md={6} xxl={3}>
          <EcomPayingVsNonPayingCard />
        </Col>
      </Row>
      <Row className="gx-4 gy-6 pb-5">
        <Col xxl={6}>
          <NewUsersAndLeads />
        </Col>
        <Col xxl={6}>
          <ContactsBySource />
        </Col>
      </Row>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white py-5">
        <Row className="g-6">
          <Col xl={6}>
            <EcomProjectionVsActual />
          </Col>
          <Col xl={6}>
            <EcomReturningCustomerRate />
          </Col>
        </Row>
      </div>
      <Row className="g-6 pt-6 align-items-center">
        <Col xxl={6}>
          <EcomTotalSells />
        </Col>
        <Col xxl={6}>
          <ZeroRoadMap />
        </Col>
      </Row>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white pt-6 pb-3 mt-6">
        <Row>
          <Col xl={7} xxl={6}>
            <IssuesDiscovered />
          </Col>
          <Col xl={7} xxl={6}>
            <ProjectElevenProgress />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Stats;
