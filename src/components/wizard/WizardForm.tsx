import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { PropsWithChildren, useState } from 'react';

export const WizardForm = ({
  children,
  step
}: PropsWithChildren<{ step: number }>) => {
  const { formRefs } = useWizardFormContext();
  // const [validated, setfirst] = useState(second)
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
      ref={el => (formRefs.current[step - 1] = el)}
      // noValidate
      // validated={validated}
    >
      {children}
    </form>
  );
};

export default WizardForm;
