import { produce } from 'immer';
import { KanbanState } from 'providers/KanbanProvider';
import { DraggableLocation } from 'react-beautiful-dnd';

export type ACTIONTYPE =
  | {
      type: 'TOGGLE_DETAILS_OFFCANVAS';
      payload?: boolean;
    }
  | {
      type: 'REMOVE_ITEM_FROM_LIST';
      payload: { listId: string; itemIndex: number };
    }
  | {
      type: 'MOVE_ITEMS';
      payload: { destination: DraggableLocation; source: DraggableLocation };
    };

export const kanbanReducer = (state: KanbanState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'TOGGLE_DETAILS_OFFCANVAS': {
      const { payload } = action;
      return {
        ...state,
        openBoradDetailsOffcanvas: payload
          ? payload
          : !state.openBoradDetailsOffcanvas
      };
    }
    case 'REMOVE_ITEM_FROM_LIST': {
      const { payload } = action;
      return {
        ...state,
        boardLists: state.boardLists.map(list =>
          list.id === payload.listId
            ? {
                ...list,
                tasks: list.tasks.filter(
                  (task, index) => index !== payload.itemIndex
                )
              }
            : list
        )
      };
    }
    case 'MOVE_ITEMS': {
      const {
        payload: { destination, source }
      } = action;

      const updatedList = produce(state.boardLists, draft => {
        const task = draft
          .find(list => list.id === source.droppableId)
          ?.tasks.splice(source.index, 1)[0];

        if (task) {
          draft
            .find(list => list.id === destination.droppableId)
            ?.tasks.splice(destination.index, 0, task);
        }
      });

      return {
        ...state,
        boardLists: updatedList
      };
    }

    default:
      return state;
  }
};
