import {
  UilArrowFromRight,
  UilLeftArrowToLeft
} from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { KanbanBoardItem } from 'data/kanban';
import React, { useState } from 'react';
import KanbanListItemCard from './KanbanListItemCard';
import { Dropdown, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import KanbanListHeader from './KanbanListHeader';

interface KanbanListProps {
  list: KanbanBoardItem;
}

const KanbanList = ({ list }: KanbanListProps) => {
  const [collapsed, setCollapsed] = useState(!!list.isCollapsed);
  return (
    <div
      className={classNames('kanban-column scrollbar', {
        collapsed
      })}
    >
      <KanbanListHeader
        list={list}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className="kanban-items-container">
        {list.tasks.map(task => (
          <KanbanListItemCard key={task.id} list={list} task={task} />
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
