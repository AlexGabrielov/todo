import React from 'react';

const Todo = props => {
  return (
    <li>
      <input type="checkbox" checked={props.todo.checked} onChange={() => props.onToggle(props.todo.id)} />
      <button onClick={() => props.onDelete(props.todo.id)}>Delete</button>
      <span>{props.todo.text}</span>
    </li>
  );
};

export default Todo;