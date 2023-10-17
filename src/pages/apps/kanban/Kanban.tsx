import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilLeftArrowToLeft } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import KanbanBoardOffcanvas from 'components/modules/kanban/KanbanBoardOffcanvas';
import KanbanHeader from 'components/modules/kanban/KanbanHeader';
import KanbanList from 'components/modules/kanban/KanbanList';
import { kanbanItems } from 'data/kanban';
import KanbanProvider, { useKanbanContext } from 'providers/KanbanProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import React, { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

const Kanban = () => {
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('kanban-content');

    return () => {
      setContentClass('');
    };
  }, []);

  return (
    <KanbanProvider>
      <KanbanContent />
    </KanbanProvider>
  );
};

const KanbanContent = () => {
  const { boardLists, kanbanDispatch } = useKanbanContext();
  const handleDragEnd = (result: DropResult) => {
    console.log({ result });
    const { source, destination, draggableId } = result;

    if (destination) {
      kanbanDispatch({
        type: 'ADD_ITEM_TO_LIST',
        payload: { source, destination }
      });
    }
  };

  return (
    <div>
      <KanbanProvider>
        <KanbanHeader />
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="kanban-container scrollbar">
            {boardLists.map(list => (
              <Droppable key={list.id} droppableId={`${list.id}`}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <KanbanList list={list} key={list.id} />
                  </div>
                )}
              </Droppable>
            ))}

            <div className="kanban-column scrollbar position-relative bg-transparent d-flex flex-column h-100 flex-center hover-bg-100">
              <Button className="stretched-link btn-icon btn-icon bg-200 rounded-circle mb-1">
                {/* <span className="circlebg-200 mx-auto"> */}
                <FontAwesomeIcon
                  icon={faPlus}
                  // transform="shrink-2"
                  className="text-800 fs-8"
                />
                {/* </span> */}
              </Button>
              <h5 className="text-800">Add another list</h5>
            </div>
          </div>
        </DragDropContext>
        <KanbanBoardOffcanvas />
      </KanbanProvider>
    </div>
  );
};
export default Kanban;
