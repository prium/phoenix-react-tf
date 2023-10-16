import React, { Dispatch, SetStateAction } from 'react';
import {
  UilArrowFromRight,
  UilLeftArrowToLeft
} from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import { KanbanBoardItem } from 'data/kanban';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

interface KanbanListHeaderProps {
  list: KanbanBoardItem;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const kanbanHeaderActions = [
  {
    label: 'Sort tasks',
    isNested: true
  },
  {
    label: 'Sort all tasks'
  },
  {
    label: 'Move all tasks',
    isNested: true
  },
  {
    label: 'Remove all tasks'
  },
  {
    hr: true
  },
  {
    label: 'Import'
  },
  {
    label: 'Export',
    isNested: true
  },
  {
    hr: true
  },
  {
    label: 'Move column',
    isNested: true
  },
  {
    label: 'Duplicate column'
  },
  {
    label: 'Delete column'
  },
  {
    label: 'Archive column'
  },
  {
    hr: true
  },
  {
    label: 'Edit title & description'
  },
  {
    label: 'Edit colour',
    isNested: true
  }
];

const KanbanListHeader = ({
  list,
  collapsed,
  setCollapsed
}: KanbanListHeaderProps) => {
  return (
    <div className="kanban-column-header px-4 hover-actions-trigger">
      <div
        className={`d-flex align-items-center border-bottom border-3 py-3 border-${list.borderColor}`}
      >
        <h5 className="mb-0 kanban-column-title">
          {list.title}
          <span className="kanban-title-badge">{list.tasks.length}</span>
        </h5>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle
            variant=""
            size="sm"
            className="hover-actions dropdown-caret-none kanban-header-dropdown-btn"
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="py-2" style={{ width: '15rem' }}>
            {kanbanHeaderActions.map(action => (
              <>
                {action.hr ? (
                  <hr className="my-2" />
                ) : (
                  <Dropdown.Item
                    href="#!"
                    key={action.label}
                    className="d-flex flex-between-center border-1"
                  >
                    {action.label}
                    {action.isNested && (
                      <FontAwesomeIcon icon={faAngleRight} className="fs-10" />
                    )}
                  </Dropdown.Item>
                )}
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>

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
  );
};

export default KanbanListHeader;
