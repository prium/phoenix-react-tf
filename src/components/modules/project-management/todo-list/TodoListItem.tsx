import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import TodoItemDetailsModal from './TodoItemDetailsModal';
import { ToDoItem } from 'data/project-management/todoListData';
import classNames from 'classnames';

type Breakpoints = 'md' | 'lg' | 'xl' | 'xxl';

interface TodoListItemInterface {
  todo: ToDoItem;
  className?: string;
  halfLayoutBreakpoints?: Breakpoints[];
  fullLayoutBreakpoints?: Breakpoints[];
}

const TodoListItem = ({
  todo,
  className,
  halfLayoutBreakpoints,
  fullLayoutBreakpoints
}: TodoListItemInterface) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleSelectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.checked);
  };

  const getBreakpointClasses = useCallback(
    (className: string, values: (number | string)[]) =>
      [
        ...halfLayoutBreakpoints!.map(breakpoint => `${className}-${breakpoint}-${values[0]}`),
        ...fullLayoutBreakpoints!.map(breakpoint => `${className}-${breakpoint}-${values[1]}`)
      ].join(' '),
    [halfLayoutBreakpoints, fullLayoutBreakpoints]
  );

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
          className={classNames(
            'form-check-input-todolist flex-shrink-0 me-2 mb-0 mt-3 align-self-start'
          )}
          onChange={handleSelectionChange}
        />
        <Row
          className="justify-content-between btn-reveal-trigger border-200 gx-0 flex-1 py-3 gy-1"
          onClick={() => setOpenDetailsModal(true)}
        >
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce((acc: any, val: any) => {
              acc[val] = 'auto';
              return acc;
            }, {})}
            {...halfLayoutBreakpoints?.reduce((acc: any, val: any) => {
              acc[val] = 12;
              return acc;
            }, {})}
          >
            <div className="d-flex align-items-center lh-1 gap-2">
              <h5
                className={classNames('mb-0 line-clamp-1 fw-semi-bold text-900', {
                  'text-decoration-line-through': selected
                })}
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
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce((acc: any, val: any) => {
              acc[val] = 'auto';
              return acc;
            }, {})}
            {...halfLayoutBreakpoints?.reduce((acc: any, val: any) => {
              acc[val] = 12;
              return acc;
            }, {})}
          >
            <div className="d-flex lh-1 align-items-center">
              {todo.attachment && (
                <Button variant="" className="p-0 text-700 fs-10 me-2">
                  <FontAwesomeIcon icon="paperclip" className="me-1" />
                  {todo.attachment}
                </Button>
              )}
              <p
                className={classNames(
                  getBreakpointClasses('me', [2, 3]),
                  'text-700 fs-10 me-2 mb-0'
                )}
              >
                {todo.date}
              </p>
              <div className={classNames(getBreakpointClasses('hover', ['show', 'hide']))}>
                <p
                  className={classNames(
                    getBreakpointClasses('ps', [0, 3]),
                    'text-700 fs-10 fw-bold mb-0 border-start-md border-xl-0 border-start-xxl border-300'
                  )}
                >
                  {todo.time}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className={classNames(
            getBreakpointClasses('d', ['none', 'block']),
            'd-none end-0 position-absolute'
          )}
          style={{ top: '23%' }}
        >
          <div className="hover-actions end-0">
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
