import React, { useState } from "react"
import TodoContext from "./TodoContext"

function TestContextProvider({ children }) {

    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        if (!text) return null

        const todo = {
            todoText: text,
            isCompleted: false,
            id: Date.now()
        }

        setTodos((prev) => {
            return [
                ...prev, todo
            ]
        })

    }
    const deleteTodo = (id) => {

        setTodos((prev) => prev.filter((item) => item.id !== id));
    }
    return (

        <TodoContext.Provider value={{ addTodo, todos, deleteTodo }}>
            
            {children}

        </TodoContext.Provider>
    )
}

export default TestContextProvider