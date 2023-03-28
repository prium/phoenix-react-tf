import React, { PropsWithChildren, createContext, useContext } from 'react';
import { useTable } from 'react-table';

interface AdvanceTableContextInterface {
  methods: any;
}

interface AdvanceTableProviderProps {
  columns: any[];
  data: any[];
}

export const AdvanceTableContext = createContext({} as AdvanceTableContextInterface);

const AdvanceTableProvider = ({
  children,
  columns,
  data
}: PropsWithChildren<AdvanceTableProviderProps>) => {
  const methods = useTable({
    columns,
    data
  });

  return (
    <AdvanceTableContext.Provider value={{ methods }}>{children}</AdvanceTableContext.Provider>
  );
};

export const usePhoenixDocContext = () => useContext(AdvanceTableContext);

export default AdvanceTableProvider;
