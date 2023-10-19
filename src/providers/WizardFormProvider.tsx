import usePhoenixForm, { UsePhoenixFormResult } from 'hooks/usePhoenixForm';
import {
  Context,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface WizardFormProviderInterface {}

export interface WizardFormState {
  step: number;
}

interface WizardFormContextInterface<T> extends UsePhoenixFormResult<T> {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export const WizardFormContext = createContext(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {} as WizardFormContextInterface<any>
);

const WizardFormProvider = <T,>({
  children
}: PropsWithChildren<WizardFormProviderInterface>) => {
  const [step, setStep] = useState(1);
  const methods = usePhoenixForm<T>();

  return (
    <WizardFormContext.Provider
      value={{
        step,
        setStep,
        ...methods
      }}
    >
      {children}
    </WizardFormContext.Provider>
  );
};

export const useWizardFormContext = <T,>() =>
  useContext(WizardFormContext as Context<WizardFormContextInterface<T>>);

export default WizardFormProvider;
