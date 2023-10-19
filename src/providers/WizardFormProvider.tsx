import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
  useState
} from 'react';
import { Form } from 'react-bootstrap';

interface WizardFormProviderInterface {}

export interface WizardFormState {
  step: number;
}

interface WizardFormContextInterface {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export const WizardFormContext = createContext(
  {} as WizardFormContextInterface
);

const WizardFormFormProvider = ({
  children
}: PropsWithChildren<WizardFormProviderInterface>) => {
  // const initState: WizardFormState = {};
  const [step, setStep] = useState(1);

  return (
    <WizardFormContext.Provider
      value={{
        step,
        setStep
      }}
    >
      {children}
    </WizardFormContext.Provider>
  );
};

export const useWizardFormContext = () => useContext(WizardFormContext);

export default WizardFormFormProvider;
