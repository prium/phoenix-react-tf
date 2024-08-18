import WizardForm from 'components/wizard/WizardForm';
import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import React from 'react';
import { Col, Row, Tab } from 'react-bootstrap';
import WizardFormFooter from 'components/wizard/WizardFormFooter';
import classNames from 'classnames';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import BasicInformationForm from 'components/modules/travel-agency/dashboard/hotel/add-proterty/BasicInformationForm';
import LocationForm from 'components/modules/travel-agency/dashboard/hotel/add-proterty/LocationForm';
import GeneralAmenitiesForm from 'components/modules/travel-agency/dashboard/hotel/add-proterty/GeneralAmenitiesForm';
import AddPhotos from 'components/modules/travel-agency/dashboard/hotel/add-proterty/AddPhotos';
import FinanceForm from 'components/modules/travel-agency/dashboard/hotel/add-proterty/FinanceForm';
import PoliciesForm from 'components/modules/travel-agency/dashboard/hotel/add-proterty/PoliciesForm';
import Preview from 'components/modules/travel-agency/dashboard/hotel/add-proterty/Preview';
import WizardHeader from 'components/modules/travel-agency/common/WizardHeader';
import { addPropertyWizardHeader } from 'data/wizard/wizard';
// import Preview from '/components/modules/travel-agency/dashboard/hotel/add-proterty/Preview';

export interface AddPropertyWizardFormData {
  propertyName: string;
  propertyDescription: string;
  propertyType: string;
  propertyRating: string;
  contactEmail: string;
  contactNumber: number;
  isPropertyChain: string;
  propertyChain: string;
  isChannelManagement: boolean;
  channelManagement: string;
}

const AddProperty = () => {
  const form = useWizardForm({
    totalStep: 7
  });

  // console.log(form.formData);

  return (
    <>
      <div className="mb-9">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="fs-5 mb-4 mb-xl-5">Add New Property </h2>
        <WizardFormProvider {...form}>
          <Row className="gx-0 gx-xl-5 theme-wizard">
            <Col xl={{ order: 1, span: 4 }}>
              <WizardHeader data={addPropertyWizardHeader} />
            </Col>
            <Col xl={8} className="flex-1">
              <Row>
                <Col xxl={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey={1}>
                      <WizardForm step={1}>
                        <BasicInformationForm />
                      </WizardForm>
                    </Tab.Pane>
                    <Tab.Pane eventKey={2}>
                      <WizardForm step={2}>
                        <LocationForm />
                      </WizardForm>
                    </Tab.Pane>
                    <Tab.Pane eventKey={3}>
                      <WizardForm step={3}>
                        <GeneralAmenitiesForm />
                      </WizardForm>
                    </Tab.Pane>
                    <Tab.Pane eventKey={4}>
                      <WizardForm step={4}>
                        <AddPhotos />
                      </WizardForm>
                    </Tab.Pane>
                    <Tab.Pane eventKey={5}>
                      <WizardForm step={5}>
                        <FinanceForm />
                      </WizardForm>
                    </Tab.Pane>
                    <Tab.Pane eventKey={6}>
                      <WizardForm step={6}>
                        <PoliciesForm />
                      </WizardForm>
                    </Tab.Pane>
                    <Tab.Pane eventKey={7}>
                      <WizardForm step={7}>
                        <Preview />
                      </WizardForm>
                    </Tab.Pane>
                  </Tab.Content>
                  <div className="mt-6">
                    <WizardFormFooter
                      hidePrevBtn
                      className={classNames({ 'd-none': !form.getCanNextPage })}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </WizardFormProvider>
      </div>
    </>
  );
};

export default AddProperty;
