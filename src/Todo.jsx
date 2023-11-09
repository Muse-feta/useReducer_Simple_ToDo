import React from 'react'

const Todo = ({todo,dispatch}) => {
  return (
    <div className="flex gap-3">
      <div className={todo.complete ? "text-green-500" : "text-red-500"}>
        <span className="text-xl">{todo.name}</span>
      </div>
      <button
        className="px-2 py-4 bg-sky-600 hover:bg-sky-700 rounded-md"
        onClick={() => dispatch({ type: "toogle-todo" , payload: {id: todo.id}})}
      >
        Toogle
      </button>
      <button className="px-2 py-4 bg-sky-600 hover:bg-sky-700 rounded-md" onClick={() => dispatch({type: "delete-todo", payload: {id: todo.id}})}>
        Delete
      </button>
    </div>
  );
}

export default Todo