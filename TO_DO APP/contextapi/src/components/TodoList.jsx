import React, { useContext } from "react"
import TodoContext from "../context/TodoContext"

import "../styles/styles.css"

function TodoList() {

    const { todos, deleteTodo } = useContext(TodoContext)

     return (
        
        <div class="todo-list-container">

            <h1 class="app-title">My To-Do</h1>

            {
                todos?.map((todo) => (
                    <div class="todo-item" key={todo.id}>
                        <p class="todo-text">
                            {todo.todoText}{" "}</p>
                            <button class="todo-button update">Update</button>
                            <button class="todo-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            
                        
                    </div>
                )
                )
            }
        </div>
        
    )
}

export default TodoList