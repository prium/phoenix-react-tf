import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface MainLayoutContextInterface {
  contentClass: string;
  setContentClass: Dispatch<SetStateAction<string>>;
}

export const MainLayoutContext = createContext({} as MainLayoutContextInterface);

const MainLayoutProvider = ({ children }: PropsWithChildren) => {
  const [contentClass, setContentClass] = useState('');
  return (
    <MainLayoutContext.Provider value={{ contentClass, setContentClass }}>
      {children}
    </MainLayoutContext.Provider>
  );
};

export const useMainLayoutContext = () => useContext(MainLayoutContext);

export default MainLayoutProvider;
