import { UilLeftArrowToLeft } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import KanbanHeader from 'components/modules/kanban/KanbanHeader';
import KanbanList from 'components/modules/kanban/KanbanList';
import { kanbanItems } from 'data/kanban';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import React, { useEffect } from 'react';

const Kanban = () => {
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('kanban-content');

    return () => {
      setContentClass('');
    };
  }, []);
  return (
    <div>
      <KanbanHeader />
      <div className="kanban-container scrollbar">
        {kanbanItems.map(list => (
          <KanbanList list={list} key={list.id} />
        ))}

        <div className="kanban-column scrollbar position-relative bg-transparent">
          <div className="d-flex h-100 flex-center fw-bold hover-bg-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
