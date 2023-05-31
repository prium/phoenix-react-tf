import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import TodoListItem from 'components/modules/project-management/todo-list/TodoListItem';
import { todoList } from 'data/project-management/todoListData';
import React from 'react';

const ProjectTodoList = () => {
  return (
    <div className="mb-9">
      <h2 className="mb-4">
        Todo list<span className="text-700 fw-normal">(23)</span>
      </h2>
      <div className="d-flex align-items-center flex-wrap gap-x-5 gap-y-3 mb-3">
        <SearchBox placeholder="Search tasks" style={{ maxWidth: '30rem' }} />
        <div>
          <Button
            variant="link"
            className="p-0 fs-9 text-700 text-decoration-none me-3"
            startIcon={<FontAwesomeIcon icon="filter" className="fs-10 me-1" />}
          >
            23 tasks
          </Button>
          <Button
            variant="link"
            className="p-0 fs-9 text-primary text-decoration-none"
            startIcon={<FontAwesomeIcon icon="sort" className="fs-10" />}
          >
            Sorting
          </Button>
        </div>
      </div>
      {todoList.map((todo, index) => (
        <TodoListItem
          key={todo.task}
          todo={todo}
          className={classNames({
            'border-top': index === 0
          })}
        />
      ))}
    </div>
  );
};

export default ProjectTodoList;
