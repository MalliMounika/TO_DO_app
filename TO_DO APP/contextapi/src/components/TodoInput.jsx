import React , { useState, useContext } from 'react'
import TodoContext from '../context/TodoContext'


function TodoInput(){
    const [input, setInput] = useState("")

  const { addTodo } = useContext(TodoContext)

  const handleAddTodo = (e) => {
    e.preventDefault()

    addTodo(input)
    setInput("")
  }

  return(
    <div>
      <p class="app">Schedule & Tasks</p>
      
    <input class="todo-input" type="text" value = {input} onChange = {(e) => setInput(e.target.value)}/>
    <button class="todo-add-button" onClick={handleAddTodo}>Add Todo</button>

    </div>
  )
}

export default TodoInput