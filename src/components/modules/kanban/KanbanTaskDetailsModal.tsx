import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge, { BadgeBg } from 'components/base/Badge';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { KanbanBoardTask } from 'data/kanban';
import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

interface KanbanTaskDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  task: KanbanBoardTask;
}

const KanbanTaskDetailsModal = ({
  show,
  handleClose,
  task
}: KanbanTaskDetailsModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" className="p-0">
      {task.img && (
        <Modal.Header className="position-relative p-0 overflow-hidden">
          <img src={task.img} alt="" className="w-100 fit-cover" height={200} />
        </Modal.Header>
      )}
      <Modal.Body className="">
        {/* <ActionSection /> */}
        <Row className="gy-4 py-0 gx-0">
          <Col xs={12} lg={8}>
            <Row className="mt-0 gy-4 pb-3 gx-0 px-3">
              <Col xs={4} sm={3}>
                <h6 className="text-600 fw-bolder lh-sm mt-1">TITLE</h6>
              </Col>
              <Col xs={8} sm={9}>
                <h4 className="mb-0 text-1100 lh-sm">
                  Reproduced below for those interested
                </h4>
              </Col>

              <Col xs={4} sm={3}>
                <h6 className="text-600 fw-bolder lh-sm mt-1">DESCRIPTION</h6>
              </Col>
              <Col xs={8} sm={9}>
                <p className="fs--1 mb-0">{task.details}</p>
              </Col>

              <Col xs={4} sm={3}>
                <h6 className="text-600 fw-bolder lh-sm mt-1">BOARD</h6>
              </Col>
              <Col xs={8} sm={9}>
                <p className="mb-0 text-1100 fw-semi-bold">Phoenix</p>
              </Col>

              <Col xs={4} sm={3}>
                <h6 className="text-600 fw-bolder lh-sm mt-1">COLUMN</h6>
              </Col>
              <Col xs={8} sm={9}>
                <p className="mb-0 text-1100 fw-semi-bold d-inline-block kanban-column-underline-warning">
                  Doing
                </p>
              </Col>

              {task.members && (
                <>
                  <Col xs={4} sm={3}>
                    <h6 className="text-600 fw-bolder lh-sm mt-1">
                      ASSAIGNED TO
                    </h6>
                  </Col>
                  <Col xs={8} sm={9} className="d-flex gap-1">
                    {task.members?.map(member => (
                      <AvatarDropdown user={member} size="s" key={member.id} />
                    ))}
                  </Col>
                </>
              )}

              <Col xs={4} sm={3}>
                <h6 className="text-600 fw-bolder lh-sm mt-1">PRIORITY</h6>
              </Col>
              <Col xs={8} sm={9}>
                <p className="mb-0 text-1100 fw-semi-bold">
                  <FontAwesomeIcon
                    icon={faCircle}
                    transform="shrink-6 down-1"
                  />
                  High
                </p>
              </Col>

              <Col xs={4} sm={3}>
                <h6 className="text-600 fw-bolder lh-sm mt-1">CATEGORY</h6>
              </Col>
              <Col xs={8} sm={9}>
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
              </Col>
            </Row>
          </Col>

          {/* <Col xs={12} xl={3}>
            <h5 className="text-800 mb-3">Add to card</h5>
            <div className="mb-6 d-flex flex-column gap-2">
              {addToCardItems.map(item => (
                <Button
                  key={item.label}
                  variant="soft-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-100 text-start"
                  size="sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <h5 className="text-800 mb-3">Actions</h5>
            <div className="d-flex flex-column gap-2">
              {actionItems.map(item => (
                <Button
                  variant="soft-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-100 text-start"
                  size="sm"
                  key={item.label}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </Col> */}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default KanbanTaskDetailsModal;
