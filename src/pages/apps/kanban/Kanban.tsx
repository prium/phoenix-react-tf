import KanbanHeader from 'components/modules/kanban/KanbanHeader';
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
      <div className="kanban-container scrollbar"></div>
    </div>
  );
};

export default Kanban;
