import React from 'react';
import { TripDetailsTabDetailItem } from 'data/travel-agency/customer/trip';
import { Col, Row } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import TripDetailsTabDetailsExpactation from './details-tab/TripDetailsTabDetailsExpactation';
import TripDetailsTabDetailsIncluded from './details-tab/TripDetailsTabDetailsIncluded';
import TripDetailsTabDetailsDeparture from './details-tab/TripDetailsTabDetailsDeparture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import TripDetailsTabDetailsAccessibility from './details-tab/TripDetailsTabDetailsAccessibility';
import TripDetailsTabDetailsPolicy from './details-tab/TripDetailsTabDetailsPolicy';
import TripDetailsSummery from './details-tab/TripDetailsSummery';

interface TripDetailsTabDetailsContentProps {
  tripDetailsItems: TripDetailsTabDetailItem;
}

const TripDetailsTabDetailsContent = ({
  tripDetailsItems
}: TripDetailsTabDetailsContentProps) => {
  return (
    <Row className="justify-content-between gx-0 gy-5">
      <Col xl={7}>
        <CollapsibleContainer
          id="collapseWhatToExpect"
          collapseTitle="What to expect"
          titleClass="fs-8 fs-sm-7 text-body-highlight"
          containerSize="trip"
        >
          <TripDetailsTabDetailsExpactation
            expectations={tripDetailsItems.expectation}
          />
        </CollapsibleContainer>
        <CollapsibleContainer
          id="collapseIncluded"
          collapseTitle="What are included or excluded"
          titleClass="fs-8 fs-sm-7 text-body-highlight"
          containerSize="trip"
          className="mt-4"
          defaultOpen={false}
        >
          <TripDetailsTabDetailsIncluded
            includedItems={tripDetailsItems.includeOrExclude}
          />
        </CollapsibleContainer>
        <CollapsibleContainer
          id="collapseDeparture"
          collapseTitle="Departure and return"
          titleClass="fs-8 fs-sm-7 text-body-highlight"
          containerSize="trip"
          className="mt-4"
          defaultOpen={false}
        >
          <TripDetailsTabDetailsDeparture
            departureItems={tripDetailsItems.departOrReturn}
          />
        </CollapsibleContainer>
        <CollapsibleContainer
          id="collapseAccessibility"
          collapseTitle="Accessibility"
          titleClass="fs-8 fs-sm-7 text-body-highlight"
          containerSize="trip"
          className="mt-4"
          defaultOpen={false}
        >
          <TripDetailsTabDetailsAccessibility
            accessibility={tripDetailsItems.accessibility}
          />
        </CollapsibleContainer>
        <CollapsibleContainer
          id="collapseAdditionalInformation"
          collapseTitle="Additional Information"
          titleClass="fs-8 fs-sm-7 text-body-highlight"
          containerSize="trip"
          className="mt-4"
          defaultOpen={false}
        >
          <div className="py-6 px-4">
            <ul className="list-unstyled mb-0">
              {tripDetailsItems.additional.map(item => (
                <li key={item.id} className="mb-1 d-flex">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-secondary-light me-3 fs-11"
                    transform="down-13 shrink-4"
                  />
                  {item.additionalItem}
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContainer>
        <CollapsibleContainer
          id="collapsePolicy"
          collapseTitle="Policy"
          titleClass="fs-8 fs-sm-7 text-body-highlight"
          containerSize="trip"
          className="mt-4"
          defaultOpen={false}
        >
          <TripDetailsTabDetailsPolicy policies={tripDetailsItems.policy} />
        </CollapsibleContainer>
      </Col>
      <Col xl={4}>
        <TripDetailsSummery tourSummery={tripDetailsItems.tourSummery} />
      </Col>
    </Row>
  );
};

export default TripDetailsTabDetailsContent;
