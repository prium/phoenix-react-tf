import React from 'react';
import { Card, Tab } from 'react-bootstrap';
import WizardNav from './WizardNav';
import WizardForm from './WizardForm';
import WizardFooter from './WizardFooter';
import WizardAccountForm from 'components/forms/WizardAccountForm';
import WizardPersonalForm from 'components/forms/WizardPersonalForm';

const WizardFormCard = () => {
  return (
    <Card className="theme-wizard">
      <Card.Header className="bg-100 pt-3 pb-2 border-bottom-0">
        <WizardNav />
      </Card.Header>
      <Card.Body>
        <Tab.Content>
          <Tab.Pane eventKey={1}>
            <WizardForm step={1}>
              <WizardAccountForm />
            </WizardForm>
          </Tab.Pane>
          <Tab.Pane eventKey={2}>
            <WizardForm step={2}>
              <WizardPersonalForm />
            </WizardForm>
          </Tab.Pane>
          <Tab.Pane eventKey={3}>Third tab content</Tab.Pane>
          <Tab.Pane eventKey={4}>Fourth tab content</Tab.Pane>
        </Tab.Content>
      </Card.Body>
      <Card.Footer>
        <WizardFooter />
      </Card.Footer>
    </Card>
  );
};

export default WizardFormCard;
