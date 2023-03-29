import { PropsWithChildren, createContext, useContext } from 'react';
import { TableInstance } from 'react-table';

export const AdvanceTableContext = createContext({} as TableInstance);

const AdvanceTableProvider = ({ children, ...rest }: PropsWithChildren<TableInstance>) => {
  return (
    <AdvanceTableContext.Provider value={{ ...rest }}>{children}</AdvanceTableContext.Provider>
  );
};

export const useAdvanceTableContext = () => useContext(AdvanceTableContext);

export default AdvanceTableProvider;
