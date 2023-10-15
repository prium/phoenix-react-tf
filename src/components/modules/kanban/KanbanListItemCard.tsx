import {
  faCalendarXmark,
  faCircle,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Badge, { BadgeBg } from 'components/base/Badge';
import { KanbanBoardTask } from 'data/kanban';
import { Card } from 'react-bootstrap';
import KanbanTaskDetailsModal from './KanbanTaskDetailsModal';
import { useState } from 'react';

const KanbanListItemCard = ({ task }: { task: KanbanBoardTask }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className="sortable-item-wrapper border-bottom px-2 py-2 cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <Card className="sortable-item">
          <Card.Body className="p-3">
            {task.img && (
              <div
                className="position-relative mb-2 overflow-hidden rounded w-100"
                style={{ height: 200 }}
              >
                <div
                  className="bg-holder banner-bg"
                  style={{
                    backgroundImage: `url(${task.img})`,
                    backgroundPosition: 'bottom left'
                  }}
                />
              </div>
            )}
            <div className="kanban-status mb-1 position-relative lh-1">
              <FontAwesomeIcon
                transform="shrink-1 down-3"
                icon={faCircle}
                className={`me-2 d-inline-block text-${task.status.color}`}
              />
              <Badge
                variant="phoenix"
                bg={task.status.color as BadgeBg}
                className="fs-10"
              >
                {task.status.label}
                <FontAwesomeIcon
                  icon={task.status.icon}
                  transform="up-2"
                  className="ms-1 d-inline-block"
                  style={{ height: 7.8, width: 7.8 }}
                />
              </Badge>
            </div>
            <p className="mb-2 stretched-link">{task.details}</p>
            <div className="d-flex mt-2 align-items-center">
              {task.date && (
                <p className="mb-0 text-600 fs-9 lh-1 me-3 white-space-nowrap">
                  <FontAwesomeIcon
                    icon={faCalendarXmark}
                    className="fs-0 me-2 d-inline-block"
                  />
                  <>{task.date}</>
                </p>
              )}
              {task.attachments && (
                <p className="mb-0 text-600 fs-9 lh-1">
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    className="fs-0 me-2 d-inline-block"
                  />
                  {task.attachments}
                </p>
              )}
              {task.completedTasks && (
                <p className="mb-0 text-600 fs-9 lh-1">
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    className="fs-0 me-2 d-inline-block"
                  />
                  {task.completedTasks[0]} / {task.completedTasks[1]}
                </p>
              )}
              {task.members && (
                <Avatar.Group
                  total={task.members.length}
                  size="s"
                  className="ms-auto"
                >
                  {task.members.slice(0, 4).map(member => (
                    <Avatar key={member.id} size="s" src={member.avatar} />
                  ))}
                </Avatar.Group>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>

      <KanbanTaskDetailsModal
        show={openModal}
        handleClose={() => setOpenModal(false)}
        task={task}
      />
    </>
  );
};

export default KanbanListItemCard;
