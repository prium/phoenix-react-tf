// @ts-nocheck
import { Table } from '@tanstack/react-table';
import { PropsWithChildren, createContext, useContext } from 'react';

export const AdvanceTableContext = createContext({} as Table<{}>);

const AdvanceTableProvider = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <AdvanceTableContext.Provider value={{ ...rest }}>{children}</AdvanceTableContext.Provider>
  );
};

export const useAdvanceTableContext = () => useContext(AdvanceTableContext);

export default AdvanceTableProvider;
