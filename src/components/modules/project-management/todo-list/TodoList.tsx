import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TodoListItem from './TodoListItem';
import { todoList } from 'data/project-management/todoListData';
import classNames from 'classnames';
import Scrollbar from 'components/base/Scrollbar';

const TodoList = () => {
  return (
    <Card className="h-100">
      <Card.Header className="border-bottom-0 pb-0">
        <Row className="justify-content-between align-items-center mb-4 gy-2">
          <Col xs="auto">
            <h3 className="text-1100">To do</h3>
            <p className="mb-0 text-700">Task assigned to me</p>
          </Col>
          <Col xs="auto" className="w-100 w-md-auto">
            <Row className="row align-items-center g-0 justify-content-between">
              <Col xs={12} sm="auto">
                <SearchBox placeholder="Search tasks" style={{ maxWidth: '30rem' }} />
              </Col>
              <Col xs="auto" className="d-flex">
                <Button
                  variant="link"
                  className="p-0 ms-3 fs-9 text-700 fw-bold text-decoration-none"
                  startIcon={<FontAwesomeIcon icon="filter" className="fs-10 me-1" />}
                >
                  23 tasks
                </Button>
                <Button
                  variant="link"
                  className="p-0 ms-3 fs-9 text-primary fw-bold text-decoration-none"
                  startIcon={<FontAwesomeIcon icon="sort" className="fs-10" />}
                >
                  Sorting
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Header>
      <Scrollbar style={{ minHeight: 300 }}>
        <Card.Body className="py-0">
          {todoList.map((todo, index) => (
            <TodoListItem
              key={todo.task}
              todo={todo}
              className={classNames({
                'border-top': index === 0
              })}
              fullLayoutBreakpoints={['md', 'xxl']}
              halfLayoutBreakpoints={['xl']}
            />
          ))}
        </Card.Body>
      </Scrollbar>
      <Card.Footer className="border-0">
        <Button
          startIcon={<FontAwesomeIcon icon="plus" />}
          variant="link"
          className="text-decoration-none p-0"
        >
          Add new task
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TodoList;
