import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import React, { ChangeEvent, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import TodoItemDetailsModal from './TodoItemDetailsModal';
import { ToDoItem } from 'data/project-management/todoListData';
import classNames from 'classnames';

const TodoListItem = ({ todo, className }: { todo: ToDoItem; className?: string }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div
        className={classNames(
          className,
          'd-flex align-items-center hover-actions-trigger border-bottom'
        )}
      >
        <Form.Check.Input
          type="checkbox"
          className="form-check-input-todolist flex-shrink-0 me-2 mt-0"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSelected(e.target.checked);
          }}
        />
        <Row
          className="justify-content-between align-items-md-center btn-reveal-trigger border-200 gx-0 flex-1 my-1 py-3"
          onClick={() => setOpenDetailsModal(true)}
        >
          <Col xs={12} md="auto" xl={12} xxl="auto">
            <div className="mb-1 mb-md-0 d-flex align-items-center lh-1 gap-2">
              <h5
                className={classNames(
                  'mb-1 mb-md-0 mb-xl-1 mb-xxl-0 line-clamp-1 fw-semi-bold text-900',
                  {
                    'text-decoration-line-through': selected
                  }
                )}
              >
                {todo.task}
              </h5>
              {todo.badge && (
                <Badge variant="phoenix" bg={todo.badge.bg} className="fs-10 ms-auto">
                  {todo.badge.label}
                </Badge>
              )}
            </div>
          </Col>
          <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
            <div className="d-flex lh-1 align-items-center">
              {todo.attachment && (
                <Button variant="" className="p-0 text-700 fs-10 me-2">
                  <FontAwesomeIcon icon="paperclip" className="me-1" />
                  {todo.attachment}
                </Button>
              )}
              <p className="text-700 fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
                {todo.date}
              </p>
              <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                <p className="text-700 fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl border-300">
                  {todo.time}
                </p>
              </div>
            </div>
          </div>
        </Row>
        <div
          className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute"
          style={{ top: '23%' }}
          data-event-propagation-prevent="data-event-propagation-prevent"
        >
          <div
            className="hover-actions end-0"
            data-event-propagation-prevent="data-event-propagation-prevent"
          >
            <Button variant="phoenix-secondary" className="btn-icon fs-10 me-1">
              <FontAwesomeIcon icon="edit" />
            </Button>
            <Button variant="phoenix-secondary" className="btn-icon fs-10">
              <FontAwesomeIcon icon="trash" className="text-danger" />
            </Button>
          </div>
        </div>
      </div>
      <TodoItemDetailsModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        item={todo}
      />
    </>
  );
};

export default TodoListItem;
