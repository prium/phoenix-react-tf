import usePhoenixForm, { UsePhoenixFormResult } from 'hooks/usePhoenixForm';
import {
  Context,
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState
} from 'react';
import { Tab } from 'react-bootstrap';

interface WizardFormProviderInterface {
  validation?: boolean;
}

interface WizardFormContextInterface<T> extends UsePhoenixFormResult<T> {
  selectedStep: number;
  setSelectedStep: Dispatch<SetStateAction<number>>;
  formRefs: MutableRefObject<(HTMLFormElement | null)[]>;
  goToStep: (targetStep: number) => void;
  validation: boolean;
}

export const WizardFormContext = createContext(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {} as WizardFormContextInterface<any>
);

const submitEvent = new Event('submit', {
  bubbles: true,
  cancelable: true
});

const WizardFormProvider = <T,>({
  children,
  validation
}: PropsWithChildren<WizardFormProviderInterface>) => {
  const [selectedStep, setSelectedStep] = useState(1);
  const formRefs = useRef([]);
  const methods = usePhoenixForm<T>();

  const goToStep = (targetStep: number) => {
    if (selectedStep > targetStep) {
      setSelectedStep(Number(targetStep));
    } else {
      const form = formRefs.current[selectedStep - 1];
      //@ts-ignore
      if (form) {
        //@ts-ignore
        form.dispatchEvent(submitEvent);
        //@ts-ignore
        if (form.checkValidity()) {
          setSelectedStep(Number(targetStep));
        } else {
          //@ts-ignore
          form.classList.add('was-validated');
        }
      }
    }
  };

  return (
    <WizardFormContext.Provider
      value={{
        selectedStep,
        setSelectedStep,
        formRefs,
        goToStep,
        validation: !!validation,
        ...methods
      }}
    >
      <Tab.Container
        activeKey={selectedStep}
        onSelect={(eventKey: string | null) => {
          if (eventKey) {
            goToStep(Number(eventKey));
          }
        }}
      >
        {children}
      </Tab.Container>
    </WizardFormContext.Provider>
  );
};

export const useWizardFormContext = <T,>() =>
  useContext(WizardFormContext as Context<WizardFormContextInterface<T>>);

export default WizardFormProvider;
