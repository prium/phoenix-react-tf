import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface CollapseContextInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CollapseContext = createContext({} as CollapseContextInterface);

const PhoenixDocProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  return (
    <CollapseContext.Provider value={{ open, setOpen }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const usePhoenixDocContext = () => useContext(CollapseContext);

export default PhoenixDocProvider;
