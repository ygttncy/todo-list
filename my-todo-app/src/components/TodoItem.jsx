// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';

const TodoItem = ({ index, todo, onToggleComplete, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(index)}
        />
        <span className="custom-checkbox"></span>
      </label>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <div className="todo-actions">
        <button onClick={() => onDelete(index)} className="delete">
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
