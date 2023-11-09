import { useReducer, useState } from 'react'
import Todo from './Todo'

const reducer = (todo,action) => {
    switch (action.type){
      case 'add-todo':
        return [...todo,newTodo(action.payload.name)]
      case 'toogle-todo':
        return todo.map(todo => {
          if(todo.id === action.payload.id){
            return {...todo, complete: !todo.complete}
          }
          return todo
        })  
      case 'delete-todo':
          return todo.filter(todo => todo.id !== action.payload.id) 
      default:
        return todo   
    }
}

const newTodo = (name) => {
  return {id: Date.now(), name: name, complete: false}
}

function App() {
  const [name, setName] = useState('')
  const [todo,dispatch] = useReducer(reducer,[])
  console.log(todo)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'add-todo', payload:{name: name}})
    setName('')
  }

  return (
    <div className="gap-2 m-9">
      <form onSubmit={handleSubmit}>
        <input
          className="py-5 px-3 outline-sky-600 border border-[#6e6969] rounded-md"
          type="text"
          placeholder="add your task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form><br />
      {todo.map((data) => (
        <Todo id={data.id} todo={data} dispatch={dispatch}/>
      ))}
    </div>
  );
}

export default App
