//let id = 0

// class App extends React.Component {
//   state = {
//     todos: [],
//     count: 0,
//   }
  

//   componentDidMount() {
//     this.interval = setInterval(this.increment, 1000)
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('ass?')
//     return !(nextState.count % 2)
//   }

//   increment = () => {
//     this.setState(prevState => ({
//       count: ++prevState.count
//     }))

//   }

//   addTodo = () => {
//     const text = prompt('todo text gimme')

//     this.setState(prevState => ({
//       todos: [
//         ...prevState.todos,
//         { text, id: id++, checked: false }
//       ]
//     }))
//   }

//   deleteTodo = (id) => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== id)
//     }))
//   }

//   toggleTodo = (id) => {
//     this.setState(prevState => ({
//       todos: prevState.todos.map(todo => {
//         return todo.id !== id ? todo : {
//           text: todo.text,
//           id: todo.id,
//           checked: !todo.checked,
//         }
//       })

//     }))

//   }

//   render() {
//     return (
//       <div>
//         <div>count: {this.state.count} </div>
//         <div>Todo Count: {this.state.todos.length}</div>
//         <div>Unchecked Todo Count: {this.state.todos.filter(todo => !todo.checked).length}</div>
//         <button onClick={this.addTodo}>Add a new Todo</button>
//         <ul>
//           {this.state.todos.map(todo =>
//             <Todo
//               todo={todo}
//               onDelete={this.deleteTodo}
//               onToggle={this.toggleTodo} />)
//           }
//         </ul>
//       </div>
//     )
//   }
// }