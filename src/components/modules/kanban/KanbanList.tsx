import {
  UilArrowFromRight,
  UilLeftArrowToLeft
} from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { KanbanBoardItem } from 'data/kanban';
import React, { useState } from 'react';
import KanbanListItemCard from './KanbanListItemCard';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface KanbanListProps {
  list: KanbanBoardItem;
}

const KanbanList = ({ list }: KanbanListProps) => {
  const [collapsed, setCollapsed] = useState(list.isCollapsed);
  return (
    <div
      className={classNames('kanban-column scrollbar', {
        collapsed
      })}
    >
      <div className="kanban-column-header px-4 hover-actions-trigger">
        <div
          className={`d-flex align-items-center border-bottom border-3 py-3 border-${list.borderColor}`}
        >
          <h5 className="mb-0 kanban-column-title">
            {list.title}
            <span className="kanban-title-badge">{list.tasks.length}</span>
          </h5>
          <div className="hover-actions-trigger"></div>
          <Button
            className="ms-auto kanban-collapse-icon p-0"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <UilArrowFromRight size={16} />
            ) : (
              <UilLeftArrowToLeft size={16} />
            )}
          </Button>
        </div>
      </div>
      <div className="kanban-items-container">
        {list.tasks.map(task => (
          <KanbanListItemCard key={task.id} task={task} />
        ))}
      </div>
      <div className="py-3 px-4 kanban-add-task">
        <Button className="bg-300 me-2 px-0">
          <FontAwesomeIcon
            icon={faPlus}
            className="text-white dark__text-400"
            transform="grow-4 down-1"
          />
        </Button>
        <Form.Control
          className="search-input rounded-3 px-3"
          placeholder="Add new task"
        />
      </div>
    </div>
  );
};

export default KanbanList;
