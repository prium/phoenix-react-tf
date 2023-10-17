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
      type: 'ADD_ITEM_TO_LIST';
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
    case 'ADD_ITEM_TO_LIST': {
      const {
        payload: { destination, source }
      } = action;

      const item = state.boardLists
        .find(list => list.id === source.droppableId)
        ?.tasks.find((task, index) => index === source.index);

      console.log({ item });

      const updatedDestinationList = state.boardLists.find(
        list => list.id === destination.droppableId
      );
      if (updatedDestinationList && item) {
        updatedDestinationList.tasks.splice(0, destination.index, item);
      }

      console.log({ updatedDestinationList });

      return {
        ...state
      };
    }

    default:
      return state;
  }
};
