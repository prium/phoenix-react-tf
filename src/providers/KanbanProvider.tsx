import { KanbanBoardItem, kanbanItems } from 'data/kanban';
import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer
} from 'react';
import { ACTIONTYPE, kanbanReducer } from 'reducers/KanbanReducer';

export type ConversationFilterType = 'all' | 'read' | 'unread';
interface KanbanProviderInterface {}

export interface KanbanState {
  openBoradDetailsOffcanvas: boolean;
  boardLists: KanbanBoardItem[];
}

interface KanbanContextInterface extends KanbanState {
  kanbanDispatch: Dispatch<ACTIONTYPE>;
}

export const KanbanContext = createContext({} as KanbanContextInterface);

const KanbanProvider = ({
  children
}: PropsWithChildren<KanbanProviderInterface>) => {
  const initState: KanbanState = {
    openBoradDetailsOffcanvas: false,
    boardLists: kanbanItems
  };

  const [kanbanState, kanbanDispatch] = useReducer(kanbanReducer, initState);

  return (
    <KanbanContext.Provider
      value={{
        ...kanbanState,
        kanbanDispatch
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanbanContext = () => useContext(KanbanContext);

export default KanbanProvider;
