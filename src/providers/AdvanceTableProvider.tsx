import { LatestReviewsTableDataType } from 'data/LatestReviewsTableData';
import { PropsWithChildren, createContext, useContext } from 'react';
import { TableInstance } from 'react-table';

export const AdvanceTableContext = createContext({} as TableInstance<LatestReviewsTableDataType>);

const AdvanceTableProvider = ({
  children,
  ...rest
}: PropsWithChildren<TableInstance<LatestReviewsTableDataType>>) => {
  return (
    <AdvanceTableContext.Provider value={{ ...rest }}>{children}</AdvanceTableContext.Provider>
  );
};

export const useAdvanceTableContext = () => useContext(AdvanceTableContext);

export default AdvanceTableProvider;
