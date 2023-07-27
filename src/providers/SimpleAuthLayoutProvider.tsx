import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface Config {
  className: string;
  logo: boolean;
}

interface SimpleAuthLayoutInterface {
  config: Config;
  setConfig: Dispatch<SetStateAction<Config>>;
}

const SimpleAuthLayoutContext = createContext({} as SimpleAuthLayoutInterface);

const SimpleAuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const [config, setConfig] = useState({
    className: 'col-xl-5 col-xxl-3',
    logo: true
  });
  return (
    <SimpleAuthLayoutContext.Provider value={{ config, setConfig }}>
      {children}
    </SimpleAuthLayoutContext.Provider>
  );
};

export const useSimpleAuthLayoutContext = () =>
  useContext(SimpleAuthLayoutContext);

export default SimpleAuthLayoutProvider;
