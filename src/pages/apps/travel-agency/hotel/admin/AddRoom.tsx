import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import React from 'react';
import { Row, Col, Tab } from 'react-bootstrap';
import useWizardForm from 'hooks/useWizardForm';
import WizardForm from 'components/wizard/WizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import RoomDetailsForm from 'components/modules/travel-agency/dashboard/hotel/add-room/RoomDetailsForm';
import WizardHeader from 'components/modules/travel-agency/common/WizardHeader';
import { addRoomWizardHeader } from 'data/wizard/wizard';
import RoomWizardFooter from 'components/modules/travel-agency/dashboard/hotel/add-room/RoomWizardFooter';
import Pricing from 'components/modules/travel-agency/dashboard/hotel/add-room/Pricing';
import Amenities from 'components/modules/travel-agency/dashboard/hotel/add-room/Amenities';

const AddRoom = () => {
  const form = useWizardForm({
    totalStep: 5
  });

  return (
    <div className="mb-9">
      <PageBreadcrumb className="mb-3" items={defaultBreadcrumbItems} />
      <h2 className="fs-5 mb-4 mb-xl-5">Add New Room</h2>
      <WizardFormProvider {...form}>
        <Row className="gx-0 gx-xl-5 theme-wizard">
          <Col xl={{ order: 1, span: 4 }}>
            <WizardHeader data={addRoomWizardHeader} />
          </Col>
          <Col xl={8} className="flex-1">
            <Row>
              <Col xxl={8}>
                <Tab.Content>
                  <Tab.Pane eventKey={1}>
                    <WizardForm step={1}>
                      <RoomDetailsForm />
                    </WizardForm>
                  </Tab.Pane>
                  <Tab.Pane eventKey={2}>
                    <WizardForm step={2}>
                      <Pricing />
                    </WizardForm>
                  </Tab.Pane>
                  <Tab.Pane eventKey={3}>
                    <WizardForm step={3}>
                      <Amenities />
                    </WizardForm>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Col>
        </Row>
        <RoomWizardFooter />
      </WizardFormProvider>
    </div>
  );
};

export default AddRoom;
