import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider, {
  useWizardFormContext
} from 'providers/WizardFormProvider';
import React from 'react';
import { Col, FloatingLabel, Form, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StepProgressBoard from './StepProgressBoard';
import WizardFormFooter from 'components/wizard/WizardFormFooter';
import WizardForm from 'components/wizard/WizardForm';
import BoardForm from './BoardForm';
import ColumnForm from './ColumnForm';
import BackgroundColorForm from './BackgroundColorForm';

const CreateBoardWizardForm = () => {
  const form = useWizardForm({
    totalStep: 4
  });
  return (
    <WizardFormProvider {...form}>
      <StepProgressBoard className="mb-9" />
      <div className="theme-wizard">
        <Tab.Content>
          <Tab.Pane eventKey={1}>
            <WizardForm step={1}>
              <BackgroundColorForm />
            </WizardForm>
          </Tab.Pane>
          <Tab.Pane eventKey={2}>
            <WizardForm step={2}>
              <BoardForm />
            </WizardForm>
          </Tab.Pane>
          <Tab.Pane eventKey={3}>
            <WizardForm step={3}>
              <ColumnForm />
            </WizardForm>
          </Tab.Pane>
          <Tab.Pane eventKey={4}>
            <WizardForm step={4}>
              <BoardForm />
            </WizardForm>
          </Tab.Pane>
        </Tab.Content>

        <WizardFormFooter
          nextBtnLabel={form.getCanNextPage ? 'Next' : 'Submit'}
        />
      </div>
    </WizardFormProvider>
  );
};

export default CreateBoardWizardForm;
