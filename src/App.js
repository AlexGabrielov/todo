import React, { useState, useEffect } from 'react';
import Todo from './Todo';

let id = 0

function App() {

  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  useEffect(() => {
    const timerId = setInterval(increment, 1000)
    console.log(timerId)
    return () => {
      clearInterval(timerId)
    }
  })

  const addTodo = () => {
    const text = prompt('todo text gimme')
    setTodos([...todos, { text, id: id++, checked: false }])
  }

  const deleteTodo = (id) => setTodos([...todos, todos.filter(todo => todo.id !== id)])

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      return (todo.id !== id) ?
        todo : {
          text: todo.text,
          id: todo.id,
          checked: !todo.checked,
        }
    }))
  }

  return (
    <div>
      <div>count: {count} </div>
      <div>Todo Count: {todos.length}</div>
      <div>Unchecked Todo Count: {todos.filter(todo => !todo.checked).length}</div>
      <button onClick={addTodo}>Add a new Todo</button>
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo} />)
        }
      </ul>
    </div>
  )
}

export default App;

